import React,{ useEffect } from "react";
import { Diversity, Occurrence, Prevalence, Taxa } from "../common/types";
import PrevalenceChart from "../components/diversity/DiversityBarChart";
import { useAppSelector } from '../store/hooks';
import { useDispatch } from "react-redux";
import {searchIntervals,getAllIntervals} from '../components/intervals/intervalService'
import {searchOccurrances,getAllOccurances} from '../components/occurances/occurrenceService'
import { setLoading,setPagination,setError } from "../store/rootReducer";
import { setOccurrences,setIntervals,setTaxa } from "../store/store";
import { getAllTaxa } from "../components/taxa/TaxaService";
import TaxaChart from '../components/taxa/TaxaChart';
import OccuranceChart from "../components/occurances/OccuranceBarChart";
import DiversityBarChart from "../components/diversity/DiversityBarChart";
import Grid from '@mui/material/Grid2';
export  function ChartsDemoPage(){
    const dispatch = useDispatch()
    const taxa:Taxa[]= useAppSelector((state)=>state.taxa.taxa)
    //let intervals:Interval[]=[];
    const occurances:Occurrence[]=useAppSelector((state)=>state.occurances.occurances)
    const diversity:Diversity[]= useAppSelector((state)=> state.diversity.diversity)
    const isLoading = useAppSelector((state)=>state.root.loading)
    React.useEffect(() => {
        (async () => {
            dispatch(setLoading(true));            
            const _taxa = await getAllTaxa();
            dispatch(setTaxa(_taxa))
            dispatch(setLoading(false));
        })()
    }
    ,[dispatch])
   
    return (
        <>
       
        {isLoading && <div>Loading...</div>}
        <Grid container>
            <Grid size={6}>
                <TaxaChart taxa={taxa}/>
            </Grid>
            <Grid size={6}>
                <OccuranceChart occurrences={occurances}/>
            </Grid>
            <Grid size={6}>
                <DiversityBarChart diversity={diversity}/>
            </Grid>
            <Grid size={6}>
            </Grid>
        </Grid>
       
        </>
    )
}
