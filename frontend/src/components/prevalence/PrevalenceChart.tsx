import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Prevalence } from '../../common/types.ts';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Taxon Occurrences',
    },
  },
};
export interface IPrevalenceChartProps {
  prevalenceData: Prevalence[];
}
export const PrevalenceChart = (props:IPrevalenceChartProps) => {
  const { prevalenceData } = props;
  const data = {
    labels: prevalenceData.map((prevalence) => prevalence.taxonName),
    datasets: [
      {
        label: 'Prevalence',
        data: prevalenceData.map((prevalence) => prevalence.numOccurances),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default PrevalenceChart;