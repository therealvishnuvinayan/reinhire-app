'use client';

import { Button } from '@nextui-org/button';
import React from 'react';
import { useRouter } from 'next/navigation';

import InterviewTable from '@/components/tables/interview';


const Interviews = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="flex justify-end mb-4">
        <Button
          color="secondary"
          onPress={() => router.push('/interviews/create')}
        >
          Create AI Interview
        </Button>
      </div>
      <div>
        <InterviewTable />
      </div>
    </div>
  );
};

export default Interviews;
