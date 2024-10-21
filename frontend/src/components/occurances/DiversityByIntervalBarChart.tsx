import { useEffect, useState } from 'react';
import { ChartData, OccurrenceJSON, Occurrence, Diversity } from '../../common/types';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useAppSelector } from '../../store/hooks';
import { LineController,LineElement,PointElement,BarElement,BarController } from 'chart.js';
import {Paper,Container,Box} from '@mui/material'
import { Interval } from '../../common/types';

//import { Chart, registerables } from 'chart.js';

export interface IOccurrenceBarChartProps {
    //intervals: Interval[];
    diversity: Diversity[];
}

export const DiversityByIntervalBarChart = (props: IOccurrenceBarChartProps) => {

  //const occurances = useAppSelector((state)=>state.occurances.occurances);
  const {diversity} = props;
  Chart.register(LineController, LineElement,BarElement,BarController, PointElement);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(()=>{
  const labels = diversity.map((d) => d.intervalName);
  const values = diversity.map((d) => d.numOccurances);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Diversity by Interval',
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

export default DiversityByIntervalBarChart;
