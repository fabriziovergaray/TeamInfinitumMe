import React, { useEffect, useRef, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
/* import useLocation from '../hooks/useLocation';
 */import Loading from '../Components/Loading';

const Map = () => {
    /* const {
        hasLocation,
        initialPosition,
        followUserLocation,
        userLocation,
    } = useLocation();

    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);
    useEffect(() => {
        followUserLocation();
        return () => { };
    }, []);

    useEffect(() => {
        if (following.current == false) return;
        const { latitude, longitude } = userLocation;
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
        });
    }, [userLocation]);


    if (!hasLocation) {
        return <Loading />;
    } */
    return (
        <>
            <MapView
/*                 ref={el => (mapViewRef.current = el!)}
 */                showsUserLocation
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex: 1 }}
                region={{
                    latitude: -12.131008740197757,
                    longitude: -76.98650393680684,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
/*                 onTouchStart={() => (following.current = false)}
 */                >

            </MapView>
        </>
    );
};

export default Map;