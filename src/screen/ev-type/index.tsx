import { useState, ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Button } from "@/components/Button";
import { brandData, evTypeData, modalData, steps } from "@/mocks/data";
import SelectVehicleSection from "./components/select-vehicle-section";
import SelectModelSection from "./components/select-model-section";
import StepIndicator from "./components/step-indicator";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";

type StepConfig = {
    header: ReactNode;
    component: ReactNode;
};

type StepsConfig = Record<number, StepConfig>;

const { width: screenWidth } = Dimensions.get("window");

export default function EvType() {
    const router = useRouter()
    const [step, setStep] = useState(1);
    const [selectedEvType, setSelectedEvType] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedModal, setSelectedModal] = useState<string | null>(
        modalData[0]?.connectors ?? null
    );

    const goNext = () => {
        setStep((prev) => (prev < 3 ? prev + 1 : prev));
        if (step >= 3) {
            router.push('(setup)/vehicle-setup');
        }
    };
    const goBack = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

    const stepsConfig: StepsConfig = {
        1: {
            header: (
                <BackButton
                    text="Vehicle Type"
                    textOnly
                    textStyle={styles.headerTextOnly}
                />
            ),
            component: (
                <SelectVehicleSection
                    data={evTypeData}
                    title="Select Your EV Type"
                    selected={selectedEvType}
                    onSelect={setSelectedEvType}
                />
            ),
        },
        2: {
            header: (
                <BackButton text="Select Brand" back onPress={goBack} />
            ),
            component: (
                <SelectVehicleSection
                    data={brandData}
                    title="Select Your EV Brand"
                    selected={selectedBrand}
                    onSelect={setSelectedBrand}
                />
            ),
        },
        3: {
            header: (
                <BackButton text="Select Brand" back onPress={goBack} />
            ),
            component: (
                <SelectModelSection
                    data={modalData}
                    selected={selectedModal}
                    onSelect={setSelectedModal}
                />
            ),
        },
    };

    return (
        <ScreenWrapper style={styles.container}>
            <View style={step === 1 && styles.headerStepOne}>
                {stepsConfig[step].header}
            </View>

            <StepIndicator steps={steps} currentStep={step} />
            {stepsConfig[step].component}

            <View style={styles.footer}>
                <Button title={step === 3 ? (selectedModal || "Default") : "Continue"} onPress={goNext} />
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    headerStepOne: {
        marginHorizontal: -16,
    },
    headerTextOnly: {
        paddingHorizontal: 16,
    },
    footer: {
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
    },
});
