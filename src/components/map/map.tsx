'use client';

import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapComponentsProvider,
  YMapDefaultMarker
} from "ymap3-components";
import styles from "./map.module.scss";

const location = { center: [37.583760, 55.381915], zoom: 15 };

const Map = () => {

    return (
        <>
            <div className={styles.mapContainer}>
                <YMapComponentsProvider apiKey='cac5b520-ec6d-4f80-b8a5-eb55d0da1f0a'>
                    <YMap location={location}>
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />
                        <YMapDefaultMarker coordinates={[37.583760, 55.381915]}/>
                    </YMap>
                </YMapComponentsProvider>
            </div>        
        </>
    )
}

export default Map;