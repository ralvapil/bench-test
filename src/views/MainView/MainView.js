import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import { Header, Body } from 'components/layout';
import {
  Table,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableData,
} from 'components/table';

import useMainView from './useMainView';

const LoadingView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  height: calc(100vh - 80px - 4rem);
`;

const Emoji = styled.span`
  font-size: 6rem;
`;

const ErrorText = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: #efede8;
  min-height: 100vh;
`;

const SumTableHeader = styled(TableHeader)`
  &:last-child {
    text-align: right;
  }
`;

const CompanyTableData = styled(TableData)`
  font-weight: 700;
  color: black;
`;

const AmountTableData = styled(TableData)`
  font-weight: 700;
  color: black;
  text-align: right;
`;

export default function MainView() {
  const { isLoading, isSuccess, isError, data } = useMainView();

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
          <AmountTableData>{formatAsCurrency(rowData.Amount)}</AmountTableData>
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
        ) : isError ? (
          <ErrorMessage>
            <ErrorText>
              Oops! We encountered an error. Refresh your page to try again.
            </ErrorText>
            <Emoji role="img" aria-label="concerned-emoji">
              😰
            </Emoji>
          </ErrorMessage>
        ) : (
          <Table>
            <thead>
              <TableHeaderRow>
                <TableHeader>Date</TableHeader>
                <TableHeader>Company</TableHeader>
                <TableHeader>Account</TableHeader>
                <SumTableHeader>{totalSum}</SumTableHeader>
              </TableHeaderRow>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        )}
      </Body>
    </Container>
  );
}
