import React from 'react'
import { Map, TileLayer, Polygon, FeatureGroup } from 'react-leaflet';
import L from 'leaflet';
import { EditControl } from 'react-leaflet-draw';


const ListMunicipal = () => {
	const handleEdited = (e)=>{
		e.layers.eachLayer(a=>{
			console.log(a.toGeoJSON())
		})
	}
	const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]
    return (
        <div>
      <Map center={[37.8189, -122.4786]} zoom={13} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup >
            <EditControl
              position='topleft'
              onEdited={handleEdited}
              draw={{
                rectangle: true
              }}
            />
            <Polygon color="purple" positions={polygon} />
        </FeatureGroup>
      </Map>
        </div>
    )
}

export default ListMunicipal;