'use client';

import ColumnChart from '@/components/charts/ColumnChart';
import DonutChart from '@/components/charts/DonutChart';
import SplineAreaChart from '@/components/charts/SplineAreaChart';

export default function Home() {
  return (
    <section className="grid grid-cols-8 px-6 gap-6">
      <div className="col-span-2">
        <div className="border border-b-1 rounded-md shadow-md p-5">
          <h1 className="text-lg">Total Jobseekers</h1>
          <p className="text-sm">210</p>
          <SplineAreaChart />
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <h1 className="text-lg">Total Interviews</h1>
          <p className="text-sm">510</p>
          <ColumnChart />
        </div>
      </div>

      <div className="col-span-4">
        <div>
          <h1 className="text-lg">Total Session</h1>
          <p className="text-sm">104</p>
          <DonutChart />
        </div>
      </div>
    </section>
  );
}
