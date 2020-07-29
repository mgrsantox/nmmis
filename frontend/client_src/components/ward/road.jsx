import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Polyline, Popup } from 'react-leaflet'
import { ZoomContext } from '../../contexts';
import { WARD_ROAD_QUERY } from '../../queries/muncipal-query';


const Road = ({ wid }) => {
    const zoomcontext = useContext(ZoomContext);

    const { loading, error, data } = useQuery(WARD_ROAD_QUERY, {
        variables: { wid },
    });

    const [roadsCrd, setRoadsCrd] = useState([]);

    useEffect(() => {
        if (!loading) {
            setRoadsCrd(data.wroads);
        }
    });
    return zoomcontext.state.zoom >= 13? (
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
    ):null
}

export default Road;