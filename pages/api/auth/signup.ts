import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose"
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();
export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstname, lastname, email, city, phone, password, confirmpass } =
      req.body;
    const errors: string[] = [];
    const validationSchema = [
      {
        valid: validator.isLength(firstname, {
          min: 2,
          max: 25,
        }),
        errorMessage: "FirstName must between in 2 and 25 characters! ",
      },
      {
        valid: validator.isLength(lastname, {
          min: 2,
          max: 25,
        }),
        errorMessage: "LastName must between in 2 and 25 characters! ",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is Invalid!",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Phone number is Invalid!",
      },

      {
        valid: validator.isLength(city, {
          min: 2,
          max: 25,
        }),
        errorMessage: "City is Invalid! ",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage:
          " Password must be at least 8 characters long and contain a mix of uppercase and lowercase letters, numbers, and symbols. ",
      },
      {
        valid: validator.equals(confirmpass, password),
        errorMessage: "is not match with your password! ",
      },
    ];
    const HashedPass = await bcrypt.hash(password , 10)

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });
    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    const UserWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    
    if (UserWithEmail)
      return res
        .status(400)
        .json({ errorMessage: "Email is associated with another account!" });

        const newUser = await prisma.user.create({
          data : {
            first_name : firstname ,
            last_name : lastname ,
            city ,
            phone ,
            email,
            password : HashedPass
          }
        })

        // JWT
        const alg ="HS256"
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const token = await new jose.SignJWT({email : newUser.email})
          .setProtectedHeader({alg})
          .setExpirationTime('24h')
          .sign(secret)


    setCookie("jwt" , token , {res , req , maxAge : 6 * 60 * 24} )  //remain 24 hours

    return res.status(200).json({
      firstname : newUser.first_name,
      lastname : newUser.last_name,
      email : newUser.email,
      phone : newUser.phone,
      city : newUser.city,  
    });
  }
  return res.status(404).json({
    errorMessage : "Unknown EndPoint"
  })
}
