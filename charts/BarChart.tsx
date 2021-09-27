import { Bar } from 'react-chartjs-2';

export default function BarChart({ chartData, chartScale, chartLabel }) {
  const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: chartLabel,
        data: chartData,
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
          scales: chartScale,
        }}
      />
    </div>
  );
}
