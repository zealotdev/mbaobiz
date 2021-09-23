import { Bar } from 'react-chartjs-2';

export default function BarChart() {
  const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Sales',
        data: [340000, 700500, 970300, 97000, 253000, 500000, 0],
        borderRadius: 8,
        backgroundColor: ['#5AD6B0'],
        cutout: '80%',
      },
    ],
  };

  return (
    <div className="py-2 px-4 h-80">
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Sales in Prev. 6 months',
              align: 'start',
              color: '#6A7280',
              font: {
                size: 16,
                weight: 'normal',
              },
            },
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
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
                padding: { top: 10, left: 0, right: 0, bottom: 0 },
              },
            },
          },
        }}
      />
    </div>
  );
}
