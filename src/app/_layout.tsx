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
import { ToastContainer } from "@/components/ui/Toast";

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

    const isOnboarding = !hasCompletedOnboarding;
    const isAuth = !isLoggedIn && hasCompletedOnboarding;
    const isLocation = isLoggedIn && !isLocationSetup;
    const isVehicle = isLoggedIn && isLocationSetup && !hasCompletedVehicleSetup;
    const isMain =
        isLoggedIn &&
        hasCompletedOnboarding &&
        isLocationSetup &&
        hasCompletedVehicleSetup;


    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <ToastContainer />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Protected guard={isOnboarding}>
                    <Stack.Screen name="onboarding" />
                </Stack.Protected>
                <Stack.Protected guard={isAuth}>
                    <Stack.Screen name="(auth)" />
                </Stack.Protected>
                <Stack.Protected guard={isLocation}>
                    <Stack.Screen name="location" />
                </Stack.Protected>
                <Stack.Protected guard={isVehicle}>
                    <Stack.Screen name="vehicle" />
                </Stack.Protected>
                <Stack.Protected guard={isMain}>
                    <Stack.Screen name="(main)" />
                </Stack.Protected>
            </Stack>
        </SafeAreaProvider>
    )
}
