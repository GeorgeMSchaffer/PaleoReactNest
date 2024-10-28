//[TODO] Responsible for handling data specific to Occurances
import React, { useEffect } from "react";
import { Skeleton,Autocomplete,TextField,Paper, InputLabel,FormControl,FormControlLabel,FormGroup,Select,MenuItem } from "@mui/material";
import { TDiversity,EnumRanks } from "../../common/types";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setError, setLoading } from '../../store/rootReducer';
import { setIntervals } from "../../store/reducers/intervalReducer";
import { DiversityList } from "./DiversityList";
import { fetchDiversity } from './diversityService';
import { setDiversity,findDiversityById } from "../../store/reducers/diversityReducer";
import { IError,EnumMessageType } from "../../common/types";
import DiversityByIntervalChart from "./DiversityByIntervalChart";
import { fetchIntervals } from "../intervals/intervalService";
import { getEnumKeys } from "../../common/utils";
import Grid from "@mui/material/Grid2";
import { styled } from '@mui/material/styles';
import { minWidth } from "@mui/system";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  
export function DiversityContainer(){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state) => state.intervals.loading);
    const diversity = useAppSelector((state) => state.diversity.diversity);
    const intervals = useAppSelector((state) => state.intervals.intervals);
    const pagination = useAppSelector((state) => state.intervals.settings.pagination);
    const filterFields = useAppSelector((state) => state.intervals.filterFields);
    const [filtered,setFiltered] = React.useState<TDiversity[]>([]);
    const [selectedIntervals, setSelectedIntervals] = React.useState("");

    const onIntervalFilterChange = (evt: React.SyntheticEvent, value: string[], reason: any) => {
        console.log('Interval Filter Change!', value, evt);
        // Implement your filter logic here and return true or false
        setSelectedIntervals(value.join(", "));
        setFiltered(diversity);

//        if (value.length) {
            console.log('Filtering on interval name', value, evt);
            const filtered = diversity.filter(d => value.includes(d.intervalName)); // intervals.filter((interval) => interval.intervalName === value);
            setFiltered(filtered);
//        }
        console.log("🚀 ~ onIntervalFilterChange ~ filtered:", filtered)
        // dispatch(setDiversity(filtered));
    }


    React.useEffect(() => {
        dispatch(setLoading(true));
            try{
                (async () => {
                    const diversity = await fetchDiversity()
                    console.log("🚀 ~ React.useEffect ~ diversity:", diversity)
                    dispatch(setDiversity(diversity));
                        console.log('Fetching intervals - current intervals:',intervals);
                        //If intervals have not been fetched get them for the filter
                        if(!intervals?.length){
                            const intervals = await fetchIntervals(filterFields, pagination);
                            dispatch(setIntervals(intervals));
                        }
                        //dispatch(fetchIntervals());
                })()
            }
            catch(ex:any)
            {
                console.log('Error fetching intervals', ex);
                const error: IError = {
                    message: ex.message,
                    type: EnumMessageType.ERROR,
                    code: 500,
                }
                setError(error);
            }
            finally
            {
                dispatch(setLoading(false));
            }
}
    ,[dispatch])

    return (
        <>
           <h2>Diversity</h2>
           <Paper>
           <FormGroup >
               <Grid container spacing={2}>

                 <Grid size={6}>
                      
                 </Grid>
                    <Grid size={6}>
                        <Item>
                            <FormControl size="medium" sx={{minWidth:'100%'}}>
                                <InputLabel id="interval-name-filter-label">Interval Name</InputLabel>
                               <Autocomplete 
                                multiple
                                disabled={loading} 
                                options={diversity.map((d) => d.intervalName)} 
                                value={selectedIntervals.split(", ")}
                                onChange={(evt, value, reason) => onIntervalFilterChange(evt, value, reason)} 
                                renderInput={(params) => 
                                    <TextField {...params} label="Interval Name" variant="outlined" />} 
                                    />
                             </FormControl>
                        </Item>
                    </Grid>
               </Grid>
           </FormGroup>
           </Paper>
           {!loading && diversity && <DiversityByIntervalChart diversity={filtered}/>}
           {loading && <Skeleton animation="wave" width={600} height={300} color="#ccc" /> }
           {!loading && diversity && <DiversityList diversity={filtered}/>}
           {loading && <Skeleton width={'100%'} height={400} color="blue" /> }

       </>
        
    )
}
