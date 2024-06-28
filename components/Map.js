'use client'

import React, { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import StadiaMaps from 'ol/source/StadiaMaps.js';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Style, Icon } from 'ol/style';

const MapBox = () => {
    useEffect(() => {
        const iconFeature = new Feature({
            geometry: new Point(fromLonLat([-80.4549, 38.5976]))
        });

        const iconStyle = new Style({
            image: new Icon({
                anchor: [0.5, 1],
                src: 'https://openlayers.org/en/latest/examples/data/icon.png'
            })
        });

        iconFeature.setStyle(iconStyle);

        const vectorSource = new VectorSource({
            features: [iconFeature]
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource
        });

        const map = new Map({
            target: 'map',
            layers: [
                vectorLayer
            ],
            view: new View({
                center: fromLonLat([-80.4549, 38.5976]),
                zoom: 7
            })
        });

        return () => {
            map.setTarget(null);
        };
    }, []);

    return <div id="map" className='w-[360px] h-[110px] xl:w-[400px] xl:h-[360px] m-1'></div>;
};

export default MapBox;
