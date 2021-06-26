// package imports
import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

// project imports
import { Header, Body } from 'components/layout';
import {
  Table,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableData,
} from 'components/table';

// hooks
import useMainView from './useMainView';

const LoadingView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  height: calc(100vh - 80px - 4rem);
`;

const Container = styled.div`
  background-color: #efede8;
  height: 100vh;
`;

const CompanyTableData = styled(TableData)`
  font-weight: 700;
`;

export default function MainView() {
  const { isLoading, isSuccess, data } = useMainView();

  const formatAsCurrency = (amount) =>
    new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
    }).format(amount);

  const totalSum = isSuccess
    ? formatAsCurrency(data.reduce((acc, cur) => acc + cur.Amount, 0))
    : '';

  /* eslint-disable no-alert, react/no-array-index-key */
  // data is not changed on the page so it is acceptable to use idx as a key
  // this should be changed to a real identifier if mutations occur
  const tableRows = isSuccess
    ? data.map((rowData, idx) => (
        <TableRow key={idx}>
          <TableData>{format(rowData.Date, 'MMM do, yyyy')}</TableData>
          <CompanyTableData>{rowData.Company}</CompanyTableData>
          <TableData>{rowData.Ledger}</TableData>
          <TableData>{formatAsCurrency(rowData.Amount)}</TableData>
        </TableRow>
      ))
    : '';
  /* eslint-enable no-alert, react/no-array-index-key */

  return (
    <Container>
      <Header>Bench Test</Header>
      <Body>
        {isLoading ? (
          <LoadingView>Loading...</LoadingView>
        ) : (
          <Table>
            <thead>
              <TableHeaderRow>
                <TableHeader>Date</TableHeader>
                <TableHeader>Company</TableHeader>
                <TableHeader>Account</TableHeader>
                <TableHeader>{totalSum}</TableHeader>
              </TableHeaderRow>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        )}
      </Body>
    </Container>
  );
}
