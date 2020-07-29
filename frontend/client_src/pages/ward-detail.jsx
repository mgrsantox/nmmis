import React, { useContext,useState, useEffect } from 'react'
import { Map, TileLayer, LayerGroup, LayersControl } from 'react-leaflet';
import MeasureControl from 'react-leaflet-measure';
import { ZoomContext, ToggleContext, CenterContext } from '../contexts';
import Ward from '../components/ward/ward';
import Road from '../components/ward/road';
import Place from '../components/ward/place';
import Building from '../components/ward/building';
import Transformer from '../components/ward/transformer';
import Telecom from '../components/ward/telecom';
import { useQuery } from '@apollo/client';
import { WARD_QUERY } from '../queries/muncipal-query';
import WardInfo from '../components/ward/ward-info';


const { BaseLayer, Overlay } = LayersControl

const measureOptions = {
    position: 'topleft',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'acres',
    activeColor: '#db4a29',
    completedColor: '#9b2d14'
};

const WardDetail = (props) => {
    const wid = props.match.params.wid;
    
    const zoomcontext = useContext(ZoomContext);
    const togglecontext = useContext(ToggleContext);
    const centercontext = useContext(CenterContext);
    const [ward, setWard] = useState({});

    const [wardCrd, setWardCrd] = useState([]);
    const { loading, error, data } = useQuery(WARD_QUERY, {
        variables: { wid }
    })

    useEffect(() => {
        if (!loading) {
            setWardCrd(data.ward.geometry.coordinates)
            setWard(data.ward.properties);
        }
    });

    const handleViewPort = (e) => {
        zoomcontext.onZoom(e.target._zoom);
        centercontext.setCenter(e.target._animateToCenter);
    }
    
    return (
        <div>
            <Map center={centercontext.state.center} zoom={zoomcontext.state.zoom} minZoom={12} maxZoom={19} onZoom={handleViewPort} >
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
                    <MeasureControl {...measureOptions} />
                </LayersControl>
            </Map>
            {ward.municipal!==undefined?<WardInfo data={ward} />:null}
        </div>
    )
}

export default WardDetail;