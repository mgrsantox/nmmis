import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { Map, TileLayer, Polygon, LayersControl } from 'react-leaflet';
import { PROVINCE_QUERY } from './queries/province-query';
import { MUNICIPAL_QUERY } from './queries/muncipal-query';

const { BaseLayer, Overlay } = LayersControl
const mid = 'D8Fm14aoxSKZU';

const App = () => {
  const [zoom,  setZoom] = useState(7);
  const [center, SeCenter] = useState([28.188244, 84.309082])
  const [gd, setGd] = useState([])

  const handleClick = (e,dt) => {
    setZoom(9);
    SeCenter(e.latlng)
    console.log(dt.municipal.properties);
  }
  
  const { loading, error, data } = useQuery(MUNICIPAL_QUERY, {
    variables: { mid },
  });
  
  useEffect(() => {
    if (!loading) {
      setGd(data.municipal.geometry.coordinates)
    }
  }
  )
  return (
    <div>
      <Map center={center} zoom={zoom} >
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Polygon color="purple" onClick={(e) => handleClick(e,data)} positions={gd} />
        </LayersControl>
      </Map>
    </div>
  )
}

export default App;