import { StyleSheet, TextStyle, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { ThemedText } from "./ThemedText";

type BackButtonProps = {
    text?: string;
    back?: boolean;
    textOnly?: boolean;
    textStyle?: TextStyle;
    onPress?: () => void;
    type?: "default" | "icon";
};

export default function BackButton({
    type = "default",
    text,
    textStyle,
    back = false,
    textOnly = false,
    onPress,
}: BackButtonProps) {
    const router = useRouter();
    const canGoBack = router.canGoBack();

    const handleBack = () => {
        if (onPress) return onPress();
        if (canGoBack) router.back();
    };

    if (textOnly && text) {
        return (
            <View style={[styles.textHeader, textStyle]}>
                <ThemedText type="defaultSemiBold" fontVariant="semiBold">
                    {text}
                </ThemedText>
            </View>
        );
    }

    if (!canGoBack && !text) return null;

    if (type === "icon") {
        return (
            <TouchableOpacity
                style={styles.iconButton}
                onPress={handleBack}
                activeOpacity={0.8}
            >
                <Ionicons name="arrow-back" size={22} color="black" />
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.row}>
            {back && (onPress || canGoBack) && (
                <TouchableOpacity onPress={handleBack} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            )}
            {text && (
                <ThemedText type="defaultSemiBold" fontVariant="semiBold">
                    {text}
                </ThemedText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        padding: 16,
        borderBottomColor: Colors.catskillWhite,
        borderBottomWidth: 1,
    },
    textHeader: {
        borderBottomColor: Colors.catskillWhite,
        borderBottomWidth: 1,
        paddingVertical: 16,
        backgroundColor: "white",
    },
    iconButton: {
        marginVertical: 8,
        backgroundColor: Colors.catskillWhite,
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
});
