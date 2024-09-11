import {
  type MRT_ColumnDef,
  type MRT_RowVirtualizer,
  type MRT_SortingState,
  useMaterialReactTable
} from 'material-react-table';
import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Occurrence } from "../../common/types";
import { useAppSelector } from '../../store/hooks';
import { IntervalFilter } from '../filters';
import { CladeOrderFilter } from '../filters/CladeOrderFilter';
import { MuiVirtualTable } from '../shared/MuiVirtualTable';
import { TablePagination } from '../shared/TablePagination';
export interface IOccurrenceList {
    occurances: Occurrence[];
}

export  function OccuranceList(props: IOccurrenceList) {
  //[TODO] we no longer need the prop if we are doing this but be better to make it a functional component instead and passin in loading,ooccurances, pagination, and filters etc...
    const occurances = useAppSelector((state) => state.occurances.occurancesToDisplay) || [];
    const isLoading = useAppSelector((state) => state.root.loading);
    const pagination = useAppSelector((state) => state.occurances.settings.pagination);
    const [sorting, setSorting] = useState<MRT_SortingState>([]);
    const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);
    const [totalRows, setTotalRows] = useState(0);
    //accessorKey: 'name.firstName', //access nested data with dot notation
    useEffect(() => {
        setTotalRows(occurances.length);
    }, [occurances.length]);
    useEffect(() => {
      console.log('Mounted Effect on Occurances');
//        rowVirtualizerInstanceRef.current?.scrollToIndex(0);
    }, [occurances]);
    useEffect(() => {
      console.log('First Render Effect on Occurances');
//        rowVirtualizerInstanceRef.current?.scrollToIndex(0);
    });
    const columns: MRT_ColumnDef<Occurrence>[] =[
        { header: 'ID', accessorKey: 'occurrenceNo' },
        { header: 'Collection',  accessorKey: 'collectionNo'},
        { header: 'Record Type', accessorKey: 'recordType' },
        { header: 'Identified Name', accessorKey: 'identifiedName' },
        { header: 'Identified Rank', accessorKey: 'identifiedRank' },
        { header: 'Identified Number', accessorKey: 'identifiedName' },
        { header: 'Accepted Name', accessorKey: 'acceptedName' },
        { header: 'Accepted Rank', accessorKey: 'acceptedRank' },
        { header: 'Accepted Number', accessorKey: 'AcceptedNo' },
        { header: 'Early Interval', accessorKey: 'earlyInterval' },
        { header: 'Later Interval', accessorKey: 'laterInterval' },
        { header: 'Min MYA', accessorKey: 'minMya' },
        { header: 'Max MYA', accessorKey: 'maxMya' },
        { header: 'Phylum', accessorKey: 'phylum' },
        { header: 'Clade', accessorKey: 'cladeClass' },
        { header: 'Order', accessorKey: 'cladeOrder' },
        { header: 'Family', accessorKey: 'family' },
        { header: 'Genus', accessorKey: 'genus' },
      ];
//    );
    // return(
    //     <>
    //         <InfiniteLoader
    //             isItemLoaded={(index) => !!occurances[index]}
    //             itemCount={occurances.length}
               
    //         >
    //             {({onItemsRendered, ref}) => (
    //                 <FixedSizeGrid
    //                     columnCount={1}
    //                     columnWidth={300}
    //                     height={400}
    //                     rowCount={occurances.length}
    //                     rowHeight={100}
    //                     width={300}
    //                     onItemsRendered={onItemsRendered}
    //                     ref={ref}
    //                 >
    //                     {({columnIndex, rowIndex, style}) => (
    //                         <div style={style}>
    //                             {occurances[rowIndex].occurrenceNo}
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

const table = useMaterialReactTable<Occurrence>({
  columns,
  data: occurances, //10,000 rows
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
         <Container fluid>
          <Row>
            <Col xs={6}>
              <CladeOrderFilter/>
            </Col>
            <Col xs={6}>
              <IntervalFilter/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
            <TablePagination data={occurances}/>
            </Col>
          </Row>
         </Container>
          <Container fluid>
            <Row>
              <Col xs={12}>
              {occurances?.length &&
                // <MaterialReactTable table={table} />
                <MuiVirtualTable data={occurances} columns={columns} />
              }
              </Col>
            </Row>
          </Container>
           
            {/* <AutoSizer>
      {({ height, width }) => (
<>
<b>Height: {height}</b>
<b>Width: {width}</b>
          <Table
            width={width}
            height={height}
            headerHeight={50}
            rowHeight={100}
            rowCount={occurances.length}
            rowGetter={({ index }) => occurances[index]}
          >
              <Column label="ID" dataKey="occurrenceNo" width={200}  />
              <Column label="Collection" dataKey="collectionNo" width={400} />
              <Column label="Record Type" dataKey="recordType" width={200} />
              <Column label="Identified Name" dataKey="identifiedName" width={200} />
              <Column label="Identified Rank" dataKey="identifiedRank" width={200}/>
              <Column label="identified Number" dataKey="identifiedName" width={200}/>
              <Column label="Accepted Name" dataKey="acceptedName" width={200}/>
              <Column label="Accepted Rank" dataKey="acceptedRank" width={200}/>
              <Column label="Accepted Number " dataKey="AcceptedNo" width={200}/>
              <Column label="Early Interval" dataKey="earlyInterval" width={200}/>
              <Column label="Later Interval" dataKey="laterInterval" width={200}/>
              <Column label="Min MYA" dataKey="minMya" width={200}/>
              <Column label="Max MYA" dataKey="maxMya" width={200}/>
              <Column label="phylum" dataKey="phylum" width={200}/>
              <Column label="Clade" dataKey="cladeClass" width={200}/>
              <Column label="Order" dataKey="cladeOrder" width={200}/>
              <Column label="Family" dataKey="family" width={200}/>
              <Column label="Genus" dataKey="genus" width={200}/>
          </Table>
</>
      )}
    </AutoSizer> */}
           
        </div>
    );
}