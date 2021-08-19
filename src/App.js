import React from 'react'

import InputForm from './Components/InputForm'
import LoginForm from './Components/LoginForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './Components/Layout'
import Table from './Components/Table'

function App() {
  //const [token, setToken ] = useState();
  /*if (!token) {
    return <LoginForm setToken={setToken} />
  }*/
  
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/input' component={InputForm} />
          <Route exact path="/table" component={Table} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
