import React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type StepIndicatorProps = {
    steps: string[];
    currentStep: number;
    containerStyle?: StyleProp<ViewStyle>;
    stepTextStyle?: StyleProp<TextStyle>;
};

const StepIndicator: React.FC<StepIndicatorProps> = ({
    steps,
    currentStep,
    containerStyle,
    stepTextStyle,
}) => {
    return (
        <View
            style={[
                { flexDirection: "row", justifyContent: "space-around", marginVertical: 20 },
                containerStyle,
            ]}
        >
            {steps.map((step, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;

                return (
                    <View key={index} style={{ alignItems: "center" }}>
                        <View
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: 18,
                                borderWidth: 2,
                                borderColor: isActive || isCompleted ? "#16a34a" : "#d1d5db",
                                backgroundColor: isCompleted ? "#16a34a" : "#fff",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {isCompleted ? (
                                <MaterialIcons name="check" size={20} color="#fff" />
                            ) : (
                                <Text
                                    style={[
                                        {
                                            fontWeight: "bold",
                                            color: isActive ? "#16a34a" : "#6b7280",
                                        },
                                        stepTextStyle,
                                    ]}
                                >
                                    {stepNumber}
                                </Text>
                            )}
                        </View>
                        <Text
                            style={[
                                {
                                    marginTop: 6,
                                    fontSize: 12,
                                    color: isActive ? "#16a34a" : "#6b7280",
                                },
                                stepTextStyle,
                            ]}
                        >
                            {step}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
};

export default StepIndicator;
