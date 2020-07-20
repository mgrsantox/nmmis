import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { COUNTRY_QUERY } from './queries/country-query'
import {PROVINCES_QUERY} from './queries/province-query'
import { Map, TileLayer, Polygon, LayersControl } from 'react-leaflet';
import {CRS, latLng} from 'leaflet'

const center = [31.391157522824702, 78.53027343749999]
const { BaseLayer, Overlay } = LayersControl

const App = () => {
	const handleClick = (e)=>{
		alert(e.properties.name)
  }
  const mapClick = (e)=>{
    console.log(e.latlng)
  }
    // const { loading, error, data } = useQuery(COUNTRY_QUERY);
    const { loading, error, data } = useQuery(PROVINCES_QUERY);
    const [gd, setGd] = useState([])
    useEffect(() => {
    	if(!loading){
    	setGd(data.provinces)
    	// setGd(data.provinces[0].geometry.coordinates)
    	}
    	}
    )
    return (
        <div>
        <h1>Hello Santosh</h1>
			<Map center={center} onClick={mapClick} zoom={6} >
			 <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          {gd.map(poly=>(
            <Polygon key={poly.id} color="purple" onClick={()=>handleClick(poly)} positions={poly.geometry.coordinates} />
          ))}
          {/* <Polygon color="purple" onClick={()=>handleClick(data)} positions={gd} /> */}
          </LayersControl>
      		</Map>
		</div>
    )
}

export default App;