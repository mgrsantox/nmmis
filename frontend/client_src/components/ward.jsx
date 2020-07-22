import React, { useState, useEffect } from 'react'
import { Polygon, Popup } from 'react-leaflet'
import { useQuery } from '@apollo/client'
import { WARDS_QUERY } from '../queries/muncipal-query'

const Ward = ({ mid}) => {
    const [wardsCrd, setWardsCrd] = useState([]);

    const { loading, error, data } = useQuery(WARDS_QUERY, {
        variables: { mid },
    })
    useEffect(() => {
        if (!loading) {
            setWardsCrd(data.wards);
        }
    });
    return (
        <div>
            {
                wardsCrd.map(ward => {
                    return (
                        <Polygon maxZoom={20} key={ward.id} color="purple" positions={ward.geometry.coordinates} >
                            <Popup>
                                <h1>Name: {ward.properties.name}</h1>
                                <h1>Area: {ward.properties.area} Sqm.</h1>
                            </Popup>
                        </Polygon>
                    )
                })
            }
        </div>
    )
}
export default Ward;