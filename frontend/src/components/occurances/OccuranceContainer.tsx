import React from "react";
import { EnumMessageType, IError, Occurrence } from "../../common/types";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setError, setLoading, setOccurrences } from '../../store/store';
import { OccuranceList } from "./OccurrenceList";
import { getAllOccurances, fetchOccurrances } from "./occurrenceService";
import { fetchIntervals } from "../../common/utils";
import { IntervalFilter } from "../filters";
import RankFilter from "../filters/RankFilter";
import { setIntervals } from "../../store/store";
import { useParams } from "react-router-dom";
export interface OccurrenceContainerProps{

}
export function OccurrenceContainer(){
    const dispatch = useAppDispatch()
    const params = useParams();
    const intervalName:string = params.intervalName || "";
    let data:Occurrence[] = useAppSelector((state) => state.occurances.occurancesToDisplay) || [];
    const pagination = useAppSelector((state) => state.occurances.settings.pagination);
    const filters = useAppSelector((state) => state.occurances.filterFields);
    const intervals = useAppSelector((state) => state.intervals.intervals);
    const Occurrences = useAppSelector((state) => state.occurances.occurances);
    const [selectedInterval, setSelectedInterval] = React.useState<string>("");
    const [filtered, setFiltered] = React.useState<Occurrence[]>(data);
    React.useEffect(() => {
        dispatch(setLoading(true));
        try{
            (async () => {
                //Is an interval name being provided via the url, then filter occurrences to that interval only.
                if(params?.length){
                    setSelectedInterval(intervalName)
                    pagination.queryParams = {
                        earlyInterval: intervalName
                    }
   
                }
                const occurrences = await getAllOccurances(pagination);
                dispatch(setOccurrences(occurrences));
                // if the intervals have not been fetched, fetch them
                console.log('Fetching intervals - current intervals:',intervals);
                if(!intervals.length){
                  const _intervals = await fetchIntervals();
                  console.log("🚀 ~ _intervals:", _intervals)
                  dispatch(setIntervals(_intervals));
                }
                dispatch(setLoading(false));
            })()
        } 
        catch(ex:any)
        {
        console.log('Error fetching occurances', ex);
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

    
    const onIntervalFilterChange = (evt: React.SyntheticEvent, value: string[], reason: any) => {
        console.log('Interval Filter Change!', value, evt);
        // Implement your filter logic here and return true or false
        setSelectedInterval(value);
        const _filtered = Occurrences.filter(o => value.includes(o.earlyInterval));
        setFiltered(_filtered);

        console.log("🚀 ~ onIntervalFilterChange ~ filtered:", _filtered)
        // dispatch(setDiversity(filtered));
    }
    return (<div>
        <b># of occurances: {data.length}</b>
        <b>INTERVAL FILTER HERE</b>
        <IntervalFilter intervals={intervals} onFilterChange={onIntervalFilterChange}/>
        {filtered?.length ?
            <OccuranceList occurances={filtered} />
            : <div>Loading...</div>
        }
    </div>)
}
