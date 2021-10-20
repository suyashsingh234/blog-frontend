import React from 'react'
import { Help } from './components/Pages/Help/Help'
import { Home } from './components/Pages/Home/Home'
import { Publish } from './components/Pages/Publish/Publish'
import { HashRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/publish' component={Publish} />
          <Route path='/help' component={Help} />
        </Switch>
      </HashRouter>
    </>
  )
}

export default App;
