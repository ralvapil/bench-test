// package imports
import React from 'react';
import styled from 'styled-components';

// project imports
import { Header, Body } from '../../components';

// page container
const Container = styled.div`
  background-color: #efede8;
  height: 100vh;
`;

export default function MainView() {
  return (
    <Container>
      <Header>Bench Test</Header>
      <Body>Body Placeholder</Body>
    </Container>
  );
}
