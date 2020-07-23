import React, { useState, useEffect, useContext } from 'react'
import { Polygon, Popup } from 'react-leaflet'
import { useQuery } from '@apollo/client'
import { WARDS_QUERY } from '../queries/muncipal-query'
import {ZoomContext} from '../contexts'

const Ward = ({ mid}) => {
    const zoomcontext = useContext(ZoomContext);
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
                            {zoomcontext.state.zoom<15?<Popup>
                                <h1>Name: {ward.properties.name}</h1>
                                <h1>Area: {ward.properties.area} Sqm.</h1>
                                <h1>Population: {ward.properties.total}</h1>
                                <h1>Male: {ward.properties.male}</h1>
                                <h1>Female: {ward.properties.female}</h1></Popup>
                                :null}
                        </Polygon>
                    )
                })
            }
        </div>
    )
}
export default Ward;