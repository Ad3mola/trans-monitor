import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./theme/globalStyles";
import lightTheme from "./theme/lightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <GlobalStyle />
        hello world
      </div>
    </ThemeProvider>
  );
}

export default App;
