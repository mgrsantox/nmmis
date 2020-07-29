import React, { useContext } from 'react'
import { Map, TileLayer, LayerGroup, LayersControl } from 'react-leaflet';
import MeasureControl from 'react-leaflet-measure';
import { ZoomContext, CenterContext, ToggleContext } from '../contexts';
import Munciple from './munciple';
import Ward from './ward';
import Place from './place';
import Building from './building';
import Road from './road';
import Telecom from './telecom';
import Transformer from './transformer';


const { BaseLayer, Overlay } = LayersControl

const mid = 'iaEL7GVAzOtRL';

const measureOptions = {
    position: 'topleft',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'acres',
    activeColor: '#db4a29',
    completedColor: '#9b2d14'
};

const MainMap = () => {
    const zoomcontext = useContext(ZoomContext);
    const togglecontext = useContext(ToggleContext);
    const centercontext = useContext(CenterContext);

    const handleViewPort = (e) => {
        zoomcontext.onZoom(e.target._zoom);
        centercontext.setCenter(e.target._animateToCenter);
    }
    // onViewportChanged={handleViewPort}
    return (
        <Map center={centercontext.state.center} zoom={zoomcontext.state.zoom} minZoom={5} maxZoom={19} onZoom={handleViewPort} >
            <LayersControl position="topright">
                <BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                <BaseLayer name="OpenStreetMap.BlackAndWhite">
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                <BaseLayer name="Esri.WorldImagery">
                    <TileLayer
                        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS and the GIS User Community'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                </BaseLayer>
                <LayerGroup>
                    {zoomcontext.state.zoom <= 12 ? <Munciple mid={mid}></Munciple> : <Ward mid={mid}></Ward>}
                    {togglecontext.state.toggle_place && zoomcontext.state.zoom >= 13 ? <Place mid={mid}></Place> : null}
                    {togglecontext.state.toggle_building && zoomcontext.state.zoom >= 13 ? <Building mid={mid}></Building> : null}
                    {togglecontext.state.toggle_telecom && zoomcontext.state.zoom >= 13 ? <Telecom mid={mid}></Telecom> : null}
                    {togglecontext.state.toggle_transformer && zoomcontext.state.zoom >= 13 ? <Transformer mid={mid}></Transformer> : null}
                </LayerGroup>
                <MeasureControl {...measureOptions} />
            </LayersControl>
        </Map>
    )
}
export default MainMap;