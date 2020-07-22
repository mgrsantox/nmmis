import React, { useState, useEffect, useContext } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useQuery } from '@apollo/client';
import { PLACES_QUERY } from '../queries/place-query'
import { ToggleContext } from '../contexts';


const Place = ({ mid }) => {
    const [placesCrd, setPlacesCrd] = useState([]);
    const togglecontext = useContext(ToggleContext);

    const { loading, error, data } = useQuery(PLACES_QUERY, {
        variables: { mid },
    });

    useEffect(() => {
        if (!loading) {
            setPlacesCrd(data.places);
        }
    });
    return togglecontext.state.toggle_place? (
        <div>
            {
                placesCrd.map(place => {
                    return (
                        <Marker key={place.id} position={place.geometry.coordinates}>
                            <Popup>
                                <h1>{place.properties.name}</h1>
                                <img src={place.properties.image} alt="Place"/>
                                </Popup>
                        </Marker>
                    )
                })
            }
        </div>
    ):''
}

export default Place;