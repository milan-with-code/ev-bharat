import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
} from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
};

const PrimaryButton: React.FC<Props> = ({
    title,
    onPress,
    icon,
    iconPosition = "left",
    style,
    textStyle,
    disabled = false,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabled, style]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.9}
        >
            {icon && iconPosition === "left" && icon}
            <Text style={[styles.text, textStyle]}>{title}</Text>
            {icon && iconPosition === "right" && icon}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primaryTransparent,
        paddingVertical: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.primary,
        gap: 8,
    },
    text: {
        color: Colors.primary,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Outfit_500Medium",
        fontWeight: "500",
    },
    icon: {
        marginHorizontal: 6,
    },
    disabled: {
        backgroundColor: "#aaa",
    },
});

export default PrimaryButton;
