import React, { useEffect, useState, useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Marker, Popup } from 'react-leaflet'
import { WTRANSFORMER_QUERY } from '../../queries/muncipal-query';
import { ZoomContext } from '../../contexts';

const Transformer = ({wid})=>{
    const zoomcontext = useContext(ZoomContext)
    const [transformers, setTransformers] = useState([]);
    const {loading, error, data} = useQuery(WTRANSFORMER_QUERY, {
        variables: { wid }
    })

    useEffect(() => {
        if (!loading) {
            setTransformers(data.wtransformers);
        }
    });

    return zoomcontext.state.zoom >=13?(
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
    ):null
}

export default Transformer;