import { FormGroup, FormLabel, Select, SelectChangeEvent } from '@mui/material';

import { ChangeEvent } from 'react';
export interface ISelectFilterProps {
    options: string[];
    label: string;
    selectedValue: string;
    onChange?: Function;
}
export function SelectFilter(props: ISelectFilterProps) {
    const { options = [], label = "", selectedValue = "" } = props;
    //[TODO] event handlers like on
    const onChange = (event: SelectChangeEvent<unknown>) => {
        //call an optional onChange callback from the parent component
        console.log(`onChange fired for select filter ${label}`);
        if (props.onChange) {
            console.log("Calling parent's callback onChange")
            props.onChange(event);
        }
    }
    return (
        <FormGroup>
            <FormLabel>
                <div>{label} - {selectedValue}</div>
            </FormLabel>
            <Select onChange={(evt) => onChange(evt)} multiple aria-label={`Filter By ${label}`} value={Array.isArray(selectedValue) ? selectedValue : [selectedValue]}>
                {options.map(option =>
                    <option selected={selectedValue?.length && option.includes(selectedValue) ? true : false} key={option}>
                        {option}
                    </option>
                )}
            </Select>
        </FormGroup>
    )
}
