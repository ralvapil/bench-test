import React from 'react';
import { StyledHeaderRow } from './style';

export default function TableHeaderRow({ children, className }) {
  return <StyledHeaderRow className={className}>{children}</StyledHeaderRow>;
}
