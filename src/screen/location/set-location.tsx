import { View, StyleSheet } from "react-native";
import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import LocationGroup from "@assets/svg/LocationGroup.svg";
import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { useCurrentLocation } from "@/hooks/useCurrentLocation";
import { useLocationStore } from "@/store/useLocationStore";

export default function SetLocation() {
    const { loading, getCurrentLocation } = useCurrentLocation();
    const { setLocation } = useLocationStore()
    const router = useRouter();

    async function handleGetLocation() {
        const location = await getCurrentLocation();
        if (location) {
            setLocation(location)
            router.replace("(setup)/ev-type")
        }
    }

    return (
        <ScreenWrapper style={styles.container}>
            <View style={{ marginHorizontal: -16 }}>
                <BackButton textComponent text="Set Location" textStyle={{ paddingHorizontal: 16 }} />
            </View>

            <View style={styles.textContainer}>
                <ThemedText style={styles.heading}>
                    Allow Location
                </ThemedText>
                <ThemedText style={styles.subText} color={Colors.mako} type="defaultSemiBold">
                    Allow location access to show EV charging stations & parking spots near you
                </ThemedText>
            </View>

            <LocationGroup style={styles.image} />

            <View style={styles.buttonContainer}>
                <Button
                    variant="touchable"
                    activeOpacity={0.7}
                    title="Device Location"
                    onPress={handleGetLocation}
                    isLoading={loading}
                />
                <Button
                    variant="touchable"
                    activeOpacity={0.7}
                    title="Enter Manually"
                    type="normal"
                    style={styles.manualButton}
                    onPress={() => router.push("(setup)/manual-location")}
                />
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    textContainer: {
        marginVertical: 24,
        paddingHorizontal: 16,
    },
    heading: {
        paddingBottom: 8,
        textAlign: "center",
        fontSize: 24,
        lineHeight: 32,
        fontFamily: "Outfit_700Bold",
    },
    subText: {
        textAlign: "center",
    },
    image: {
        marginTop: 48,
        alignSelf: "center",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 40,
        width: "100%",
        paddingVertical: 16,
        alignSelf: "center",
    },
    manualButton: {
        marginTop: 4,
    },
});
