import React from "react";
import {
    Pressable,
    TouchableOpacity,
    PressableProps,
    TouchableOpacityProps,
    StyleSheet,
    ViewStyle,
    ActivityIndicator,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

type CommonProps = {
    title: string;
    disabled?: boolean;
    variant?: "pressable" | "touchable";
    onPress?: () => void;
    type?: "normal" | "edit",
    style?: ViewStyle,
    isLoading?: boolean
};

type ButtonProps = CommonProps & PressableProps & TouchableOpacityProps;

export function Button({
    title = "Continue",
    disabled,
    variant = "pressable",
    onPress,
    type = "edit",
    style,
    isLoading,
    ...rest
}: ButtonProps) {
    const Component = variant === "touchable" ? TouchableOpacity : Pressable;

    const isDisabled = isLoading || disabled;

    return (
        <Component
            onPress={onPress}
            style={[
                styles.base,
                type === "normal" && styles.normal,
                disabled && styles.disabled,
                style
            ]}
            disabled={isDisabled}
            {...rest}
        >
            {
                isLoading ? <ActivityIndicator size="small" color={type === "normal" ? Colors.primary : "white"} /> :
                    <ThemedText
                        fontVariant="regular"
                        type="defaultSemiBold"
                        color={type === "normal" ? Colors.primary : "white"}
                    >
                        {title}
                    </ThemedText>
            }
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
        height: 48
    },
    normal: {
        backgroundColor: "transparent"
    },
    disabled: {
        opacity: 0.5,
    },
});
