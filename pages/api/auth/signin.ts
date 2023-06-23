import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import {setCookie} from 'cookies-next'

const prisma = new PrismaClient();

export default async function Signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const Errors: string[] = [];
    const { email, password } = req.body;
    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is Invalid!",
      },
      {
        valid: validator.isLength(password, { min: 1 }),
        errorMessage: "Password must not empty!",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        Errors.push(check.errorMessage);
      }
    });

    if (Errors.length) {
      res.status(400).json({ errorMessage: Errors[0] });
    }

    const UserWithEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (!UserWithEmail)
      return res
        .status(401)
        .json({ errorMessage: "Email or Password is Invalid" });
    const isMatch = await bcrypt.compare(password, UserWithEmail.password);
    if (!isMatch) {
      res.status(401).json({ errorMessage: "Email or Password is Invalid" });
    }

    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({ email: UserWithEmail.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);


    setCookie("jwt" , token , {res , req , maxAge : 6 * 60 * 24} )  //remain 24 hours

    return res.status(200).json({
      firstname : UserWithEmail.first_name,
      lastname : UserWithEmail.last_name,
      email : UserWithEmail.email,
      phone : UserWithEmail.phone,
      city : UserWithEmail.city,
    });
  }
  return res.status(404).json({ errorMessage: " Unknown EndPoint" });
}
