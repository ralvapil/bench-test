import React from 'react';
import { StyledHeader } from './style';

export default function Header({ children, className }) {
  return <StyledHeader className={className}>{children}</StyledHeader>;
}
