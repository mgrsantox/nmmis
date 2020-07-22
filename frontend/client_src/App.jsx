import React from 'react'
import MainMap from './components/map';
import Navbar from './components/navigation/navbar';
import Sidebar from './components/navigation/sidebar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar></Sidebar>
      <MainMap />
    </div>
  )
}

export default App;