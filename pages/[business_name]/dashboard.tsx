import Head from 'next/head';
import { useRouter } from 'next/router';

// Redux Imports to read the collapseState of the sider
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

import { BarChart, DoughnutChart } from '../../charts';
import { ActivityTracker, QuickActions, TopSells } from '../../components';

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
  const siderCollapsed = useSelector(
    (state: RootState) => state.collapse.value
  );

  const router = useRouter();
  const { business_name } = router.query;

  return (
    <div className="">
      <Head>
        <title>MbaoBiz - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="font-regular text-2xl mb-4">Dashboard</h1>
        <div className="flex w-full space-x-4 ">
          <div>
            <div className="flex-grow bg-white rounded-lg h-80">
              <DoughnutChart />
            </div>
            <div className="bg-white rounded-lg  p-4">
              <TopSells />
            </div>
          </div>
          <div
            className={
              siderCollapsed
                ? 'flex-grow max-w-lg space-y-4'
                : 'flex-grow max-w-md space-y-4'
            }
          >
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
          <div
            className="flex-grow bg-white rounded-lg"
            style={{ height: '45rem' }}
          >
            <ActivityTracker />
          </div>
        </div>
      </main>
    </div>
  );
}
