import React from "react";
import { Pressable, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { FontType, FontVariant, ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

type BadgeVariant = "default" | "secondary" | "outline" | "success" | "destructive";


type BadgeProps = {
    variant?: BadgeVariant;
    children: React.ReactNode;
    onPress?: () => void;
    color?: string
    fontVariant?: FontVariant
    type?: FontType,
    style?: ViewStyle
};

export function Badge({ style, variant = "default", children, onPress, color = Colors.primary, fontVariant = "semiBold", type = "default" }: BadgeProps) {
    const { container } = badgeVariants[variant];

    return (
        <Pressable
            style={[styles.base, container, style]}
            disabled={!onPress}
            onPress={onPress}
        >
            <ThemedText type={type} fontVariant={fontVariant} color={color}>{children}</ThemedText>
        </Pressable>
    );
}

const badgeVariants: Record<
    BadgeVariant,
    { container: ViewStyle; }
> = {
    default: {
        container: { backgroundColor: Colors.primaryTransparent },
    },
    secondary: {
        container: { backgroundColor: "#E5E7EB" },
    },
    outline: {
        container: { backgroundColor: "transparent" },
    },
    success: {
        container: { backgroundColor: "#22C55E" },
    },
    destructive: {
        container: { backgroundColor: "#EF4444" },
    },
};

const styles = StyleSheet.create({
    base: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
    },
});
