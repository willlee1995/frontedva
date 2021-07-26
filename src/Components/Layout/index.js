import React from "react";
//import { BrowserRouter, Switch } from "react-router-dom";
import Header from "../Header";
function Layout(props) {
  return (
    <>
      <Header />

      <main>{props.children}</main>
    </>
  );
}

export default Layout;
