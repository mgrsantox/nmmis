import React from 'react'
import MainMap from './components/map.jsx';
import Navbar from './components/navigation/header.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainMap />
    </div>
  )
}

export default App;