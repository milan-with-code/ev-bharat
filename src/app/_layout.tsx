import { Stack } from "expo-router";
import { useAuthStore } from "@/utils/authStore";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    useFonts as useGoogleFonts
} from "@expo-google-fonts/outfit";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { isLoggedIn, hasCompletedOnboarding, _hasHydrated, isLocationSetup, hasCompletedVehicleSetup } = useAuthStore()

    const [googleFontsLoaded, googleError] = useGoogleFonts({
        Outfit_400Regular,
        Outfit_500Medium,
        Outfit_600SemiBold,
        Outfit_700Bold,
    });

    useEffect(() => {
        async function hideSplash() {
            if ((googleFontsLoaded || googleError) && _hasHydrated) {
                await SplashScreen.hideAsync();
            }
        }
        hideSplash();
    }, [googleFontsLoaded, googleError, _hasHydrated]);

    if (!_hasHydrated || (!googleFontsLoaded && !googleError)) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Protected guard={!hasCompletedOnboarding}>
                    <Stack.Screen name="onboarding" />
                </Stack.Protected>
                <Stack.Protected guard={!isLoggedIn && hasCompletedOnboarding}>
                    <Stack.Screen name="(auth)" />
                </Stack.Protected>
                <Stack.Protected guard={isLoggedIn && !isLocationSetup}>
                    <Stack.Screen name="location" />
                </Stack.Protected>
                <Stack.Protected guard={isLoggedIn && isLocationSetup && !hasCompletedVehicleSetup}>
                    <Stack.Screen name="vehicle" />
                </Stack.Protected>
                <Stack.Protected guard={isLoggedIn && hasCompletedOnboarding && isLocationSetup && hasCompletedVehicleSetup}>
                    <Stack.Screen name="(main)" />
                </Stack.Protected>
            </Stack>
        </SafeAreaProvider>
    )
}
