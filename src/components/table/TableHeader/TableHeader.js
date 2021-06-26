import React from "react";
import styled from "styled-components";

const StyledHeader = styled.th`
  text-align: left;
  border: none;
  padding: 1rem 2rem;
  color: #0fb4b5;
  font-size: 16px;
  border-radius: 4px;
`;

export default function TableHeader({ children, className }) {
  return <StyledHeader className={className}>{children}</StyledHeader>;
}
