import React from "react";
import styled from "styled-components";

function App() {
  const container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;
  return (
    <container>
      <Button>Click me!</Button>
    </container>
  );
}

export default App;
