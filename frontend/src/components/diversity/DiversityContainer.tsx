//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import { Skeleton } from "@mui/material";
import { TDiversity } from "../../common/types";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setError, setLoading } from '../../store/rootReducer';
import { DiversityList } from "./DiversityList";
import { fetchDiversity } from './diversityService';
import { setDiversity,findDiversityById } from "../../store/reducers/diversityReducer";
import { IError,EnumMessageType } from "../../common/types";
import DiversityByIntervalChart from "./DiversityByIntervalChart";
export function DiversityContainer(){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state) => state.intervals.loading);
    const diversity = useAppSelector((state) => state.diversity.diversity);

    React.useEffect(() => {
        dispatch(setLoading(true));
            try{
                (async () => {
                    const diversity = await fetchDiversity()
                    console.log("🚀 ~ React.useEffect ~ diversity:", diversity)
                    dispatch(setDiversity(diversity));
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
            finally
            {
                dispatch(setLoading(false));
            }
}
    ,[dispatch])

    return (
        <>
           <h2>Diversity</h2>

           {!loading && diversity && <DiversityByIntervalChart diversity={diversity}/>}
           {loading && <Skeleton animation="wave" width={600} height={300} color="#ccc" /> }
           {!loading && diversity && <DiversityList diversity={diversity}/>}
           {loading && <Skeleton width={'100%'} height={400} color="blue" /> }

       </>
        
    )
}
