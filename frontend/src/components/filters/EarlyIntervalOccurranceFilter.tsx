import React from 'react';
import { useDispatch } from "react-redux";
import { EnumIntervalType, IFilterField } from "../../common/types";
import { getEnumKeys } from '../../common/utils';
import { addOccurranceFilter, clearOccurranceFilters } from "../../store/reducers/occurrenceReducer";
import store from '../../store/store';
import { SelectFilter } from './SelectFilter';
const {getState} = store;

//const intervals = useAppSelector((state) => state.intervals.intervals); //filterIntervalsByIntervalName('',e.target.value);
//console.log("🚀 ~ intervals:", intervals)

export interface IEarlyIntervalOccurranceFilterProps {

}

export function EarlyIntervalOccurranceFilter(props: IEarlyIntervalOccurranceFilterProps) {
    const options = getEnumKeys(EnumIntervalType)
    const dispatch = useDispatch();
   
    //const {} = intervalSlice;
    const [selectedValue, setSelectedValue] = React.useState("");
    const onFilterChange = (e: any) => {
    console.log("🚀 ~ onFilterChange ~ e:", e)
    
 
        const selectedValue = options[e.currentTarget.selectedIndex]
        if(!selectedValue){
            dispatch(clearOccurranceFilters())
        }
        setSelectedValue(selectedValue);
        if(selectedValue){

            const filter: IFilterField = {
                field: "early_interval",
                value: selectedValue,
                operator: "="
                }
            dispatch(addOccurranceFilter(filter));
        }
    }
    
    return(
        <SelectFilter onChange={onFilterChange} label="Early Interval" options={options} key={"early_interval"} selectedValue={selectedValue} />
     )
}
