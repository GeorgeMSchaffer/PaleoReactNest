import { useEffect, useState } from 'react';
import { ChartData, TDiversity } from '../../common/types';
import Chart from 'chart.js/auto';
import { Bar,Line } from 'react-chartjs-2';
import { useAppSelector } from '../../store/hooks';
import { setError } from '../../store/rootReducer';
import { LineController,LineElement,PointElement,BarElement,BarController, Interaction } from 'chart.js';
import {Paper,Container,Box} from '@mui/material'
import { useDispatch } from 'react-redux';
//import { Chart, registerables } from 'chart.js';

export interface IDiversityBarChartProps {
  diversity: TDiversity[];
}


// export type TDiversity = {
//   intervalName: string;
//   countOfOccurrences: number | null;
//   countOfFamilies: number | null;
//   countOfClasses: string | null;
//   countOfPhyla: number;
//   countOfOrders: number;
//   countOfGenera: number;

// }

export const DiversityByIntervalChart = (
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
//const diversity = useAppSelector(state => state.diversity.diversity);
  useEffect(()=>{
    try{
     
      
    const labels = diversity.map(item => item.intervalName);
    console.log("🚀 ~ useEffect ~ labels:", labels)
    const values = diversity.map(item => item.countOfOccurrences);
    console.log("🚀 ~ useEffect ~ values:", values)
    const data = {
      labels: labels,
      Interaction: {
        mode: 'index' as const,
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis',
        },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          type: 'linear' as const,
          display: true,
          position: 'left' as const,
        }
      },
      },
      datasets: [
        {
          label: 'Total Occurrences',
          type:'line',
          data: values,
          labels: labels,
          backgroundColor: 'red',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          type:'bar',
          label: 'Families',
          data: diversity.map(item => item.countOfFamilies),
          labels: labels,
          backgroundColor: 'blue',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          type:'bar',          
          label: 'Classes',
          data: diversity.map(item => item.countOfClasses),
          labels: labels,
          backgroundColor: 'green',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Phyla',
          data: diversity.map(item => item.countOfPhyla),
          labels: labels,
          type:'bar',
          backgroundColor: 'black',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Orders',
          data: diversity.map(item => item.countOfOrders),
          labels: labels,
          backgroundColor: 'orange',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Genera',
          data: diversity.map(item => item.countOfGenera),
          labels: labels,
          backgroundColor: 'brown',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },


      ]
    };
    console.log("🚀 ~ useEffect ~ data:", data)
    setChartData(data)
  } catch (err:any) {
    console.error('Error fetching diversity', err);
    setError(err.message);

  }
},[dispatch,diversity])



  return (
    <Paper>
      <Container>
        <Box padding={0}>
          <h2>Showing Diversity for {diversity.length} Intervals </h2>
        <Line
          data={chartData}
          options={{
            
          }}
        />

        </Box>
      </Container>
    </Paper>
  );
};

export default DiversityByIntervalChart;
