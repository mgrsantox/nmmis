import React, { useState, useEffect, useContext } from 'react'
import { LayerGroup, Polygon, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { WARDS_QUERY } from '../queries/muncipal-query'
import { ZoomContext, ToggleContext } from '../contexts'
import Place from './ward/place';
import Building from './ward/building';
import Road from './ward/road';
import Telecom from './ward/telecom';
import Transformer from './ward/transformer';

const Wards = ({ mid }) => {
    const zoomcontext = useContext(ZoomContext);
    const togglecontext = useContext(ToggleContext);
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
                        <LayerGroup key={ward.id}>
                            <Polygon maxZoom={20} color="purple" positions={ward.geometry.coordinates} >
                                {zoomcontext.state.zoom < 15 ? <Popup>
                                    <h1>Name: {ward.properties.name}</h1>
                                    <h1>Area: {ward.properties.area} Sqm.</h1>
                                    <h1>Population: {ward.properties.total}</h1>
                                    <h1>Male: {ward.properties.male}</h1>
                                    <h1>Female: {ward.properties.female}</h1>
                                    <Link to={`/ward/${ward.id}`} >View Detail</Link>
                                </Popup>
                                    : null}
                            </Polygon>
                            {togglecontext.state.toggle_road ? <Road wid={ward.id}></Road> : null}
                            {togglecontext.state.toggle_place ? <Place wid={ward.id}></Place> : null}
                            {togglecontext.state.toggle_building ? <Building wid={ward.id}></Building> : null}
                            {togglecontext.state.toggle_telecom ? <Telecom wid={ward.id}></Telecom> : null}
                            {togglecontext.state.toggle_transformer ? <Transformer wid={ward.id}></Transformer> : null}
                        </LayerGroup>
                    )
                })
            }
        </div>
    )
}
export default Wards;