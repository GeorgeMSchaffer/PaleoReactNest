import Pagination from 'react-bootstrap/Pagination';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPagination } from '../../store/store';

export interface IListPaginationProps {
  data: any[]
}

export function TablePagination(props: IListPaginationProps) {
  const pagination = useAppSelector((state) => state.root.settings.pagination);
  const {data} = props;
  const {page, perPage,sortBy,sortOrder} = pagination;
  console.log("🚀 ~ ListPagination ~ pagination:", pagination)
  const dispatch = useAppDispatch();
    const onPaginationChange = (e: any,page) => {
      console.log('Pagination change', e);
      const _pageination = {
      ...pagination,
      page: page
      }
      console.log('Updating Pagination to', _pageination);
      dispatch(setPagination(_pageination));
    }
  return (
    <Pagination>
      <Pagination.First onClick={(evt)=>onPaginationChange(evt,0)} />
      <Pagination.Prev />
      {data?.length && data.map((item, index) => 
         index % perPage === 0 &&
        <Pagination.Item key={index} onClick={(evt)=>onPaginationChange(evt, index)}>{index}</Pagination.Item>
      )}
    
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}
