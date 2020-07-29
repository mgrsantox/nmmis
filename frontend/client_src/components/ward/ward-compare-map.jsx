import React, { useContext } from 'react'
import { Map, TileLayer, LayerGroup, LayersControl } from 'react-leaflet';
import Ward from './ward';
import { ToggleContext, ZoomContext } from '../../contexts';
import Road from './road';
import Place from './place';
import Building from './building';
import Telecom from './telecom';
import Transformer from './transformer';

const { BaseLayer, Overlay } = LayersControl


const WardCompareMap = ({ wardCrd, ward, wid }) => {
    const togglecontext = useContext(ToggleContext);
    const zoomcontext = useContext(ZoomContext)

    const handleViewPort = (e) => {
        zoomcontext.onZoom(e.target._zoom);
    }
    return (
        <div>
            <Map center={wardCrd[0][0]} zoom={13} minZoom={12} maxZoom={19} onZoom={handleViewPort} >
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
                    <Ward wardCrd={wardCrd} ward={ward}></Ward>
                    <LayerGroup>
                        {togglecontext.state.toggle_road ? <Road wid={wid}></Road> : null}
                        {togglecontext.state.toggle_place ? <Place wid={wid}></Place> : null}
                        {togglecontext.state.toggle_building ? <Building wid={wid}></Building> : null}
                        {togglecontext.state.toggle_telecom ? <Telecom wid={wid}></Telecom> : null}
                        {togglecontext.state.toggle_transformer ? <Transformer wid={wid}></Transformer> : null}
                    </LayerGroup>
                </LayersControl>
            </Map>
        </div>
    )
}

export default WardCompareMap;