import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password)
    return NextResponse.json(
      { message: 'Please provide all fields' },
      { status: 400 },
    );

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return NextResponse.json(
      { message: 'User created successfully', user },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 },
    );
  }
}
