import React from "react";
import { EnumMessageType, IError, Occurrence } from "../../common/types";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setError, setLoading, setOccurrences } from '../../store/store';
import { EarlyIntervalOccurranceFilter } from '../filters/EarlyIntervalOccurranceFilter';
import { OccuranceList } from "./OccurrenceList";
import { getAllOccurances, searchOccurrances } from "./occurrenceService";
export interface OccurrenceContainerProps{

}
export function OccurrenceContainer(){
    const dispatch = useAppDispatch()

    let data:Occurrence[] = useAppSelector((state) => state.occurances.occurancesToDisplay) || [];
    const pagination = useAppSelector((state) => state.occurances.settings.pagination);
    const filters = useAppSelector((state) => state.occurances.filterFields);
    React.useEffect(() => {
        dispatch(setLoading(true));
        try{
            (async () => {
                
                const data = await getAllOccurances(pagination);
                dispatch(setOccurrences(data));
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
    return (<div>
        <b># of occurances: {data.length}</b>
        <EarlyIntervalOccurranceFilter/>
        {data?.length ?
            <OccuranceList occurances={data} />
            : <div>Loading...</div>
        }
    </div>)
}
