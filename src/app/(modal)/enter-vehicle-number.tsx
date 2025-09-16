import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function EnterVehicleNumber() {
    const [vehicleNumber, setVehicleNumber] = useState("");
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 12 }}>
                Enter your Vehicle Number
            </Text>
            <TextInput
                value={vehicleNumber}
                onChangeText={setVehicleNumber}
                placeholder="e.g. MH12AB1234"
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 10,
                    borderRadius: 8,
                    marginBottom: 20,
                }}
            />
            <Button
                title="Save & Continue"
                onPress={() => {
                    router.back();
                }}
            />
        </View>
    );
}
