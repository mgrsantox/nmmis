import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { COUNTRY_QUERY } from './queries/country-query'
import { Map, TileLayer, Polygon, LayersControl } from 'react-leaflet';
import {CRS} from 'leaflet'

const center = [31.391157522824702, 78.53027343749999]
const { BaseLayer, Overlay } = LayersControl

const App = () => {
	const handleClick = (e)=>{
		alert(e.country.properties.name)
	}
    const { loading, error, data } = useQuery(COUNTRY_QUERY);
    const [gd, setGd] = useState([])
    useEffect(() => {
    	if(!loading){
    	setGd(data.country.geometry.coordinates)
    	}
    	}
    )
    return (
        <div>
        <h1>Hello Santosh</h1>
			<Map center={center} zoom={6} >
			 <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Polygon color="purple" onClick={()=>handleClick(data)} positions={gd} />
          </LayersControl>
      		</Map>
		</div>
    )
}

export default App;