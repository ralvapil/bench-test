import React from "react";
import styled from "styled-components";

const StyledBody = styled.div`
  padding: 2rem;
`;

export default function Body({ children, className }) {
  return <StyledBody className={className}>{children}</StyledBody>;
}
