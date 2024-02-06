import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./_base.scss";
import styled from "styled-components";

const Main = styled.div`
  background: #16181b;
  background-attachment: fixed;
  color: #b1bdb4;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1px;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Main>
    <App />
  </Main>
);
