import React, {useContext } from 'react'
import { Polygon, Popup } from 'react-leaflet'
import { ZoomContext } from '../../contexts';



const Ward = ({ wardCrd, ward }) => {
    const zoomcontext = useContext(ZoomContext)
    return (
        <div>
            <Polygon maxZoom={20} color="purple" positions={wardCrd} >
                {zoomcontext.state.zoom < 15 ? <Popup>
                    <h1>Name: {ward.name}</h1>
                    <h1>Area: {ward.area} Sqm.</h1>
                    <h1>Population: {ward.total}</h1>
                    <h1>Male: {ward.male}</h1>
                    <h1>Female: {ward.female}</h1>
                </Popup>
                    : null}
            </Polygon>
        </div>
    )
}

export default Ward;