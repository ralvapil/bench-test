import React from 'react';
import { StyledTable } from './style';

export default function Table({ children, className }) {
  return <StyledTable className={className}>{children}</StyledTable>;
}
