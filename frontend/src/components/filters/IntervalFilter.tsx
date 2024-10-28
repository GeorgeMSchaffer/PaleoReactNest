import React from 'react';
import { useDispatch } from "react-redux";
import { EnumIntervalType, IQueryFilterField } from "../../common/types";
import { getEnumKeys } from '../../common/utils';
import { useAppSelector } from '../../store/hooks';
import { addIntervalFilter, clearIntervalFilters } from "../../store/reducers/intervalReducer";
import store from '../../store/store';
import { TInterval, TDiversity } from '../../common/types';
import { SelectFilter } from './SelectFilter';
import { Autocomplete, FormControl, InputLabel, MenuItem, TextField } from '@mui/material';
const {getState} = store;

//const intervals = useAppSelector((state) => state.intervals.intervals); //filterIntervalsByIntervalName('',e.target.value);
//console.log("🚀 ~ intervals:", intervals)
export interface IIntervalFilterProps {
    intervals:TInterval[];
    onFilterChange: (e: any) => void;
}

export function IntervalFilter(props: IIntervalFilterProps) {
    const options = getEnumKeys(EnumIntervalType)
    const dispatch = useDispatch();
    const intervals = useAppSelector((state) =>{
         return state.intervals.intervals;
     });
     const loading = useAppSelector((state) =>{
        return state.intervals.loading;
    });
    //const {} = intervalSlice;
    const [selectedValue, setSelectedValue] = React.useState([""]);
    
    const onFilterChange = (e: React.SyntheticEvent,value:string[],reason:any) => {
        console.log("🚀 ~ onFilterChange ~ e:", e)
        debugger;
        const selectedValue = value;
        if(!selectedValue){
            dispatch(clearIntervalFilters())
        }
        setSelectedValue(selectedValue);
        if(selectedValue){

            const filter: IQueryFilterField = {
                field: "intervalName",
                value: selectedValue,
                operator: "="
                }
            dispatch(addIntervalFilter(filter));
        }
    }
    
    return(
        <FormControl size="medium" sx={{minWidth:'100%'}}>
        <InputLabel id="interval-name-filter-label">Interval Name</InputLabel>
       <Autocomplete 
        multiple
        disabled={loading} 
        options={intervals.map((d) => d.intervalName)} 
        value={selectedValue}
        onChange={(evt, value, reason) => onFilterChange(evt,value,reason)} 
        renderInput={(params) => 
            <TextField {...params} label="Interval Name" variant="outlined" />} 
            />
     </FormControl>
     )
}
