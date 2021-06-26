import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export default function Table({ children, className }) {
  return <StyledTable className={className}>{children}</StyledTable>;
}
