import React, { useState, useEffect,useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Marker, Popup } from 'react-leaflet'
import { WTELECOM_QUERY } from '../../queries/muncipal-query';
import { ZoomContext } from '../../contexts';



const Telecom = ({wid})=>{
    const zoomcontext = useContext(ZoomContext)
    const [telecoms, setTelecoms] = useState([]);
    const {loading, error, data} = useQuery(WTELECOM_QUERY, {
        variables: { wid }
    })

    useEffect(() => {
        if (!loading) {
            setTelecoms(data.wtelecoms);
        }
    });

    return zoomcontext.state.zoom >= 13?(
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
    ):null
}

export default Telecom;