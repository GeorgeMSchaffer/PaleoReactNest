//[TODO] Responsible for handling data specific to Occurances
import React from 'react';
import { EnumMessageType, IError } from '../../common/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setError, setLoading } from '../../store/rootReducer';
import store, { setIntervals } from '../../store/store';
import { TablePagination } from '../shared/TablePagination';
import IntervalList from "./IntervalList";
import { searchIntervals } from './intervalService';
export function IntervalsContainer(){

    //[TODO] Move to Redux to store
    const {getState} = store;
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state) => state.intervals.loading);
    const pagination = useAppSelector((state) => state.intervals.settings.pagination);
    const filterFields = useAppSelector((state) => state.intervals.filterFields);
    console.log('Store state from intervals',getState())

    //The idea here is to refetch the intervals when the filter fields change since the data needs to be refetched with the filters applied
    React.useEffect(() => {
        console.log('Intervals Container Filter Effect, results should now be retrived', loading);
        (async () => {
            try{
                dispatch(setLoading(true));
                const data = await searchIntervals(filterFields,pagination);
                console.log("🚀 ~ Dispatching setIntervals with ~ data:", data)
                dispatch(setIntervals(data));
            }
            catch(ex:any){
            console.log('Error fetching intervals', ex);
            const error: IError = {
                message: ex.message,
                type: EnumMessageType.ERROR,
                code: 500,
            }
            setError(error);
            }
            finally{
                dispatch(setLoading(false));
            }
            //Fetch Intervals
        })()
    },[filterFields])
    //Fetch Intervals
    React.useEffect(() => {
        dispatch(setLoading(true));
        try{

            (async () => {
                dispatch(setLoading(true));
                const data = await searchIntervals(filterFields,pagination);
                console.log("🚀 ~ Dispatching setIntervals with ~ data:", data)
                dispatch(setIntervals(data));
                dispatch(setLoading(false));
            })()
        } 
        catch(ex:any)
        {
        console.log('Error fetching intervals', ex);
        const error: IError = {
            message: ex.message,
            type: EnumMessageType.ERROR,
            code: 500,
        }
        setError(error);
        }
        finally{
            dispatch(setLoading(false));
         }
}
    ,[dispatch])
    React.useEffect(() => {
        console.log('Loading effect fired',getState())
    },[loading])
    const intervals = useAppSelector((state)=>{
        console.log('Store state from intervals', state.intervals)
        return state.intervals.intervalsToDisplay
    });
    return (
        <>
           <TablePagination data={intervals}/>
           <IntervalList intervals={intervals}/>
       </>
        
    )
}
