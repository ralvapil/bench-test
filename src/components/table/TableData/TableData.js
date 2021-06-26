import React from 'react';
import { StyledData } from './style';

export default function TableData({ children, className }) {
  return <StyledData className={className}>{children}</StyledData>;
}
