import React from 'react';
import { format } from 'date-fns';

import { Header, Body } from 'components/layout';
import {
  Table,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableData,
} from 'components/table';
import {
  LoadingView,
  Emoji,
  ErrorText,
  ErrorMessage,
  Container,
  SumTableHeader,
  CompanyTableData,
  AmountTableData,
} from './style';

import useMainView from './useMainView';

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
