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
export function SortBySelect(props: IResultsPerPageProps) {
    const {options=[],label="",selectedValue=""}  = props;
    const dispatch = useAppDispatch();
    const pagination = useAppSelector(state => state.root.settings.pagination);
    const {perPage} = pagination;
    //[TODO] event handlers like on
    const onChange = (event: ChangeEvent<HTMLSelectElement>)=>{
        //call an optional onChange callback from the parent component
        console.log(`onChange fired for select filter ${label}`);
        const _pageination = {...pagination,perPage:Number(event.target.value)};
        dispatch(setPagination(_pageination));
        if(props.onChange){
            console.log("Calling parent's callback onChange")
            props.onChange(event);
        }
    }
    return (
        <FormGroup>
            <FormLabel>
                <div>{label} - {selectedValue}</div>
            </FormLabel>
            <Form.Select onChange={(evt)=>onChange(evt)} multiple aria-label={`Filter By ${label}`}>
                <option selected={perPage === 5} value={5}>5</option>
                <option selected={perPage===10} value={10}>10</option>
                <option selected={perPage===25} value={25}>25</option>
                <option selected={perPage===50} value={50}>50</option>

            </Form.Select>
        </FormGroup>
    )
}
