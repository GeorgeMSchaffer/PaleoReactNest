import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPagination } from '../../store/store';

export interface IListPaginationProps {
  data: any[]
}

export function TablePagination(props: IListPaginationProps) {
  const pagination = useAppSelector((state) => state.root.settings.pagination);
  const { data } = props;
  const { page, perPage } = pagination;
  const dispatch = useAppDispatch();

  const onPaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log('Pagination change', event);
    const updatedPagination = {
      ...pagination,
      page: value
    };
    console.log('Updating Pagination to', updatedPagination);
    dispatch(setPagination(updatedPagination));
  };

  const pageCount = Math.ceil(data.length / perPage);

  return (
    <Pagination
      count={pageCount}
      page={page}
      onChange={onPaginationChange}
      variant="outlined"
      shape="rounded"
      showFirstButton
      showLastButton
    />
  );
}