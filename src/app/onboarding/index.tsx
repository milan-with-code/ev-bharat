import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Button, View } from "react-native";

export default function OnboardingFirstScreen() {
    return (
        <View>
            <ThemedText>Onboarding Screen 1</ThemedText>
            <Link asChild push href="/onboarding/final">
                <Button title="Go To Screen 2" />
            </Link>
        </View>
    )
}
