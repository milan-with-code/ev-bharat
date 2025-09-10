import { Stack } from "expo-router";
import { ThemeProvider } from "@/theme/ThemeContext";
import { Outfit_300Light, Outfit_400Regular, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold, Outfit_800ExtraBold, Outfit_900Black, useFonts } from "@expo-google-fonts/outfit";
import { useAuthStore } from "@/utils/authStore";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { isLoggedIn, hasCompletedOnboarding } = useAuthStore()
    const [fontsLoaded] = useFonts({
        Outfit_300Light,
        Outfit_400Regular,
        Outfit_500Medium,
        Outfit_600SemiBold,
        Outfit_700Bold,
        Outfit_800ExtraBold,
        Outfit_900Black,
    });
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hide();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <ThemeProvider>
            <Stack screenOptions={{ headerShown: false }}>
                {/* <Stack.Protected guard={!hasCompletedOnboarding}>
                    <Stack.Screen name="onboarding" />
                </Stack.Protected>

                <Stack.Protected guard={!isLoggedIn && hasCompletedOnboarding}>
                    <Stack.Screen name="(auth)" />
                </Stack.Protected> */}

                <Stack.Protected guard={true}>
                    <Stack.Screen name="(main)" />
                </Stack.Protected>
            </Stack>
        </ThemeProvider>
    )
}
