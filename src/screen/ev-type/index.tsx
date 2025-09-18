import { useState, ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button } from "@/components/Button";
import { brandData, evTypeData, modalData, steps } from "@/mocks/data";
import SelectVehicleSection from "./components/select-vehicle-section";
import SelectModelSection from "./components/select-model-section";
import StepIndicator from "./components/step-indicator";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import VehicleNumberModal from "./components/vehicle-number-modal";

type StepConfig = {
    header: ReactNode;
    component: ReactNode;
};
type StepsConfig = Record<number, StepConfig>;

const { width: screenWidth } = Dimensions.get("window");

export default function EvType() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedEvType, setSelectedEvType] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedModal, setSelectedModal] = useState<string | null>(
        modalData[0]?.connectors ?? null
    );

    const goNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            setIsVisible(true);
        }
    };

    const goBack = () => setStep((prev) => Math.max(1, prev - 1));

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
            header: <BackButton text="Select Brand" back onPress={goBack} />,
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
            header: <BackButton text="Select Model" back onPress={goBack} />,
            component: (
                <SelectModelSection
                    data={modalData}
                    selected={selectedModal}
                    onSelect={setSelectedModal}
                />
            ),
        },
    };

    const isStepDisabled = () =>
        (step === 1 && !selectedEvType) ||
        (step === 2 && !selectedBrand) ||
        (step === 3 && !selectedModal);

    return (
        <SafeAreaView style={styles.container}>
            {stepsConfig[step].header}
            <View style={{ flex: 1 }}>
                <StepIndicator steps={steps} currentStep={step} />
                {stepsConfig[step].component}

                <View style={styles.footer}>
                    <Button
                        title={step === 3 ? selectedModal || "Submit" : "Continue"}
                        onPress={goNext}
                        disabled={isStepDisabled()}
                    />

                    {step === 1 && (
                        <Button
                            variant="touchable"
                            activeOpacity={0.7}
                            title="Enter Manually"
                            type="normal"
                            style={styles.manualButton}
                            onPress={() =>
                                router.push("vehicle/manually-vehicle-setup")
                            }
                        />
                    )}
                </View>
            </View>

            <VehicleNumberModal
                visible={isVisible}
                onClose={() => {
                    setIsVisible(false);
                    router.replace("vehicle/vehicle-added");
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: Colors.alabaster,
    },
    headerTextOnly: {
        paddingHorizontal: 16,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: screenWidth,
        padding: 16,
    },
    manualButton: {
        marginTop: 4,
    },
});
