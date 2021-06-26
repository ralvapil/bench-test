import styled from 'styled-components';

export const StyledRow = styled.tr`
  background-color: #ffffff;

  &:last-child {
    td:first-child {
      border-radius: 0px 0px 0px 4px;
    }

    td:last-child {
      border-radius: 0px 0px 4px 0px;
    }
  }

  &:hover {
    td {
      color: #0fb4b5;
      cursor: pointer;
    }
  }
`;
