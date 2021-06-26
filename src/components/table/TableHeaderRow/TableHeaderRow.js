import React from 'react';
import styled from 'styled-components';

const StyledHeaderRow = styled.tr`
  background-color: #ffffff;

  &:first-child {
    th:first-child {
      border-radius: 4px 0px 0px 0px;
    }

    th:last-child {
      border-radius: 0px 4px 0px 0px;
    }
  }
`;

export default function TableHeaderRow({ children, className }) {
  return <StyledHeaderRow className={className}>{children}</StyledHeaderRow>;
}
