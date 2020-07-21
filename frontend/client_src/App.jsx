import React, { useState} from 'react'
import Ward from './components/ward.jsx';
import Municipal from './components/munipal.jsx';

const mid = 'D8Fm14aoxSKZU';

const App = () => {
  const [zoom, setZoom] = useState(7);
  const [center, setCenter] = useState([28.188244, 84.309082])

  return (
    <div>
      {zoom > 8 ? <Ward mid={mid} setCenter={setCenter} setZoom={setZoom} center={center} zoom={zoom} /> : <Municipal mid={mid} setCenter={setCenter} setZoom={setZoom} center={center} zoom={zoom} />}
    </div>
  )
}

export default App;