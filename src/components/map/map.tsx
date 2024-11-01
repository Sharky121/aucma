'use client';

import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapComponentsProvider,
  YMapDefaultMarker,
  YMapMarker
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
                        <YMapMarker coordinates={[55.376559, 37.588183]}/>
                        {/* <YMapMarker coordinates={[55.376757, 37.591939]}/> */}
                    </YMap>
                </YMapComponentsProvider>
            </div>        
        </>
    )
}

export default Map;