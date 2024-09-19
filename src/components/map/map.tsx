'use client';

import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapComponentsProvider,
  YMapDefaultMarker
} from "ymap3-components";

const location = { center: [37.95, 55.65], zoom: 10 };

const Map = () => {

    return (
        <>
            <div style={{ height: '400px' }}>
                <YMapComponentsProvider apiKey='cac5b520-ec6d-4f80-b8a5-eb55d0da1f0a'>
                    <YMap location={location}>
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />
                        <YMapDefaultMarker coordinates={[37.588144, 55.733842]}/>
                    </YMap>
                </YMapComponentsProvider>
            </div>        
        </>
    )
}

export default Map;