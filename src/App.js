import React from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;
  return (
    <div className="App">
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
