import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/* p{
  margin-bottom:0;
} */
body {
  margin: 0;
  font-family: "Mulish", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body::-webkit-scrollbar{
  width: 0.5em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: #b50543;
  outline: 1px solid #b50543;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input:focus,
textarea:focus,
select:focus {
  outline: none !important;
  box-shadow: none !important;
}
.sidenav-container{
  width:22%;
}
.main-page-container{
  width: 78%;
  background: #e5e5e5;
}
.app-container{
  height: 90vh;
}
.form-control:disabled, .form-control[readonly] {
  background-color:white;
}
.container-fluid{
  width:90%;
}
@media (max-width: 576px) {
  .container-fluid{
  width:97%;
}
}
`;

export default GlobalStyle;
