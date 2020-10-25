import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router";
import { ThemeProvider } from "styled-components";

import Navbar from "./components/Navbar";
import GlobalStyle from "./theme/globalStyles";
import lightTheme from "./theme/lightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <GlobalStyle />
        <Navbar />
        hello world
      </div>
    </ThemeProvider>
  );
}

export default App;
