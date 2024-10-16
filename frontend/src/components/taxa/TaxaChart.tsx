import { useEffect, useState } from 'react';
import { ChartData, Taxa } from '../../common/types';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useAppSelector } from '../../store/hooks';
import { LineController,LineElement,PointElement,BarElement,BarController } from 'chart.js';
import {Paper,Container,Box} from '@mui/material'
import { useDispatch } from 'react-redux';
//import { Chart, registerables } from 'chart.js';

const extractChartData = (data: Taxa[]): ChartData => {
  const labels: string[] = [];
  const chartData: number[] = [];
 // Chart.register(Chart);

  data.forEach((item) => {
    console.log('Item!!', item);
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
  };

  console.log("🚀 ~ extractChartData ~ rtn:", rtn);
  return rtn;
};

export interface TaxaChartProps {
  taxa: Taxa[];
}

export const TaxaChart = (props: TaxaChartProps) => {
  Chart.register(LineController, LineElement,BarElement,BarController, PointElement);
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });
  const taxa = useAppSelector(state => state.taxa.taxa);
 
  useEffect(()=>{
   const labels = taxa.map(item => item.taxonName);
  const values = taxa.map(item => item.numOccurances);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Taxa Chart',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  };
  setChartData(data)
},[dispatch])

  // useEffect(() => {
  //   const data = extractChartData(taxa);
  //   console.log('Data', data);
  //   setChartData(data);
  // }, [taxa]);

  return (
    <Paper>
      <Container>
        <Box padding={0}>
        <Bar
          data={chartData}
          options={{
            
          }}
        />
        </Box>
      </Container>
    </Paper>
  );
};

export default TaxaChart;
