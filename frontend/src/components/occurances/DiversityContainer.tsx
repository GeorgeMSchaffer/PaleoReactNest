//[TODO] Responsible for handling data specific to Occurances
import React from 'react';
import { EnumMessageType, IError } from '../../common/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setError, setLoading } from '../../store/rootReducer';
import store, { setIntervals } from '../../store/store';
import { TablePagination } from '../shared/TablePagination';
import { fetchIntervals } from '../intervals/intervalService';
import { fetchDiversity } from '@/common/utils';
import { DiversityByIntervalBarChart } from './DiversityByIntervalBarChart';
const diversity = [
{
    "early_interval": "Julian",
    "intervalName": "6016",
    "countOfFamilies": "429",
    "countOfClasses": "45",
    "countOfOrders": "18",
    "num_order": "129",
    "countOfGenera": "909"
},
{
    "early_interval": "Kaiatan",
    "intervalName": "12",
    "countOfFamilies": "7",
    "countOfClasses": "5",
    "countOfOrders": "5",
    "num_order": "5",
    "countOfGenera": "7"
},
{
    "early_interval": "Kaihikuan",
    "intervalName": "70",
    "countOfFamilies": "11",
    "countOfClasses": "4",
    "countOfOrders": "3",
    "num_order": "5",
    "countOfGenera": "14"
},
{
    "early_interval": "Ladinian",
    "intervalName": "533",
    "countOfFamilies": "138",
    "countOfClasses": "42",
    "countOfOrders": "28",
    "num_order": "80",
    "countOfGenera": "260"
},
{
    "early_interval": "Lancian",
    "intervalName": "3078",
    "countOfFamilies": "120",
    "countOfClasses": "15",
    "countOfOrders": "8",
    "num_order": "63",
    "countOfGenera": "199"
},
{
    "early_interval": "Late Chadronian",
    "intervalName": "137",
    "countOfFamilies": "41",
    "countOfClasses": "2",
    "countOfOrders": "1",
    "num_order": "11",
    "countOfGenera": "74"
},
{
    "early_interval": "Late Eocene",
    "intervalName": "7781",
    "countOfFamilies": "733",
    "countOfClasses": "47",
    "countOfOrders": "30",
    "num_order": "215",
    "countOfGenera": "1908"
},
{
    "early_interval": "Late Maastrichtian",
    "intervalName": "12617",
    "countOfFamilies": "706",
    "countOfClasses": "55",
    "countOfOrders": "32",
    "num_order": "245",
    "countOfGenera": "1509"
},
{
    "early_interval": "Late Severodvinian",
    "intervalName": "309",
    "countOfFamilies": "42",
    "countOfClasses": "8",
    "countOfOrders": "3",
    "num_order": "18",
    "countOfGenera": "60"
},
{
    "early_interval": "Late Urzhumian",
    "intervalName": "1",
    "countOfFamilies": "1",
    "countOfClasses": "1",
    "countOfOrders": "1",
    "num_order": "1",
    "countOfGenera": "1"
},
{
    "early_interval": "Longobardian",
    "intervalName": "33",
    "countOfFamilies": "14",
    "countOfClasses": "5",
    "countOfOrders": "3",
    "num_order": "11",
    "countOfGenera": "17"
},
{
    "early_interval": "Longtanian",
    "intervalName": "58",
    "countOfFamilies": "1",
    "countOfClasses": "1",
    "countOfOrders": "1",
    "num_order": "1",
    "countOfGenera": "1"
},
{
    "early_interval": "Lopingian",
    "intervalName": "924",
    "countOfFamilies": "9",
    "countOfClasses": "25",
    "countOfOrders": "1",
    "num_order": "27",
    "countOfGenera": "4"
},
{
    "early_interval": "Maastrichtian",
    "intervalName": "11052",
    "countOfFamilies": "630",
    "countOfClasses": "61",
    "countOfOrders": "33",
    "num_order": "211",
    "countOfGenera": "1541"
},
{
    "early_interval": "Middle Chadronian",
    "intervalName": "44",
    "countOfFamilies": "24",
    "countOfClasses": "2",
    "countOfOrders": "1",
    "num_order": "8",
    "countOfGenera": "25"
},
{
    "early_interval": "MP 17A",
    "intervalName": "38",
    "countOfFamilies": "21",
    "countOfClasses": "7",
    "countOfOrders": "2",
    "num_order": "12",
    "countOfGenera": "25"
},
{
    "early_interval": "MP 18",
    "intervalName": "63",
    "countOfFamilies": "22",
    "countOfClasses": "4",
    "countOfOrders": "1",
    "num_order": "12",
    "countOfGenera": "40"
},
{
    "early_interval": "MP 19",
    "intervalName": "78",
    "countOfFamilies": "21",
    "countOfClasses": "3",
    "countOfOrders": "1",
    "num_order": "7",
    "countOfGenera": "36"
},
{
    "early_interval": "MP 20",
    "intervalName": "17",
    "countOfFamilies": "2",
    "countOfClasses": "1",
    "countOfOrders": "1",
    "num_order": "1",
    "countOfGenera": "4"
},
{
    "early_interval": "Olenekian",
    "intervalName": "1592",
    "countOfFamilies": "159",
    "countOfClasses": "27",
    "countOfOrders": "12",
    "num_order": "68",
    "countOfGenera": "324"
},
{
    "early_interval": "Pelsonian",
    "intervalName": "151",
    "countOfFamilies": "49",
    "countOfClasses": "6",
    "countOfOrders": "4",
    "num_order": "20",
    "countOfGenera": "73"
},
{
    "early_interval": "Priabonian",
    "intervalName": "19717",
    "countOfFamilies": "1509",
    "countOfClasses": "60",
    "countOfOrders": "28",
    "num_order": "294",
    "countOfGenera": "5002"
},
{
    "early_interval": "Runangan",
    "intervalName": "104",
    "countOfFamilies": "55",
    "countOfClasses": "9",
    "countOfOrders": "6",
    "num_order": "26",
    "countOfGenera": "70"
},
{
    "early_interval": "Severodvinian",
    "intervalName": "14",
    "countOfFamilies": "6",
    "countOfClasses": "3",
    "countOfOrders": "1",
    "num_order": "5",
    "countOfGenera": "6"
},
{
    "early_interval": "Smithian",
    "intervalName": "5386",
    "countOfFamilies": "181",
    "countOfClasses": "27",
    "countOfOrders": "10",
    "num_order": "75",
    "countOfGenera": "423"
},
{
    "early_interval": "Spathian",
    "intervalName": "4992",
    "countOfFamilies": "262",
    "countOfClasses": "38",
    "countOfOrders": "17",
    "num_order": "99",
    "countOfGenera": "564"
},
{
    "early_interval": "Tatarian",
    "intervalName": "74",
    "countOfFamilies": "16",
    "countOfClasses": "6",
    "countOfOrders": "1",
    "num_order": "12",
    "countOfGenera": "23"
},
{
    "early_interval": "Tuvalian",
    "intervalName": "1965",
    "countOfFamilies": "251",
    "countOfClasses": "39",
    "countOfOrders": "18",
    "num_order": "93",
    "countOfGenera": "514"
},
{
    "early_interval": "Ulangochuian",
    "intervalName": "25",
    "countOfFamilies": "10",
    "countOfClasses": "1",
    "countOfOrders": "1",
    "num_order": "4",
    "countOfGenera": "14"
},
{
    "early_interval": "Urzhumian",
    "intervalName": "216",
    "countOfFamilies": "36",
    "countOfClasses": "8",
    "countOfOrders": "4",
    "num_order": "15",
    "countOfGenera": "73"
},
{
    "early_interval": "Vokhmian",
    "intervalName": "2",
    "countOfFamilies": "2",
    "countOfClasses": "1",
    "countOfOrders": "1",
    "num_order": "1",
    "countOfGenera": "2"
},
{
    "early_interval": "Vyatkian",
    "intervalName": "53",
    "countOfFamilies": "3",
    "countOfClasses": "1",
    "countOfOrders": "1",
    "num_order": "1",
    "countOfGenera": "3"
},
{
    "early_interval": "Wordian",
    "intervalName": "13690",
    "countOfFamilies": "586",
    "countOfClasses": "64",
    "countOfOrders": "34",
    "num_order": "180",
    "countOfGenera": "1708"
},
{
    "early_interval": "Wuchiapingian",
    "intervalName": "15105",
    "countOfFamilies": "11",
    "countOfClasses": "41",
    "countOfOrders": "1",
    "num_order": "46",
    "countOfGenera": "5"
},
{
    "early_interval": "Zechstein",
    "intervalName": "84",
    "countOfFamilies": "3",
    "countOfClasses": "7",
    "countOfOrders": "1",
    "num_order": "6",
    "countOfGenera": "5"
}
]
export function DiversityContainer(){

    //[TODO] Move to Redux to store
    const {getState} = store;
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state) => state.intervals.loading);
    const pagination = useAppSelector((state) => state.intervals.settings.pagination);
    const filterFields = useAppSelector((state) => state.intervals.filterFields);
    console.log('Store state from intervals',getState())

    //The idea here is to refetch the intervals when the filter fields change since the data needs to be refetched with the filters applied
    React.useEffect(() => {
        console.log('Intervals Container Filter Effect, results should now be retrived', loading);
        (async () => {
            try{
                dispatch(setLoading(true));
                const data = await fe(filterFields,pagination);
                console.log("🚀 ~ Dispatching setIntervals with ~ data:", data)
                dispatch(setIntervals(data));
            }
            catch(ex:any){
            console.log('Error fetching intervals', ex);
            const error: IError = {
                message: ex.message,
                type: EnumMessageType.ERROR,
                code: 500,
            }
            setError(error);
            }
            finally{
                dispatch(setLoading(false));
            }
            //Fetch Intervals
        })()
    },[filterFields])
    //Fetch Intervals
    React.useEffect(() => {
        dispatch(setLoading(true));
        try{

            (async () => {
                dispatch(setLoading(true));
                const data = await fetchIntervals(filterFields,pagination);
                console.log("🚀 ~ Dispatching setIntervals with ~ data:", data)
                dispatch(setIntervals(data));
                dispatch(setLoading(false));
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
        finally{
            dispatch(setLoading(false));
         }
}
    ,[dispatch])
    React.useEffect(() => {
        console.log('Loading effect fired',getState())
    },[loading])

    const diversity = useAppSelector((state)=>{
        console.log('Store state from intervals', state.intervals)
        return state.intervals.intervalsToDisplay
    });
    return (
        <>
           <TablePagination data={diversity}/>
           <DiversityByIntervalBarChart diversity={diversity}/>
       </>
        
    )
}
