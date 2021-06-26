// package imports
import React from 'react';
import styled from 'styled-components';

// project imports
import { Header, Body } from 'components/layout';
import useMainView from './useMainView';

// page container
const Container = styled.div`
  background-color: #efede8;
  height: 100vh;
`;

export default function MainView() {
  const { isLoading } = useMainView();

  return (
    <Container>
      <Header>Bench Test</Header>
      <Body>{isLoading ? <div>loading...</div> : <div>Placeholder</div>}</Body>
    </Container>
  );
}
