import { useEffect, useState } from 'react';
import { ChartData, OccurrenceJSON, Occurrence } from '../../common/types';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useAppSelector } from '../../store/hooks';
import { LineController,LineElement,PointElement,BarElement,BarController } from 'chart.js';
import {Paper,Container,Box} from '@mui/material'
//import { Chart, registerables } from 'chart.js';

export interface IOccuranceChartProps {
    occurrences: Occurrence[];
}

export const OccuranceChart = (props: IOccuranceChartProps) => {

  //const occurances = useAppSelector((state)=>state.occurances.occurances);
  const occurances = props.occurrences;
  Chart.register(LineController, LineElement,BarElement,BarController, PointElement);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(()=>{
  const labels = occurances.map((item:Occurrence) => item.acceptedName);
  const values = occurances.map((item:Occurrence) => item.minMya);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Occurance Chart',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  };
  setChartData(data)
})

  // useEffect(() => {
  //   const data = extractChartData(occurance);
  //   console.log('Data', data);
  //   setChartData(data);
  // }, [occurance]);

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

export default OccuranceChart;
