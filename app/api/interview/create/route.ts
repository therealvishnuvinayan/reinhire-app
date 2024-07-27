import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
  const { industry, job, experienceLevel, keySkills, jobDescription } =
    await req.json();

  if (!industry || !job || !experienceLevel || !keySkills || !jobDescription) {
    return NextResponse.json(
      { message: 'Please provide all fields' },
      { status: 400 },
    );
  }

  try {
    const interview = await prisma.interviews.create({
      data: {
        industry,
        job,
        experienceLevel,
        keySkills,
        jobDescription,
      },
    });

    return NextResponse.json(
      { message: 'Interview created successfully', interview },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 },
    );
  }
}
