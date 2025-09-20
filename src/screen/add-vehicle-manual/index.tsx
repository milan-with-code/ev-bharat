import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { View } from "react-native";

export default function AddVehicleManual() {
    return (
        <ScreenWrapper>
            <BackButton back text="Vehicle Setup" />
            <View style={{ paddingHorizontal: 16 }}></View>
        </ScreenWrapper>
    );
}
