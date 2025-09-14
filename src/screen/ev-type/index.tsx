import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Dimensions, StyleSheet, View } from "react-native";
import StepIndicator from "./components/StepIndicator";
import { useState } from "react";
import { Button } from "@/components/Button";
import { brandData, evTypeData, steps } from "@/mocks/data";
import SelectVehicleSection from "./components/select-vehicle-section";

const selectEvType = {
    title: "Select Your EV Type",
    data: evTypeData
}

const selectEvBrand = {
    title: "Select Your EV Brand",
    data: brandData
}

const { width: screenWidth } = Dimensions.get("window");

export default function EvType() {
    const [step, setStep] = useState(1);
    const [selectedEvType, setSelectedEvType] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

    const renderElement = (number: number) => {
        switch (number) {
            case 1:
                return <SelectVehicleSection data={selectEvType} onSelect={setSelectedEvType} selected={selectedEvType} />
            case 2:
                return <SelectVehicleSection data={selectEvBrand} onSelect={setSelectedBrand} selected={selectedBrand} />
            default:
                break;
        }
    }
    return (
        <ScreenWrapper style={styles.container}>
            <View style={{ marginHorizontal: -16 }}>
                <BackButton textComponent text="Vehicle Type" textStyle={{ paddingHorizontal: 16 }} />
            </View>
            <StepIndicator steps={steps} currentStep={step} />
            {renderElement(step)}
            <View style={{
                position: "absolute",
                bottom: 0,
                width: screenWidth,
                padding: 16,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.16,
                shadowRadius: 8,
                elevation: 5,
            }}>
                <Button title="Continue" onPress={() => setStep((prev) => prev < 3 ? prev + 1 : prev)} />
            </View>
        </ScreenWrapper >
    )
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
