import { Form, FormGroup, FormLabel } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPagination } from '@/store/store';
import { ChangeEvent } from 'react';
export interface IResultsPerPageProps {
    options: string[];
    label: string;
    selectedValue: string;
    onChange?: Function;
}
export function SortDirSelect(props: IResultsPerPageProps) {
    const {options=[],label="",selectedValue=""}  = props;

    const dispatch = useAppDispatch();
    const pagination = useAppSelector(state => state.root.settings.pagination);
    const {sortBy,sortOrder} = pagination;
    const {perPage} = pagination;
    //[TODO] event handlers like on
    const onChange = (event: ChangeEvent<HTMLSelectElement>)=>{
        //call an optional onChange callback from the parent component
        console.log(`onChange fired for select filter ${label}`);
        const _pageination = {...pagination,sortOrder:event.target.value};
        dispatch(setPagination(_pageination));
        
    }
    return (
        <FormGroup>
            <FormLabel>
                <div>{label} - {selectedValue}</div>
            </FormLabel>
            <Form.Select onChange={(evt)=>onChange(evt)} multiple aria-label={`Filter By ${label}`}>
                <option selected={sortOrder.toLowerCase() === "asc"} value={5}>ASC</option>
                <option selected={sortOrder.toLowerCase() === "desc"} value={10}>DESC</option>

            </Form.Select>
        </FormGroup>
    )
}
