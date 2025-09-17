import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";
import { useAuthStore } from "@/utils/authStore";

export default function Page() {
    const { completedOnboarding } = useAuthStore()
    const router = useRouter();

    const handleContinue = () => {
        completedOnboarding();
        router.replace("(auth)");
    };

    return (
        <View style={styles.container}>
            <Image
                source="https://github.com/milan-with-code/ev-bharat/blob/feature/auth-flow/assets/Onboarding3.png?raw=true"
                cachePolicy="memory-disk"
                style={styles.backgroundImage}
                contentFit="cover"
            />
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <ThemedText color={Colors.primary} type="title" fontVariant="bold">
                        Charge. Park. Go.
                    </ThemedText>
                    <ThemedText color="white" style={styles.description}>
                        Manage all your EV needs — from charging to parking — in one smooth experience
                    </ThemedText>
                </View>
                <Button title="Get Started" variant="touchable" activeOpacity={0.9} onPress={handleContinue} />
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
