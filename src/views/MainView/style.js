import styled from 'styled-components';
import { TableHeader, TableData } from 'components/table';

export const LoadingView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  height: calc(100vh - 80px - 4rem);
`;

export const Emoji = styled.span`
  font-size: 6rem;
`;

export const ErrorText = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: #efede8;
  min-height: 100vh;
`;

export const SumTableHeader = styled(TableHeader)`
  &:last-child {
    text-align: right;
  }
`;

export const CompanyTableData = styled(TableData)`
  font-weight: 700;
  color: black;
`;

export const AmountTableData = styled(TableData)`
  font-weight: 700;
  color: black;
  text-align: right;
`;
