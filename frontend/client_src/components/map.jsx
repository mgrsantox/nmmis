import React,{useContext} from 'react'
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import { ZoomContext, CenterContext } from '../contexts';
import Munciple from './munciple';
import Ward from './ward';
import Place from './place';


const { BaseLayer, Overlay } = LayersControl

const mid = 'iaEL7GVAzOtRL';

const MainMap = () => {
    const zoomcontext = useContext(ZoomContext);
    const centercontext = useContext(CenterContext);
    
    const handleViewPort = (e) => {
        zoomcontext.onZoom(e.zoom);
        centercontext.setCenter(e.center);
    }

    return (
        <Map center={centercontext.state.center} zoom={zoomcontext.state.zoom} minZoom={4} maxZoom={19} onViewportChanged={handleViewPort} >
            <LayersControl position="topright">
                <BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer maxZoom={20} 
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                {zoomcontext.state.zoom <12 ? <Munciple mid={mid}></Munciple> : <Ward mid={mid}></Ward>}
                <Place mid={mid}></Place>
            </LayersControl>
        </Map>
    )
}
export default MainMap;