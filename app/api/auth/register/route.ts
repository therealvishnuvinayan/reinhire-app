import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password, role } = await req.json();
  if (!email || !password || !role)
    return NextResponse.json(
      { message: "Please provide all fields" },
      { status: 400 }
    );

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        role,
      },
    });
    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.log("##entered catch");
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
