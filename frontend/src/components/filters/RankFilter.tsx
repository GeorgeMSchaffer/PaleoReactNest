import React,{useEffect} from 'react';
import { getEnumKeys } from '../../common/utils';
import { EnumRanks } from '../../common/types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
const [selectedRanks, setSelectedRanks] = React.useState<string[]>([]);

export default function RankFilter(){
    
    useEffect(() => {
        const defaultRanksToShow =  getEnumKeys(EnumRanks);
        console.log("🚀 ~ useEffect ~ defaultRanksToShow:", defaultRanksToShow)
        
     });
     const onRankFilterChange = (event:any) => {
        console.log("🚀 ~ onRankFilterChange ~ event:", event)
        const {
            target: { value },
        } = event;
        setSelectedRanks(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return(
        <FormControl size="medium" sx={{minWidth:'100%'}}>
                            <InputLabel id="demo-simple-select-label">Show Ranks:</InputLabel>
                            <Select
                                multiple
                                autoWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedRanks}
                                label="Age"
                                onChange={onRankFilterChange}
                            >
                            {getEnumKeys(EnumRanks).map((key, index) => (
                                    <MenuItem key={index} value={EnumRanks[key]}>
                                    {key.toLocaleLowerCase()}
                                    </MenuItem>
                                ))}
                            </Select>
                            </FormControl>
    )
}