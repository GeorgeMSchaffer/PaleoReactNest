import { Alert, Snackbar } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { MainLeftColumnFilters } from './components/filters/MainLeftColumnFilters';
import { IntervalsContainer } from './components/intervals/IntervalsContainer';
import { OccurrenceContainer } from './components/occurances/OccuranceContainer';
import { TaxaContainer } from './components/taxa/TaxaContainer';
import { ChartsDemoPage } from './pages/ChartsDemoPage';
import TwoColumnPage from './pages/layout/TwoColumnPage';
import { useAppSelector } from './store/hooks';
function App() {
    const errors = useAppSelector((state) => state.root.errors);
    const occuranceFilters = useAppSelector((state) => state.occurances.filterFields);
    const IntervalFilters = useAppSelector((state) => state.intervals.filterFields);
    //[TODO] move error state to redux for sharing
//    const [error,setError] = useState<string>('');//[TODO] add ability to display an array of errors with an error type


  return (
    <>
    <Snackbar>
        <h2>Snack</h2>
        <Alert severity="error">{JSON.stringify(errors)}</Alert>
    </Snackbar>
        <Router>
            <Routes>
                <Route path='/' element={
                    <TwoColumnPage 
                        leftColumn={<MainLeftColumnFilters/>} 
                        rightColumn={<IntervalsContainer/>}/>} 
                    />
                {/* <Route path='/intervals' 
                    element={<TwoColumnPage 
                        leftColumn={<MainLeftColumnFilters/>} 
                        rightColumn={<IntervalsContainer/>}/>} 
                /> */}
                <Route path='/occurances' 
                    element={
                    <TwoColumnPage leftColumn={<MainLeftColumnFilters/>} 
                    rightColumn={<OccurrenceContainer/>}/>} 
                />
                <Route path='/charts' element={
                    <TwoColumnPage leftColumn={<MainLeftColumnFilters/>} 
                    rightColumn={<ChartsDemoPage/>}/>}
                />
                <Route path='/taxa' 
                    element={<TwoColumnPage 
                        leftColumn={<MainLeftColumnFilters/>} 
                        rightColumn={<TaxaContainer/>}/>} 
                />

            </Routes>
        </Router>
        </>
  )
}

export default connect()(App)

export function Welcome() {
    return <h1>Welcome</h1>
}