import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import InputForm from "./Components/InputForm";
import LoginForm from "./Components/LoginForm";
import Layout from "./Components/Layout";
import Table from "./Components/Table";
import Panel from "./Components/Panel";
import DemoPanel from "./Components/DemoPanel";

function App() {
  //const [token, setToken ] = useState();
  /*if (!token) {
    return <LoginForm setToken={setToken} />
  }*/

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smarter Vein Health</title>
      </Helmet>
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/input" component={InputForm} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/panel" component={Panel} />
          <Route exact path="/demo-panel" component={DemoPanel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
