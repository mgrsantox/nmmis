import React from 'react'
import { Route, Switch } from 'react-router-dom';
import MainMap from './components/map';
import Navbar from './components/navigation/navbar';
import Sidebar from './components/navigation/sidebar';
import WardDetail from './pages/ward-detail';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar></Sidebar>
      <Switch>
        <Route path="/" exact component={MainMap} />
        <Route path="/ward/:wid" exact component={WardDetail} />
      </Switch>
    </div>
  )
}

export default App;