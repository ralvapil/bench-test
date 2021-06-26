import React from 'react';
import { StyledBody } from './style';

export default function Body({ children, className }) {
  return <StyledBody className={className}>{children}</StyledBody>;
}
