'use client';

import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapComponentsProvider,
  YMapDefaultMarker,
  YMapHint,
  YMapHintContext,
} from "ymap3-components";

import styles from "./map.module.scss";

import { useCallback, useContext } from "react";
import { Points } from "./data";

const location = { center: [58.790799, 53.440109], zoom: 4 }; 

const Map = () => {
    function HintWindow() {
        const hintContext = useContext(YMapHintContext) as unknown as {
            hint: {
                title: string;
                content: string;
            };
        };

        return (
            hintContext && (
                <div className={styles.hintWindow}>
                    <div className={styles.hintWindowTitle}>{hintContext.hint.title}</div>
                    <div className={styles.hintWindowContent} dangerouslySetInnerHTML={{__html: hintContext.hint.content}} />
                </div>
            )
        );
    }

    const getHint = useCallback((object: any) => object?.properties?.hint, []);
   
    return (
        <>
            <div className={styles.mapContainer}>
                <YMapComponentsProvider apiKey='cac5b520-ec6d-4f80-b8a5-eb55d0da1f0a'>
                    <YMap location={location}>
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />
                        <YMapHint hint={getHint}>
                            <HintWindow />
                        </YMapHint>
                        
                        {
                            Points.map((point, index) => (
                                // @ts-ignore
                                <YMapDefaultMarker key={index} {...point} />
                            ))
                        }
                    </YMap>
                </YMapComponentsProvider>
            </div>        
        </>
    )
}

export default Map;