import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart() {
  const data = {
    labels: ['2*2', '2*4', '2*6', '3*10', '2*8', '1*2'],
    datasets: [
      {
        label: '# of Woods By Size',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#4C8DEB',
          '#FDAC00',
          '#FE8001',
          '#FE3502',
          '#D2064C',
          '#A8006E',
        ],
        cutout: '80%',
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="py-2 px-4 h-80">
      <Doughnut
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: '# of Woods By Size',
              align: 'start',
              color: '#6A7280',
              font: {
                size: 16,
                weight: 'normal',
              },
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          },
          maintainAspectRatio: false,
          responsive: true,
        }}
        plugins={[
          {
            beforeDraw(chart) {
              const { width } = chart;
              const { height } = chart;
              const { ctx } = chart;
              ctx.restore();
              const fontSize = (height / 360).toFixed(2);
              ctx.font = `${fontSize}em sans-serif`;
              ctx.textBaseline = 'middle';
              const text = 'Total 349';
              const textX = Math.round(
                (width - ctx.measureText(text).width) / 2
              );
              const textY = height / 2.1;
              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ]}
      />
    </div>
  );
}
