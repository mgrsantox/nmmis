import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Polyline, Popup } from 'react-leaflet'
import { ROAD_QUERY } from '../queries/muncipal-query'
import { ToggleContext } from '../contexts';

const Road = ({ mid }) => {
    const togglecontext = useContext(ToggleContext);

    const { loading, error, data } = useQuery(ROAD_QUERY, {
        variables: { mid },
    });

    const [roadsCrd, setRoadsCrd] = useState([]);

    useEffect(() => {
        if (!loading) {
            setRoadsCrd(data.roads);
        }
    });
    return togglecontext.state.toggle_road? (
        <div>
            {
                roadsCrd.map(road => {
                    return (
                        <Polyline color="red" key={road.id} positions={road.geometry.coordinates}>
                            <Popup>
                                <h1>{road.properties.name}</h1>
                            </Popup>
                        </Polyline>
                    )
                })
            }
        </div>
    ):''
}

export default Road;