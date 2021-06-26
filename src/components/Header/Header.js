import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #098b8c;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  color: #f3f3f3;
`;

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
