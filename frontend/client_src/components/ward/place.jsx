import React, { useState, useEffect, useContext } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useQuery } from '@apollo/client';
import {WPLACES_QUERY} from '../../queries/place-query'
import { ZoomContext } from '../../contexts';


const Place = ({ wid }) => {

    const zoomcontext = useContext(ZoomContext);
    const [placesCrd, setPlacesCrd] = useState([]);

    const { loading, error, data } = useQuery(WPLACES_QUERY, {
        variables: { wid },
    });

    useEffect(() => {
        if (!loading) {
            setPlacesCrd(data.wplaces);
        }
    });
    return zoomcontext.state.zoom >= 13? (
        <div>
            {
                placesCrd.map(place => {
                    return (
                        <Marker key={place.id} position={place.geometry.coordinates}>
                            <Popup>
                                <h1>Place Name:{place.properties.name}</h1>
                                <img src={place.properties.image} alt="Place"/>
                                </Popup>
                        </Marker>
                    )
                })
            }
        </div>
    ):null
}

export default Place;