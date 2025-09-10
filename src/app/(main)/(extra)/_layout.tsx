import { Stack } from "expo-router";

export default function ExtraLayout() {
    return (
        <Stack>
            <Stack.Screen name="station-details" options={{ title: "Station Details" }} />
            <Stack.Screen name="booking" options={{ title: "Booking" }} />
        </Stack>
    );
}
