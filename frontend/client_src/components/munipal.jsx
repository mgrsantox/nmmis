import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { MUNICIPAL_QUERY } from '../queries/muncipal-query'
import { Map, TileLayer, Polygon, LayersControl, Popup } from 'react-leaflet';
const { BaseLayer, Overlay } = LayersControl

const Municipal = ({ mid, center, zoom, setZoom, setCenter }) => {
    const { loading, error, data } = useQuery(MUNICIPAL_QUERY, {
        variables: { mid },
    })
    const [munCrd, SetMunCrd] = useState([]);
    const [munProp, SetMunProp] = useState({});
    const handleClick = (e, dt) => {
        setZoom(12);
        setCenter(e.latlng)
        console.log(dt.municipal.properties.name)
    }
    useEffect(() => {
        if (!loading) {
            SetMunCrd(data.municipal.geometry.coordinates)
            SetMunProp(data.municipal.properties);
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
                <Polygon color="purple" ondblclick={(e) => handleClick(e, data)} positions={munCrd} >
                    <Popup>
                        <h1>{munProp.name}</h1>
                    </Popup>
                </Polygon>
            </LayersControl>
        </Map>
    )
}
export default Municipal;