import React from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { FontType, FontVariant, ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

type BadgeVariant = "default" | "secondary" | "outline" | "success" | "destructive";

type BadgeProps = {
    variant?: BadgeVariant;
    children: React.ReactNode;
    onPress?: () => void;
    color?: string;
    fontVariant?: FontVariant;
    type?: FontType;
    style?: ViewStyle;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
};

export function Badge({
    style,
    variant = "default",
    children,
    onPress,
    color = Colors.primary,
    fontVariant = "semiBold",
    type = "default",
    icon,
    iconPosition = "left",
}: BadgeProps) {
    const { container } = badgeVariants[variant];

    return (
        <Pressable
            style={[styles.base, container, style]}
            disabled={!onPress}
            onPress={onPress}
        >
            <View style={styles.content}>
                {icon && iconPosition === "left" && <View style={styles.icon}>{icon}</View>}
                <ThemedText type={type} fontVariant={fontVariant} color={color}>
                    {children}
                </ThemedText>
                {icon && iconPosition === "right" && <View style={styles.icon}>{icon}</View>}
            </View>
        </Pressable>
    );
}

const badgeVariants: Record<BadgeVariant, { container: ViewStyle }> = {
    default: {
        container: { backgroundColor: Colors.primaryTransparent },
    },
    secondary: {
        container: { backgroundColor: Colors.catskillWhite },
    },
    outline: {
        container: { backgroundColor: "transparent", borderWidth: 1, borderColor: Colors.primary },
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
    content: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    icon: {
        marginHorizontal: 2,
    },
});
