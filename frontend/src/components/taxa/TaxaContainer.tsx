import 'bootstrap/dist/css/bootstrap.min.css';


import React from "react";
import { EnumMessageType, IError, Taxa } from "../../common/types";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setTaxa } from "../../store/reducers/taxaReducer";
import { setError, setLoading } from '../../store/store';
import { TaxaList } from "./TaxaList";
import { searchTaxa } from "./TaxaService";
export interface TaxaContainerProps{

}
export function TaxaContainer(){
    const dispatch = useAppDispatch()

    let taxa:Taxa[] = useAppSelector((state) => state.taxa.taxaToDisplay) || [];
    const pagination = useAppSelector((state) => state.taxa.settings.pagination);
    const filters = useAppSelector((state) => state.taxa.filterFields);
    React.useEffect(() => {
        dispatch(setLoading(true));
        try{
            (async () => {
                dispatch(setLoading(true));
                
                const data = await searchTaxa(filters,pagination);
   
                dispatch(setTaxa(data));
                dispatch(setLoading(false));
            })()
        } 
        catch(ex:any)
        {
        console.log('Error fetching taxa', ex);
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
        <b># of taxa: {taxa.length}</b>
            <TaxaList taxa={taxa} />
    </div>)
}
