import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { MUNICIPAL_QUERY } from '../queries/muncipal-query'
import { Map, TileLayer, Polygon, LayersControl, Tooltip } from 'react-leaflet';
const { BaseLayer, Overlay } = LayersControl

const Municipal = ({ mid, center, zoom, setZoom, setCenter }) => {
    const { loading, error, data } = useQuery(MUNICIPAL_QUERY, {
        variables: { mid },
    })
    const [munCrd, setMunCrd] = useState([]);
    const [munProp, setMunProp] = useState({});
    const handleClick = (e, dt) => {
        setZoom(12);
        setCenter(e.latlng)
        console.log(dt.municipal.properties.name)
    }
    useEffect(() => {
        if (!loading) {
            setMunCrd(data.municipal.geometry.coordinates)
            setMunProp(data.municipal.properties);
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
                <Polygon color="purple" onClick={(e) => handleClick(e, data)} positions={munCrd} >
                    <Tooltip>
                        <h1>Name: {munProp.name}</h1>
                        <h1>Area: {munProp.area} Sqm.</h1>
                    </Tooltip>
                </Polygon>
            </LayersControl>
        </Map>
    )
}
export default Municipal;