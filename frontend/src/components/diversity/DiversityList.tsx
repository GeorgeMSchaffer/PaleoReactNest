import {
  type MRT_ColumnDef,
  type MRT_RowVirtualizer,
  type MRT_SortingState,
  useMaterialReactTable
} from 'material-react-table';
import {Container,Box} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useEffect, useRef, useState } from 'react';
import { TDiversity } from "../../common/types";
import { useAppSelector } from '../../store/hooks';
import { IntervalFilter } from '../filters';
import { CladeOrderFilter } from '../filters/CladeOrderFilter';
import { MuiVirtualTable } from '../shared/MuiVirtualTable';
import { TablePagination } from '../shared/TablePagination';
import { ListItem,List } from '@mui/material'
export interface IDiversityList {
    diversity: TDiversity[];
}

export  function DiversityList(props: IDiversityList) {
  //[TODO] we no longer need the prop if we are doing this but be better to make it a functional component instead and passin in loading,odiversity, pagination, and filters etc...
    const diversity = useAppSelector((state) => state.diversity.diversity) || [];
    const isLoading = useAppSelector((state) => state.root.loading);
    const pagination = useAppSelector((state) => state.root.settings.pagination);
    const [sorting, setSorting] = useState<MRT_SortingState>([]);
    const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);
 
    const [totalRows, setTotalRows] = useState(0);
    //accessorKey: 'name.firstName', //access nested data with dot notation
    useEffect(() => {
        setTotalRows(diversity.length);
    }, [diversity.length]);
//     useEffect(() => {
//       console.log('Mounted Effect on Occurances');
// //        rowVirtualizerInstanceRef.current?.scrollToIndex(0);
//     }, [diversity]);

    const columns: MRT_ColumnDef<TDiversity>[] =[
        { header: 'Interval', accessorKey: 'intervalName' },
        { header: 'Interval Start(MYA)', accessorKey: 'minMa' },
        { header: 'Interval End (MYA)', accessorKey: 'maxMa' },
        { header: 'Unique Phylum', accessorKey: 'countOfPhyla' },
        { header: 'Unique Classes', accessorKey: 'countOfClasses' },
        { header: 'Unique Orders', accessorKey: 'countOfOrders' },
        { header: 'Unique Families', accessorKey: 'countOfFamilies' },
        { header: 'Unique Genera', accessorKey: 'countOfGenera' },
      ];
//    );
    // return(
    //     <>
    //         <InfiniteLoader
    //             isItemLoaded={(index) => !!diversity[index]}
    //             itemCount={diversity.length}
               
    //         >
    //             {({onItemsRendered, ref}) => (
    //                 <FixedSizeGrid
    //                     columnCount={1}
    //                     columnWidth={300}
    //                     height={400}
    //                     rowCount={diversity.length}
    //                     rowHeight={100}
    //                     width={300}
    //                     onItemsRendered={onItemsRendered}
    //                     ref={ref}
    //                 >
    //                     {({columnIndex, rowIndex, style}) => (
    //                         <div style={style}>
    //                             {diversity[rowIndex].diversityNo}
    //                         </div>
    //                     )}
    //                 </FixedSizeGrid>
    //             )}
    //         </InfiniteLoader>
    //     </>
    // )

//[TODO] TRY THIS NEXT https://www.material-react-table.com/docs/examples/virtualized
useEffect(() => {
  //scroll to the top of the table when the sorting changes
  try {
    rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
  } catch (error) {
    console.error(error);
  }
}, [sorting])

const table = useMaterialReactTable<TDiversity>({
  columns,
  data: diversity, //10,000 rows
  // defaultDisplayColumn: { enableResizing: true },
  // enableBottomToolbar: false,
  // enableColumnResizing: true,
  // enableColumnVirtualization: true,
  // enableGlobalFilterModes: true,
  // enablePagination: false,
  // enableColumnPinning: true,
  // enableRowNumbers: true,
  // enableRowVirtualization: true,
  // muiTableContainerProps: { sx: { maxHeight: '600px' } },
  // onSortingChange: setSorting,
  // state: { isLoading, sorting },
  // rowVirtualizerInstanceRef, //optional
  // rowVirtualizerOptions: { overscan: 5 }, //optionally customize the row virtualizer
  // columnVirtualizerOptions: { overscan: 2 }, //optionally customize the column virtualizer
});

    return (
        <div className="p-4">
         <Container>
    
            <Grid size={12}>
              <TablePagination data={diversity}/>
            </Grid>
            <Grid size={12}>
              {diversity?.length &&
                // <MaterialReactTable table={table} />
                <MuiVirtualTable data={diversity} columns={columns} />
              }
            </Grid>
          </Container>
        </div>
    );
}