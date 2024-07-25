import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcryptjs';

import prisma from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password)
    return NextResponse.json(
      { message: 'Please provide all fields' },
      { status: 400 },
    );

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 404 },
      );
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: 'Incorrect password' },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: 'User logged in successfully', user },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 },
    );
  }
}
