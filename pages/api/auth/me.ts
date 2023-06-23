import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function Me(req: NextApiRequest, res: NextApiResponse) {
  const BearerToken = req.headers["authorization"] as string;
 
  const Token = BearerToken.split(" ")[1];
 

  const payload = jwt.decode(Token) as { email: string };
  if (!payload.email)
    return res.status(401).json({ errorMessage: "Unauthorized request!" });
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      city: true,
      phone: true,
      email: true,
    },
  });

  return res.json({
    firstname : user?.first_name,
    lastname : user?.last_name,
    email : user?.email,
    phone : user?.phone,
    city : user?.city,  
  });
}
