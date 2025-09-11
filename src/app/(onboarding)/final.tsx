import { ThemedText } from "@/components/ThemedText";
import { useAuthStore } from "@/utils/authStore";
import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function OnboardingFirstScreen() {
    const { completedOnboarding } = useAuthStore()
    const router = useRouter()
    return (
        <View>
            <ThemedText>Onboarding Final Screen</ThemedText>
            <Button title="Complete onboarding" onPress={() => {
                completedOnboarding
                router.replace("/(main)/(tabs)")
            }} />
        </View>
    )
}
