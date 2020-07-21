import React, { useEffect } from 'react';
import L from 'leaflet';

const Map = ({ zoom, center }) => {
    useEffect(() => {
        // Initialize the map
        var map = L.map('map', {
            scrollWheelZoom: true
        });

        // Set the position and zoom level of the map
        map.setView(zoom, center);
        // Base Layer
        let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }).addTo(map);
    }, []);
    return (
        <div id="map"></div>
    )
};

export default Map;