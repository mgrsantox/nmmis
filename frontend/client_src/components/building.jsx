import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Marker, Popup } from 'react-leaflet'
import { BUILDINGS_QUERY } from '../queries/building-query';
import { ToggleContext } from '../contexts';

const Building =({mid})=>{
    const [buildingsCrd, setBuildingsCrd] = useState([]);
    const togglecontext = useContext(ToggleContext);

    const {loading, error, data} = useQuery(BUILDINGS_QUERY,{
        variables: { mid },
    });
    useEffect(() => {
        if (!loading) {
            setBuildingsCrd(data.buildings);
        }
    });
    return togglecontext.state.toggle_building? (
        <div>
            {
                buildingsCrd.map(building => {
                    return (
                        <Marker key={building.id} position={building.geometry.coordinates}>
                            <Popup>
                                <h1>Building Name: {building.properties.name}</h1>
                                <img src={building.properties.image} alt="Building Image"/>
                                </Popup>
                        </Marker>
                    )
                })
            }
        </div>
    ):''
}

export default Building;