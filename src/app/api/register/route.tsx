import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { name, pass } = await request.json();

  const exist_user = await prisma.user.findUnique({ where: { name } });
  if (exist_user) {
    return NextResponse.json(
      { message: "user already exists" },
      { status: 400 }
    );
  } else {
    const user = await prisma.user.create({
      data: {
        name,
        pass,
      },
    });

    return NextResponse.json(user);
  }
}
