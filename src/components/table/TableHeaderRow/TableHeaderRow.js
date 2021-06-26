import React from "react";
import styled from "styled-components";

const StyledHeaderRow = styled.tr`
  background-color: #ffffff;
`;

export default function TableHeaderRow({ children, className }) {
  return <StyledHeaderRow className={className}>{children}</StyledHeaderRow>;
}
