import React from "react";
import styled from "styled-components";

import { Header } from "../../components";

const Container = styled.div`
  background-color: #efede8;
  height: 100vh;
`;

export default function MainView() {
  return (
    <Container>
      <Header>Bench Test</Header>
    </Container>
  );
}
