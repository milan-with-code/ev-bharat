import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import CheckCircle from "@assets/svg/tick-circle.svg";

type StepIndicatorProps = {
    steps: string[];
    currentStep: number;
    containerStyle?: ViewStyle;
    stepTextStyle?: TextStyle;
};

export default function StepIndicator({
    steps,
    currentStep,
    containerStyle,
    stepTextStyle,
}: StepIndicatorProps) {
    return (
        <View style={[styles.container, containerStyle]}>
            {steps.map((label, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;


                return (
                    <View style={styles.stepWrapper} key={index}>
                        <View
                            style={[
                                styles.base,
                                isActive && styles.active,
                                !isCompleted && styles.inactive,
                                isCompleted && !isActive && { backgroundColor: Colors.catskillWhite, borderRadius: 999 },
                            ]}
                        >
                            {isCompleted ? (
                                <CheckCircle />
                            ) : (
                                <ThemedText type="defaultSemiBold" fontVariant="semiBold" style={{ color: isActive ? Colors.primary : Colors.nutralsBlack }}>
                                    {stepNumber}
                                </ThemedText>
                            )}
                        </View>
                        <ThemedText style={stepTextStyle}>{label}</ThemedText>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 24,
    },
    stepWrapper: {
        alignItems: "center",
    },
    base: {
        width: 24,
        height: 24,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
    },
    active: {
        borderWidth: 1,
        backgroundColor: Colors.primaryTransparent,
        borderColor: Colors.primary,
    },
    inactive: {
        backgroundColor: Colors.catskillWhite,
    },
});
