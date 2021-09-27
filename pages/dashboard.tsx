import Head from 'next/head';
import { BarChart, DoughnutChart } from '../charts';
import { ActivityTracker, QuickActions, TopSells } from '../components';

const chartData = [340000, 700500, 970300, 97000, 253000, 500000, 0];
const chartScale = {
  x: {
    display: true,
    title: {
      display: true,
      text: 'Month',
      color: '#6A7280',
      font: {
        size: 20,
        lineHeight: 1.2,
      },
      padding: { top: 10, bottom: 0 },
    },
  },
};

export default function Dashboard() {
  return (
    <div className="">
      <Head>
        <title>MbaoBiz - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="font-regular text-2xl mb-4">Dashboard</h1>
        <div className="flex full space-x-4 ">
          <div className="w-80 space-y-4">
            <div className="bg-white rounded-lg h-80">
              <DoughnutChart />
            </div>
            <div className="bg-white rounded-lg  p-4">
              <TopSells />
            </div>
          </div>
          <div className="flex-grow flex-shrink space-y-4">
            <div className="bg-white rounded-lg h-80">
              <BarChart
                chartData={chartData}
                chartScale={chartScale}
                chartLabel={'Sales'}
              />
            </div>
            <div className="bg-white rounded-lg ">
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