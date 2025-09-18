import { useState } from "react";
import * as Location from "expo-location";

export function useCurrentLocation() {
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const getCurrentLocation = async () => {
        try {
            setLoading(true);
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                setLoading(false);
                return;
            }

            let { coords } = await Location.getCurrentPositionAsync({});
            if (coords) {
                const { latitude, longitude } = coords;
                let response = await Location.reverseGeocodeAsync({ latitude, longitude });

                const loc = {
                    latitude,
                    longitude,
                    address: response[0],
                };

                return loc
            }
        } catch (error: any) {
            setErrorMsg(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { errorMsg, loading, getCurrentLocation };
}
