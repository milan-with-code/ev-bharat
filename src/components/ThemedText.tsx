import { StyleSheet, Text, type TextProps } from "react-native";

import { Colors } from "@/constants/Colors";

export type FontVariant = "regular" | "semiBold" | "bold";
export type FontType = "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "label"
    | "labelMedium";

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    color?: string,
    type?: FontType,
    fontVariant?: FontVariant
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    type = "default",
    color = Colors.nutralsBlack,
    fontVariant = "regular",
    ...rest
}: ThemedTextProps) {
    return (
        <Text
            style={[
                { color },
                type === "default" ? styles.default : undefined,
                type === "title" ? styles.title : undefined,
                type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
                type === "subtitle" ? styles.subtitle : undefined,
                type === "link" ? styles.link : undefined,
                type === "label" ? styles.label : undefined,
                type === "labelMedium" ? styles.labelMedium : undefined,
                fontVariantStyles[fontVariant],
                style,
            ]}
            {...rest}
        />
    );
}

const fontVariantStyles = StyleSheet.create({
    regular: {
        fontFamily: "Outfit_400Regular",
        fontWeight: "400",
    },
    semiBold: {
        fontFamily: "Outfit_600SemiBold",
        fontWeight: "600",
    },
    bold: {
        fontFamily: "Outfit_700Bold",
    },
});

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    title: {
        fontSize: 32,
        lineHeight: 40,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Outfit_600SemiBold",
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: "#0a7ea4",
    },
    label: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    labelMedium: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
    },
});
