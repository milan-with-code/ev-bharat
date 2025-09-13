import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useAuthStore } from "@/utils/authStore";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";
import Onboarding from "@assets/Onboarding2.png";

export default function Page() {
    const { completedOnboarding } = useAuthStore();
    const router = useRouter();

    const handleSkip = () => {
        completedOnboarding();
        router.replace("(auth)");
    };

    const handleContinue = () => {
        router.replace("onboarding/final");
    };

    return (
        <View style={styles.container}>
            <Image source={Onboarding} style={styles.backgroundImage} contentFit="cover" />

            <View style={styles.skipButtonContainer}>
                <Button
                    title="Skip"
                    variant="touchable"
                    activeOpacity={0.9}
                    style={styles.skipButton}
                    onPress={handleSkip}
                />
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <ThemedText color={Colors.primary} type="title" fontVariant="bold">
                        Find Parking, Stress-Free
                    </ThemedText>
                    <ThemedText color="white" style={styles.description}>
                        Discover and reserve safe parking spots at your destination with ease.
                    </ThemedText>
                </View>
                <Button title="Continue" variant="touchable" activeOpacity={0.9} onPress={handleContinue} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1 },
    backgroundImage: { flex: 1, width: "100%", height: "100%" },
    skipButtonContainer: {
        position: "absolute",
        right: 0,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    skipButton: {
        backgroundColor: "transparent",
        paddingVertical: 12,
    },
    contentContainer: {
        position: "absolute",
        bottom: 40,
        left: 16,
        right: 16,
    },
    textContainer: {
        marginBottom: 32,
    },
    description: {
        paddingTop: 12,
    },
});
