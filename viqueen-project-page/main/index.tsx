import React from "react";
import { render } from "react-dom";

const Main = () => {
  return <h1>Hello Viqueen</h1>;
};

render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
