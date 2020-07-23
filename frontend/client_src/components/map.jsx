import React,{useContext} from 'react'
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import { ZoomContext, CenterContext } from '../contexts';
import Munciple from './munciple';
import Ward from './ward';
import Place from './place';
import Building from './building';
import Road from './road';


const { BaseLayer, Overlay } = LayersControl

const mid = 'iaEL7GVAzOtRL';

const MainMap = () => {
    const zoomcontext = useContext(ZoomContext);
    const centercontext = useContext(CenterContext);
    
    const handleViewPort = (e) => {
        zoomcontext.onZoom(e.target._zoom);
        centercontext.setCenter(e.target._animateToCenter);
    }
// onViewportChanged={handleViewPort}
    return (
        <Map center={centercontext.state.center} zoom={zoomcontext.state.zoom} minZoom={4} maxZoom={19} onZoom={handleViewPort} >
            <LayersControl position="topright">
                <BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer maxZoom={20} 
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                {zoomcontext.state.zoom <=12 ? <Munciple mid={mid}></Munciple> : <Ward mid={mid}></Ward>}
                <Place mid={mid}></Place>
                <Building mid={mid}></Building>
                <Road mid={mid}></Road>
            </LayersControl>
        </Map>
    )
}
export default MainMap;