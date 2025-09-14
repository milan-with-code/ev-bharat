import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { ThemedText } from "./ThemedText";

interface BackButtonType {
    style?: ViewStyle;
    text?: string;
    arrayButton?: boolean,
    textComponent?: boolean,
    textStyle?: TextStyle
}

export default function BackButton({ textStyle, style, text, textComponent = false, arrayButton = false }: BackButtonType) {
    const router = useRouter();
    const canGoBack = router.canGoBack();

    if (!canGoBack && !text) return null;

    const ArrowButton = (
        <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.8}
            style={[styles.container, style, { backgroundColor: text ? "transparent" : Colors.catskillWhite }]}
        >
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
    );

    const TextComponent =
        <ThemedText type="defaultSemiBold" fontVariant="semiBold">
            {text}
        </ThemedText>

    if (textComponent && text) return <View style={[{ paddingVertical: 16, borderBottomColor: Colors.catskillWhite, borderBottomWidth: 1, }, textStyle]}>{TextComponent}</View>;
    if (arrayButton) return ArrowButton;

    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, }}>
            {ArrowButton}
            {TextComponent}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        borderRadius: 24,
    },
});
