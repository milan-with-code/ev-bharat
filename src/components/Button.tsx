import React from "react";
import {
    Pressable,
    TouchableOpacity,
    PressableProps,
    TouchableOpacityProps,
    StyleSheet,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

type CommonProps = {
    title: string;
    disabled?: boolean;
    variant?: "pressable" | "touchable";
    onPress?: () => void;
};

type ButtonProps = CommonProps & PressableProps & TouchableOpacityProps;

export function Button({
    title = "Continue",
    disabled,
    variant = "pressable",
    onPress,
    ...rest
}: ButtonProps) {
    const Component = variant === "touchable" ? TouchableOpacity : Pressable;

    return (
        <Component
            onPress={onPress}
            style={[
                styles.base,
                disabled && styles.disabled,
                (rest as any).style,
            ]}
            disabled={disabled}
            {...rest}
        >
            <ThemedText
                fontVariant="regular"
                type="defaultSemiBold"
                color="white"
            >
                {title}
            </ThemedText>
        </Component>
    );
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: Colors.primary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        paddingVertical: 12,
    },
    disabled: {
        opacity: 0.5,
    },
});
