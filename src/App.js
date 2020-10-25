import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router";
import { ThemeProvider } from "styled-components";

import Navbar from "./components/Navbar";
import GlobalStyle from "./theme/globalStyles";
import lightTheme from "./theme/lightTheme";
import Sidenav from "./components/Sidenav";
import Monitor from "./pages/Monitor";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <GlobalStyle />
        <Navbar />
        <div className="row w-100 mx-auto app-container">
          <div className="sidenav-container p-0">
            <Sidenav />
          </div>
          <div className="main-page-container p-0">
            <Switch>
              <Route path="/" component={Monitor} />
            </Switch>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
