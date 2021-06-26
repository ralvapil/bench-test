import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 2px 4px 2px #d4d4d4;
`;

export default function Table({ children, className }) {
  return <StyledTable className={className}>{children}</StyledTable>;
}
