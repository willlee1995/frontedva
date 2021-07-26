import React from 'react'

import InputForm from './Components/InputForm'
import LoginForm from './Components/LoginForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './Components/Layout'

function App() {
  return (
    <div>
      <BrowserRouter>
     
        <Layout />
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/input' component={InputForm} />
        </Switch>
      </BrowserRouter>
     
    </div>
  )
}

export default App
