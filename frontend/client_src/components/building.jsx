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
                                <h1>Building Number: {building.properties.buildingNo}</h1>
                                <h4>Category: {building.properties.catg}</h4>
                                <h4>Sub-Category: {building.properties.subCatg}</h4>
                                <h4>Land Area: {building.properties.landArea}</h4>
                                <h4>Build Area: {building.properties.buildArea}</h4>
                                <h4>Build Date: {building.properties.buildDate}</h4>
                                <h4>Roof Type: {building.properties.roofType}</h4>
                                <h4>Total Floor: {building.properties.floor}</h4>
                                <h4>Toilet: {building.properties.toilet}</h4>
                                <h4>Road Acces: {building.properties.roadAccess?'Yes':'No'}</h4>
                                <h4>Electricity Access: {building.properties.electAccess?'Yes':'No'}</h4>
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