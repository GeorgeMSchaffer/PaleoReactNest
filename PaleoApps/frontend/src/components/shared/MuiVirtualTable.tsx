import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowVirtualizer,
  type MRT_SortingState,
  useMaterialReactTable,
} from 'material-react-table';
import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Diversity, Interval, Occurrence, Prevalence, Taxa } from '../../common/types';
  export interface IMuiVirtualTableProps {
      data: Occurrence[] | Interval[] | Taxa[] | Diversity[] | Prevalence[];
      columns: MRT_ColumnDef<Occurrence>[] | MRT_ColumnDef<Interval>[] | MRT_ColumnDef<Taxa>[] | MRT_ColumnDef<Diversity>[] | MRT_ColumnDef<Prevalence>[];
  }
  
  export  function MuiVirtualTable(props: IMuiVirtualTableProps) {
    //[TODO] we no longer need the prop if we are doing this but be better to make it a functional component instead and passin in loading,ooccurances, pagination, and filters etc...
    const {data,columns} = props;
      //   const isLoading = useAppSelector((state) => state.root.loading);
      // const pagination = useAppSelector((state) => state.occurances.settings.pagination);
      const [sorting, setSorting] = useState<MRT_SortingState>([]);
      const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);
      const [totalRows, setTotalRows] = useState(0);
      //accessorKey: 'name.firstName', //access nested data with dot notation
      useEffect(() => {
          setTotalRows(data.length);
      }, [data]);
      useEffect(() => {
        console.log('Mounted Effect on Virtual Table');
  //        rowVirtualizerInstanceRef.current?.scrollToIndex(0);
      }, [data]);
      useEffect(() => {
        console.log('First Render Effect on Virtual Table');
  //        rowVirtualizerInstanceRef.current?.scrollToIndex(0);
      });
      
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
    data, //10,000 rows
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
        
           
            <Container fluid>
              <Row>
                <Col xs={12}>
                  <MaterialReactTable table={table} />
                </Col>
              </Row>
            </Container>             
         
      );
  }
