import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
export async function middleware(req: NextRequest, res: NextResponse) {
  const BearerToken = req.headers.get("authorization") as string;
  if (!BearerToken) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request!" }),
      { status: 401 }
    );
  }
  const Token = BearerToken.split(" ")[1];
  if (!Token) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request!" }),
      { status: 401 }
    );
  }
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(Token, secret);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request!" }),
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/auth/me"],
};
