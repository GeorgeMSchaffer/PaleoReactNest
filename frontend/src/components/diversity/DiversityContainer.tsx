//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import { Diversity } from "../../common/types";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setError, setLoading } from '../../store/rootReducer';
import { DiversityList } from "./DiversityList";
import { getAll } from './diversityService';
export function PrevalenceContainer(){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store
    const [diversity, setDiversity] = React.useState<Diversity[]>([]);
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state) => state.intervals.loading);


    React.useEffect(() => {
        dispatch(setLoading(true));
        try{
            (async () => {
                dispatch(setLoading(true));
                const data = await getAll();
                setTimeout(() => {
                    dispatch(setLoading(false));
                }, 3000);
                console.log("🚀 ~ Dispatching setIntervals with ~ data:", data)
                dispatch(setInterval(data));
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

    return (
        <>
           <h2>Diversity</h2>
           <DiversityList diversity={diversity}/>
       </>
        
    )
}
