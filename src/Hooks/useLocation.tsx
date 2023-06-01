/* import React, { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../Interfaces/appInterfaces';

const useLocation = () => {
    const [hasLocation, setHasLocation] = useState(false);
    const watchId = useRef<number>();
    const isMounted = useRef(true);
    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });
    const [routeLines, setRouteLines] = useState<Location[]>([]);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        getCurrentLocation().then(location => {
            if (!isMounted.current) return;
            setInitialPosition(location);
            setHasLocation(true);
            setUserLocation(location);
            setRouteLines(routes => [...routes, location]);
        });
    }, []);

    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });
                },
                err => reject({ err }),
                { enableHighAccuracy: true },
            );
        });
    };

    const followUserLocation = () => {
        watchId.current = Geolocation.watchPosition(
            ({ coords }) => {
                if (!isMounted.current) return;

                console.log(coords);
                const location: Location = {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                };
                setUserLocation(location);
                setRouteLines(routes => [...routes, location]);
            },
            err => console.log({ err }),
            { enableHighAccuracy: true, distanceFilter: 10 },
        );
    };

    const stopFollowUserLocation = () => {
        if (watchId.current) Geolocation.clearWatch(watchId.current);
    };

    return {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        userLocation,
        stopFollowUserLocation,
        routeLines,
    };
};

export default useLocation; */