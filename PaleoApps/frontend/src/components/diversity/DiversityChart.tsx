import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, Diversity } from '../../common/types';
const diversityData = [
    {
        "interval_no": "922",
        "interval_name": "Late Pleistocene",
        "max_ma": 0.129,
        "min_ma": 0.0117,
        "X_Ft": 0,
        "X_bL": 148,
        "X_FL": 132,
        "X_bt": 0,
        "sampled_in_bin": 280,
        "implied_in_bin": 5,
        "n_occs": 2427
    },
    {
        "interval_no": "1203",
        "interval_name": "Chibanian",
        "max_ma": 0.774,
        "min_ma": 0.129,
        "X_Ft": 9,
        "X_bL": 5,
        "X_FL": 2,
        "X_bt": 139,
        "sampled_in_bin": 57,
        "implied_in_bin": 0,
        "n_occs": 108
    },
    {
        "interval_no": "740",
        "interval_name": "Calabrian",
        "max_ma": 1.8,
        "min_ma": 0.774,
        "X_Ft": 31,
        "X_bL": 1,
        "X_FL": 4,
        "X_bt": 113,
        "sampled_in_bin": 98,
        "implied_in_bin": 1,
        "n_occs": 213
    },
    {
        "interval_no": "741",
        "interval_name": "Gelasian",
        "max_ma": 2.58,
        "min_ma": 1.8,
        "X_Ft": 39,
        "X_bL": 1,
        "X_FL": 1,
        "X_bt": 75,
        "sampled_in_bin": 58,
        "implied_in_bin": 0,
        "n_occs": 67
    },
    {
        "interval_no": "96",
        "interval_name": "Piacenzian",
        "max_ma": 3.6,
        "min_ma": 2.58,
        "X_Ft": 5,
        "X_bL": 1,
        "X_FL": 2,
        "X_bt": 71,
        "sampled_in_bin": 30,
        "implied_in_bin": 5,
        "n_occs": 72
    },
    {
        "interval_no": "97",
        "interval_name": "Zanclean",
        "max_ma": 5.333,
        "min_ma": 3.6,
        "X_Ft": 25,
        "X_bL": 3,
        "X_FL": 6,
        "X_bt": 47,
        "sampled_in_bin": 61,
        "implied_in_bin": 5,
        "n_occs": 138
    },
    {
        "interval_no": "98",
        "interval_name": "Messinian",
        "max_ma": 7.246,
        "min_ma": 5.333,
        "X_Ft": 3,
        "X_bL": 2,
        "X_FL": 0,
        "X_bt": 47,
        "sampled_in_bin": 10,
        "implied_in_bin": 0,
        "n_occs": 18
    },
    {
        "interval_no": "99",
        "interval_name": "Tortonian",
        "max_ma": 11.63,
        "min_ma": 7.246,
        "X_Ft": 14,
        "X_bL": 6,
        "X_FL": 13,
        "X_bt": 35,
        "sampled_in_bin": 52,
        "implied_in_bin": 6,
        "n_occs": 136
    },
    {
        "interval_no": "100",
        "interval_name": "Serravallian",
        "max_ma": 13.82,
        "min_ma": 11.63,
        "X_Ft": 5,
        "X_bL": 2,
        "X_FL": 3,
        "X_bt": 36,
        "sampled_in_bin": 21,
        "implied_in_bin": 2,
        "n_occs": 48
    },
    {
        "interval_no": "101",
        "interval_name": "Langhian",
        "max_ma": 15.98,
        "min_ma": 13.82,
        "X_Ft": 12,
        "X_bL": 4,
        "X_FL": 6,
        "X_bt": 26,
        "sampled_in_bin": 30,
        "implied_in_bin": 7,
        "n_occs": 106
    },
    {
        "interval_no": "102",
        "interval_name": "Burdigalian",
        "max_ma": 20.44,
        "min_ma": 15.98,
        "X_Ft": 19,
        "X_bL": 0,
        "X_FL": 11,
        "X_bt": 11,
        "sampled_in_bin": 35,
        "implied_in_bin": 7,
        "n_occs": 66
    },
    {
        "interval_no": "103",
        "interval_name": "Aquitanian",
        "max_ma": 23.03,
        "min_ma": 20.44,
        "X_Ft": 2,
        "X_bL": 0,
        "X_FL": 4,
        "X_bt": 9,
        "sampled_in_bin": 7,
        "implied_in_bin": 1,
        "n_occs": 10
    },
    {
        "interval_no": "104",
        "interval_name": "Chattian",
        "max_ma": 27.82,
        "min_ma": 23.03,
        "X_Ft": 0,
        "X_bL": 2,
        "X_FL": 3,
        "X_bt": 9,
        "sampled_in_bin": 6,
        "implied_in_bin": 0,
        "n_occs": 6
    }]
// Define the shape of the data in diversity.json


const extractChartData = (data: Diversity[]): ChartData => {

    const items:Diversity[] = [];

  const labels: string[] = [];
  const chartData: number[] = [];

  items.forEach((item) => {
    labels.push(item.intervalName);
    chartData.push(item.numOccurances);
  });
  const rtn = {
    labels,
    datasets: [
      {
        label: 'Diversity Distribution',
        data: chartData,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  }
  console.log("🚀 ~ extractChartData ~ rtn:", rtn)
  return rtn;
};

export interface DiversityChartProps {
    diversity:Diversity[]
}

export const DiversityChart = (props:DiversityChartProps) => {
    const {diversity} = props;
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const data = extractChartData(diversity);
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

export default DiversityChart;
