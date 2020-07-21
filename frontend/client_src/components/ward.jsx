import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { WARDS_QUERY } from '../queries/muncipal-query'
import { Map, TileLayer, Polygon, LayersControl } from 'react-leaflet';
const { BaseLayer, Overlay } = LayersControl

const Ward = ({ mid, center, zoom, setZoom, setCenter }) => {
    const { loading, error, data } = useQuery(WARDS_QUERY, {
        variables: { mid },
    })
    const [wardsCrd, setWardsCrd] = useState([]);
    const handleClick = (e, dt) => {
        setZoom(12);
        setCenter(e.latlng)
    }
    const handleHover=(dt) =>{
        console.log(dt.properties.name)
    }
    useEffect(() => {
        if (!loading) {
            setWardsCrd(data.wards);
        }
    }, [data]);
    return (
        <Map center={center} zoom={zoom} >
            <LayersControl position="topright">
                <BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                {
                    wardsCrd.map(ward => {
                        return (
                            <Polygon key={ward.id} color="purple" onmouseover={()=>handleHover(ward)} onClick={(e) => handleClick(e, ward)} positions={ward.geometry.coordinates} />
                        )
                    })
                }
            </LayersControl>
        </Map>
    )
}
export default Ward;