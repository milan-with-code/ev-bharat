import { ThemedText } from "@/components/ThemedText";
import { useAuthStore } from "@/utils/authStore";
import { Button, View } from "react-native";

export default function OnboardingFirstScreen() {
    const { completedOnboarding } = useAuthStore()
    return (
        <View>
            <ThemedText>Onboarding Final Screen</ThemedText>
            <Button title="Complete onboarding" onPress={completedOnboarding} />
        </View>
    )
}
