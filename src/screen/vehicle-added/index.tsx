import { StyleSheet, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import VehicleAdd from "@assets/svg/vehicle-added.svg";
import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/utils/authStore";

export default function VehicleAdded() {
    const router = useRouter();
    const { completedVehicleSetup } = useAuthStore()

    return (
        <ScreenWrapper style={styles.container}>
            <View style={styles.textWrapper}>
                <ThemedText style={styles.title}>
                    Vehicle Added Successfully
                </ThemedText>
                <ThemedText style={styles.subtitle} color={Colors.mako} type="defaultSemiBold">
                    Your BMW iX1 has been added. Let’s help you find a nearby charging or
                    parking spot.
                </ThemedText>
            </View>

            <VehicleAdd style={styles.image} />

            <View style={styles.bottomWrapper}>
                <Button
                    title="Continue"
                    onPress={() => {
                        completedVehicleSetup()
                        router.replace("(main)/(tabs)/home")
                    }}
                />
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        position: "relative",
    },
    textWrapper: {
        paddingVertical: 24,
        marginTop: 24,
    },
    title: {
        fontSize: 24,
        fontFamily: "Outfit_700Bold",
        lineHeight: 32,
        color: Colors.nutralsBlack,
        textAlign: "center",
    },
    subtitle: {
        paddingTop: 8,
        textAlign: "center",
    },
    image: {
        marginTop: 76,
        alignSelf: "center",
    },
    bottomWrapper: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        justifyContent: "center",
    },
});
