import React from "react";
import styled from "styled-components";

const StyledData = styled.td`
  text-align: left;
  padding: 1rem 2rem;
  background-color: #fafafa;
  font-size: 14px;
  border: none;

  &:not(:first-child) {
    border-top: 1px solid #eaeaea;
  }
`;

export default function TableData({ children, className }) {
  return <StyledData className={className}>{children}</StyledData>;
}
