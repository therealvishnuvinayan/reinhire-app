import { Button } from '@nextui-org/button';
import React from 'react';

import InterviewTable from '@/components/tables/interview';

const Interviews = () => {
  return (
    <div className=" pr-6">
      <div className="flex justify-end mb-4">
        <Button color="secondary">Create AI Interview</Button>
      </div>
      <div>
        <InterviewTable />
      </div>
    </div>
  );
};

export default Interviews;
