import React from 'react';
import { useDispatch } from "react-redux";
import { EnumClades, Occurrence } from "../../common/types";
import { getEnumKeys } from '../../common/utils';
import { useAppSelector } from '../../store/hooks';
import store, { setOccurrencesToDisplay } from '../../store/store';
import { SelectFilter } from './SelectFilter';
const {getState} = store;

//const classs = useAppSelector((state) => state.classs.classs); //filterClasssByClassName('',e.target.value);
//console.log("🚀 ~ classs:", classs)

export interface IClassFilterProps {

}

export function CladeOrderFilter(props: IClassFilterProps) {
    const options = getEnumKeys(EnumClades)
    const dispatch = useDispatch();
    const occurances = useAppSelector((state) => {
        return state.occurances.occurances
    });
    console.log('# of Occurances from CladeOrderFilter',occurances.length)
    //const {} = classSlice;
    const [selectedValue, setSelectedValue] = React.useState("");
    const onFilterChange = (e: any) => {
    
        const selectedValue = options[e.currentTarget.selectedIndex]
        console.log("🚀 ~ onFilterChange ~ selectedValue:", selectedValue)
        setSelectedValue(selectedValue);

        const filtered = occurances?.length && occurances.filter((occ : Occurrence) => {
            if(!occ || !occ.acceptedRank){
                return false;
            }
            const isMatch= occ.acceptedRank.toUpperCase().includes(selectedValue.toUpperCase());
            console.log(`isMatch ${selectedValue} vs ${occ.acceptedRank}`,isMatch)
            return isMatch;
        }) || [];
        console.log('Filtered Occurances by CladeOrder',filtered)
        dispatch(setOccurrencesToDisplay(filtered));        
    }
    
    return(
        <SelectFilter onChange={onFilterChange} label="Order" options={options} key={"order"} selectedValue={selectedValue} />
     )
}
