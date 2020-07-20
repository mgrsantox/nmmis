import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { Map, TileLayer, Polygon, LayersControl } from 'react-leaflet';
import { MUNICIPAL_QUERY } from './queries/muncipal-query';
import L from 'leaflet';

const { BaseLayer, Overlay } = LayersControl
const mid = 'D8Fm14aoxSKZU';

const App = () => {
  useEffect(() => {
    // Initialize the map
    var map = L.map('map', {
      scrollWheelZoom: true
    });

    // Set the position and zoom level of the map
    map.setView([47.20, 13.35], 8);

    /* Base Layers */
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(map);
  },[])
  const [zoom, setZoom] = useState(7);
  const [center, SeCenter] = useState([28.188244, 84.309082])
  const [gd, setGd] = useState([])

  const handleClick = (e, dt) => {
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
    <div id="map">
    </div>
  )
}

export default App;