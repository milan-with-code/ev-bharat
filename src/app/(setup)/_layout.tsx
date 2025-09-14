import { Stack } from "expo-router";

export default function SetupRootLayout() {
    return <Stack screenOptions={{ headerShown: false }} initialRouteName="set-location" />
}
