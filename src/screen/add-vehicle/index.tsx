import BackButton from "@/components/BackButton";
import { Button } from "@/components/Button";
import Card from "@/components/Card";
import ScreenWrapper from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import Car from "@assets/Car.png";
import { Image } from "expo-image";
import { Separator } from "@/components/Separator";
import PrimaryButton from "@/components/PrimaryButton";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { router, useRouter } from "expo-router";

const vehicleDetails = {
    modalName: "BMW I3",
    vehicleNumber: "GJ-12-DD-0000",
    VINNumber: "1HGMDF112211DD",
    year: "2020",
};

export default function AddVehicle() {
    return (
        <ScreenWrapper>
            <BackButton back text="Add Vehicle" />
            <View style={{ padding: 16, flex: 1, position: "relative" }}>
                <Card>
                    <View
                        style={{
                            height: 193,
                        }}
                    >
                        <Image
                            source={Car}
                            style={{
                                width: "100%",
                                height: "100%",
                                resizeMode: "cover",
                            }}
                        />
                    </View>
                    <View style={{ paddingTop: 40, paddingBottom: 16 }}>
                        <View>
                            <ThemedText type="labelMedium">
                                {vehicleDetails?.modalName}
                            </ThemedText>
                            <ThemedText>Model Name</ThemedText>
                        </View>
                        <Separator thickness={1} style={{ marginVertical: 12 }} />
                        <View>
                            <ThemedText type="labelMedium">
                                {vehicleDetails?.vehicleNumber}
                            </ThemedText>
                            <ThemedText>Registration Number</ThemedText>
                        </View>
                        <Separator thickness={1} style={{ marginVertical: 12 }} />
                        <View>
                            <ThemedText type="labelMedium">
                                {vehicleDetails?.VINNumber}
                            </ThemedText>
                            <ThemedText>VIN Number</ThemedText>
                        </View>
                        <Separator thickness={1} style={{ marginVertical: 12 }} />
                        <View>
                            <ThemedText type="labelMedium">{vehicleDetails?.year}</ThemedText>
                            <ThemedText>Year</ThemedText>
                        </View>
                    </View>
                    <PrimaryButton
                        title="Primary Car"
                        onPress={() => console.log("Next pressed")}
                        icon={
                            <Feather name="check-circle" size={24} color={Colors.primary} />
                        }
                        iconPosition="left"
                    />
                </Card>
                <View
                    style={{
                        backgroundColor: "white",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 16,
                        justifyContent: "center",
                    }}
                >
                    <Button
                        variant="touchable"
                        activeOpacity={0.7}
                        title="Add Vehicle"
                        onPress={() => router.push("location")}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
