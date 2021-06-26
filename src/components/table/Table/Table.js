import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 2px 4px #d9d9d9;
`;

export default function Table({ children, className }) {
  return <StyledTable className={className}>{children}</StyledTable>;
}
