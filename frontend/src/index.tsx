import React from "react";
import ReactDOM from "react-dom";
import { App } from "app";
import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
