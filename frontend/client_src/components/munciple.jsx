import React, { useEffect, useState } from 'react';
import { Polygon, Marker,Popup } from 'react-leaflet'
import { useQuery } from '@apollo/client';
import { MUNICIPAL_QUERY } from '../queries/muncipal-query';

const Munciple = ({ mid }) => {
    const [munCrd, setMunCrd] = useState([]);
    const [munProp, setMunProp] = useState({});

    const { loading, error, data } = useQuery(MUNICIPAL_QUERY, {
        variables: { mid },
    })

    useEffect(() => {
        if (!loading) {
            setMunCrd(data.municipal.geometry.coordinates)
            setMunProp(data.municipal.properties);
        }
    });
    return (
        <div>
            <Marker position={[51.5, -0.1]}>
                <Popup>Hello</Popup>
            </Marker>
            <Polygon maxZoom={20} color="purple" positions={munCrd} >
                <Popup>
                    <h1>Name: {munProp.name}</h1>
                    <h1>Area: {munProp.area} Sqm.</h1>
                </Popup>
            </Polygon>
        </div>
    )
}

export default Munciple;