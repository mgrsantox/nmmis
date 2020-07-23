import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { Marker, Popup } from 'react-leaflet'
import { TELECOM_QUERY } from '../queries/muncipal-query';



const Telecom = ({mid})=>{
    const [telecoms, setTelecoms] = useState([]);
    const {loading, error, data} = useQuery(TELECOM_QUERY, {
        variables: { mid }
    })

    useEffect(() => {
        if (!loading) {
            setTelecoms(data.telecoms);
        }
    });

    return(
        <div>
            {
                telecoms.map(telecom => {
                    return (
                        <Marker key={telecom.id} position={telecom.geometry.coordinates}>
                            <Popup>
                                <h1>Type Name:{telecom.properties.type}</h1>
                                <img src={telecom.properties.image} alt="Telecom"/>
                                </Popup>
                        </Marker>
                    )
                })
            }
        </div>
    )
}

export default Telecom;