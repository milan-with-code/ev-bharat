import { Stack } from "expo-router";
import { useAuthStore } from "@/utils/authStore";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Outfit_300Light, Outfit_400Regular, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold, Outfit_800ExtraBold, Outfit_900Black, useFonts as useGoogleFonts } from "@expo-google-fonts/outfit";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { isLoggedIn, hasCompletedOnboarding, _hasHydrated, isLocationSetup } = useAuthStore()

    const [googleFontsLoaded, googleError] = useGoogleFonts({
        Outfit_300Light,
        Outfit_400Regular,
        Outfit_500Medium,
        Outfit_600SemiBold,
        Outfit_700Bold,
        Outfit_800ExtraBold,
        Outfit_900Black,
    });

    useEffect(() => {
        console.log("googleFontsLoaded:", googleFontsLoaded, "error:", googleError);
        if (googleFontsLoaded && _hasHydrated) {
            console.log('Hiding splash screen');
            SplashScreen.hide();
        }
    }, [googleFontsLoaded, _hasHydrated]);

    if (!_hasHydrated || !googleFontsLoaded) {
        return null;
    }
    return (
        <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Protected guard={!hasCompletedOnboarding}>
                    <Stack.Screen name="onboarding" />
                </Stack.Protected>
                <Stack.Protected guard={!isLoggedIn && hasCompletedOnboarding}>
                    <Stack.Screen name="(auth)" />
                </Stack.Protected>
                <Stack.Protected guard={isLoggedIn && !isLocationSetup}>
                    <Stack.Screen name="(setup)" />
                </Stack.Protected>
                <Stack.Protected guard={isLoggedIn && hasCompletedOnboarding && isLocationSetup}>
                    <Stack.Screen name="(main)" />
                </Stack.Protected>
            </Stack>
            <StatusBar style="dark" />
        </SafeAreaProvider>
    )
}
