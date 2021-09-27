import { BarChart } from '../../charts';

const chartData = [340000, 700500, 970300, 97000, 253000, 500000, 0];
const chartScale = {
  xAxes: [
    {
      gridLines: {
        display: false,
      },
    },
  ],
  yAxes: [
    {
      gridLines: {
        display: false,
      },
    },
  ],
  // x: {
  //   display: true,
  //   title: {
  //     display: true,
  //     text: 'Month',
  //     color: '#6A7280',
  //     font: {
  //       size: 20,
  //       lineHeight: 1.2,
  //     },
  //     padding: { top: 10, bottom: 0 },
  //   },
  // },
};

export default function Stats() {
  return (
    <div>
      {/* Total Stocks Count */}
      <div>
        <h2># of Mbao Stocked</h2>
        <h3>345</h3>
      </div>
      {/* Stocks Stats in Chart */}
      <div>
        <BarChart
          chartData={chartData}
          chartScale={chartScale}
          chartLabel={''}
        />
      </div>
    </div>
  );
}
