import React, { useState} from 'react'
import Ward from './components/ward.jsx';
import Municipal from './components/munipal.jsx';

const mid = 'iaEL7GVAzOtRL';

const App = () => {
  const [zoom, setZoom] = useState(11);
  const [center, setCenter] = useState([28.5205894108141, 81.09798431396484])

  return (
    <div>
      {zoom > 11 ? <Ward mid={mid} setCenter={setCenter} setZoom={setZoom} center={center} zoom={zoom} /> : <Municipal mid={mid} setCenter={setCenter} setZoom={setZoom} center={center} zoom={zoom} />}
    </div>
  )
}

export default App;