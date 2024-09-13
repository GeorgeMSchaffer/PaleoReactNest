import { useEffect, useState } from 'react';
import { ChartData, Diversity } from '../../common/types';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useAppSelector } from '../../store/hooks';
import { LineController,LineElement,PointElement,BarElement,BarController } from 'chart.js';
import {Paper,Container,Box} from '@mui/material'
import { useDispatch } from 'react-redux';
//import { Chart, registerables } from 'chart.js';

export interface IDiversityBarChartProps {
  diversity: Diversity[];
}

export const DiversityBarChart = (
  props: IDiversityBarChartProps
) => {
  Chart.register(LineController, LineElement,BarElement,BarController, PointElement);
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });
 // const diversity = useAppSelector(state => state.diversity.diversity);
 const diversity = props.diversity;
  useEffect(()=>{
   const labels = diversity.map(item => item.intervalName);
  const values = diversity.map(item => item.numOccurances);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Diversity Chart',
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
  //   const data = extractChartData(diversity);
  //   console.log('Data', data);
  //   setChartData(data);
  // }, [diversity]);

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

export default DiversityBarChart;
