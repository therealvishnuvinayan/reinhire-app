import { hash } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
  const { email, password, role } = await req.json();

  if (!email || !password || !role)
    return NextResponse.json(
      { message: 'Please provide all fields' },
      { status: 400 },
    );

  try {
    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json(
      { message: 'User created successfully', user },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
