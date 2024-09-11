import { Form,FormSelect,FormTextProps,FormSelectProps, FormLabel }  from 'react-bootstrap';
import { EnumPhylums } from "../../common/types";
import { getEnumKeys } from '../../common/utils';
import { SelectFilter } from './SelectFilter';
export interface IPhylumFilterProps {

}
export function PhylumFilter(props: IPhylumFilterProps) {
    const options = getEnumKeys(EnumPhylums)
    
    return(
    <>
        <SelectFilter options={options} label='Phylum' selectedValue='' />
    </>
    )
}
