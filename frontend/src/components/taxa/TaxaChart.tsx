import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, Taxa } from '../../common/types';


const extractChartData = (data: Taxa[]): ChartData => {

    const items:Taxa[] = [];

  const labels: string[] = [];
  const chartData: number[] = [];

  items.forEach((item) => {
    labels.push(item.taxonName);
    chartData.push(item.numOccurances);
  });
  const rtn = {
    labels,
    datasets: [
      {
        label: 'Taxa Distribution',
        data: chartData,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  }
  console.log("🚀 ~ extractChartData ~ rtn:", rtn)
  return rtn;
};

export interface TaxaChartProps {
    taxa:Taxa[]
}

export const TaxaChart = (props:TaxaChartProps) => {
    const {taxa} = props;
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const data = extractChartData(taxa);
    setChartData(data);
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default TaxaChart;
