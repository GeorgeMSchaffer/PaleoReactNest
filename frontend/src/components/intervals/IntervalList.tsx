import {
    type MRT_ColumnDef
} from 'material-react-table';
import { Interval } from "../../common/types.js";
import { MuiVirtualTable } from '../shared/MuiVirtualTable';
import Grid from '@mui/material/Grid2'
import { Container } from '@mui/material';
interface IntervalListProps {
    intervals: Interval[]
}

export default function IntervalList(props: IntervalListProps) {
    const intervals = props.intervals || [];
    const columns : MRT_ColumnDef<Interval>[] =[
        { accessorKey: 'intervalNo', header: 'Interval Number' },
        { accessorKey: 'intervalName', header: 'Interval Name' },
        { accessorKey: 'abbrv', header: 'Abbreviation' },
        { accessorKey: 'recordType', header: 'Record Type' },
        { accessorKey: 'tAge', header: 'Top Age' },
        { accessorKey: 'bAge', header: 'Base Age' },
        { accessorKey: 'referenceNo', header: 'Reference Number' }
    ];
    return (
        <Grid container className="p-4">
            <Grid size={12}><h2 className="block mb-2 text-lg"># of Intervals {intervals.length}</h2></Grid>
            <Grid size={12} className="table-responsive">
                <MuiVirtualTable
                    columns={columns}
                    data={intervals}
                    // muiTablePaperProps={{
                    //     sx: {
                    //         height: '100%',
                    //         maxHeight: '100%',
                    //     },
                    // }}
                />
            </Grid>
        </Grid>
    );
    
}
