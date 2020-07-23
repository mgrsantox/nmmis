import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { Marker, Popup } from 'react-leaflet'
import {TRANSFORMER_QUERY } from '../queries/muncipal-query';

const Transformer = ({mid})=>{
    const [transformers, setTransformers] = useState([]);
    const {loading, error, data} = useQuery(TRANSFORMER_QUERY, {
        variables: { mid }
    })

    useEffect(() => {
        if (!loading) {
            setTransformers(data.transformers);
        }
    });

    return(
        <div>
            {
                transformers.map(transformer => {
                    return (
                        <Marker key={transformer.id} position={transformer.geometry.coordinates}>
                            <Popup>
                                <h1>Type Name:{transformer.properties.type}</h1>
                                <img src={transformer.properties.image} alt="Transformer"/>
                                </Popup>
                        </Marker>
                    )
                })
            }
        </div>
    )
}

export default Transformer;