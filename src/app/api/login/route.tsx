import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { name, pass } = await request.json();

  const user = await prisma.user.findUnique({ where: { name } });

  if (user) {
    if (pass === user.pass) {
      return NextResponse.json({ status: 200 });
    } else {
      return NextResponse.json(
        { message: "password is incorrect" },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json({ message: "user not exists" }, { status: 400 });
  }
}
