import Head from 'next/head';
import { BarChart, DoughnutChart } from '../charts';
import { ActivityTracker, QuickActions, TopSells } from '../components';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>MbaoBiz - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 pt-8 pb-8">
        <h1 className="font-regular text-2xl mb-4">Dashboard</h1>
        <div className="flex w-full space-x-4 h-96">
          <div className="w-80 space-y-4">
            <div className="bg-white rounded-lg h-80">
              <DoughnutChart />
            </div>
            <div className="bg-white rounded-lg h-96 p-4">
              <TopSells />
            </div>
          </div>
          <div className="flex-grow space-y-4">
            <div className="bg-white rounded-lg h-80">
              <BarChart />
            </div>
            <div className="bg-white rounded-lg h-96">
              <QuickActions />
            </div>
          </div>
          <div className="w-80 bg-white rounded-lg" style={{ height: '45rem' }}>
            <ActivityTracker />
          </div>
        </div>
      </main>
    </div>
  );
}
