import React, { useContext } from 'react'
import { Map, TileLayer, LayerGroup, LayersControl } from 'react-leaflet';
import MeasureControl from 'react-leaflet-measure';
import { ZoomContext, CenterContext, ToggleContext } from '../contexts';
import Munciple from './munciple';
import Wards from './wards';



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
                <BaseLayer name="OpenStreetMap.Mapnik">
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                <BaseLayer checked name="OpenStreetMap.BlackAndWhite">
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
                    {zoomcontext.state.zoom <= 12 ? <Munciple mid={mid}></Munciple> : <Wards mid={mid}></Wards>}
                </LayerGroup>
                <MeasureControl {...measureOptions} />
            </LayersControl>
        </Map>
    )
}
export default MainMap;