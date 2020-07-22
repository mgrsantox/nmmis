import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useQuery } from '@apollo/client';
import { PLACES_QUERY } from '../queries/place-query'


const Place = ({ mid }) => {
    const [placesCrd, setPlacesCrd] = useState([]);

    const { loading, error, data } = useQuery(PLACES_QUERY, {
        variables: { mid },
    });

    useEffect(() => {
        if (!loading) {
            setPlacesCrd(data.places);
        }
    });
    return (
        <div>
            {
                placesCrd.map(place => {
                    return (
                        <Marker key={place.id} position={place.geometry.coordinates}>
                            <Popup>{place.properties.name}</Popup>
                        </Marker>
                    )
                })
            }
        </div>
    )
}

export default Place;