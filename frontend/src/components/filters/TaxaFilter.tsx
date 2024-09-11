import React from 'react';
import { useDispatch } from "react-redux";
import { EnumClade } from "../../common/types";
import { getEnumKeys } from '../../common/utils';
import { useAppSelector } from '../../store/hooks';
import store, { setOccurrencesToDisplay } from '../../store/store';
import { SelectFilter } from './SelectFilter';
const {getState} = store;

//const intervals = useAppSelector((state) => state.intervals.intervals); //filterCladesByCladeName('',e.target.value);
//console.log("🚀 ~ intervals:", intervals)

export interface ITaxaFilterProps {

}

export function TaxaFilter(props: ITaxaFilterProps) {
    const options = getEnumKeys(EnumClade) || [];
    const dispatch = useDispatch();
    const occurances = useAppSelector((state) => {
          console.log("🚀 ~ occurances ~ state:", state)
         return state.occurances.occurancesToDisplay
     	}) 
    
    //const {} = intervalSlice;
    const [selectedValue, setSelectedValue] = React.useState("");
    const onFilterChange = (e: any) => {
    
 
        const selectedValue = options[e.currentTarget.selectedIndex]
        setSelectedValue(selectedValue);

        const filtered = occurances?.length && occurances.filter((occ) => {
            return occ.cladeClass.toUpperCase().includes(selectedValue.toUpperCase());// interval.recordType.toUpperCase().includes(selectedValue.toUpperCase());
        }) || [];
        dispatch(setOccurrencesToDisplay(filtered));
    }
    
    return(
        <SelectFilter onChange={onFilterChange} label="Taxa" options={options} key={"Taxa"} selectedValue={selectedValue} />
     )
}
