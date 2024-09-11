import React from 'react';
import { useDispatch } from "react-redux";
import { EnumIntervalType, IFilterField } from "../../common/types";
import { getEnumKeys } from '../../common/utils';
import { useAppSelector } from '../../store/hooks';
import { addIntervalFilter, clearIntervalFilters } from "../../store/reducers/intervalReducer";
import store from '../../store/store';
import { SelectFilter } from './SelectFilter';
const {getState} = store;

//const intervals = useAppSelector((state) => state.intervals.intervals); //filterIntervalsByIntervalName('',e.target.value);
//console.log("🚀 ~ intervals:", intervals)

export interface IIntervalFilterProps {

}

export function IntervalRecordType(props: IIntervalFilterProps) {
    const options = getEnumKeys(EnumIntervalType)
    const dispatch = useDispatch();
    const intervals = useAppSelector((state) =>{
         return state.intervals.intervals;
     });
    //const {} = intervalSlice;
    const [selectedValue, setSelectedValue] = React.useState("");
    const onFilterChange = (e: any) => {
    console.log("🚀 ~ onFilterChange ~ e:", e)
    
 
        const selectedValue = options[e.currentTarget.selectedIndex]
        if(!selectedValue){
            dispatch(clearIntervalFilters())
        }
        setSelectedValue(selectedValue);
        if(selectedValue){

            const filter: IFilterField = {
                field: "record_type",
                value: selectedValue,
                operator: "="
                }
            dispatch(addIntervalFilter(filter));
        }
    }
    
    return(
        <SelectFilter onChange={onFilterChange} label="Intervals" options={options} key={"early_interval"} selectedValue={selectedValue} />
     )
}
