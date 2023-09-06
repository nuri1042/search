import "./App.css";
import styled from "styled-components";
// import NotFound from "./pages/NotFound";
import React from "react";
import Main from "./pages/Main";

function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #cae9ff;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default App;
