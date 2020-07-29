import React from 'react'
import { Route, Switch } from 'react-router-dom';
import MainMap from './components/map';
import Navbar from './components/navigation/navbar';
import Sidebar from './components/navigation/sidebar';
import WardDetail from './pages/ward-detail';
import WardCompare from './pages/ward-compare';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar></Sidebar>
      <Switch>
        <Route path="/" exact component={MainMap} />
        <Route path="/ward/:wid" exact component={WardDetail} />
        <Route path="/ward-compare" exact component={WardCompare} />
      </Switch>
    </div>
  )
}

export default App;