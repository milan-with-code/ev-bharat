import { StyleSheet, TextStyle, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { ThemedText } from "./ThemedText";

type BackButtonProps = {
    text?: string;
    back?: boolean;
    textOnly?: boolean;
    textStyle?: TextStyle,
    onPress?: () => void;
};

export default function BackButton({ text, textStyle, back = false, textOnly = false, onPress }: BackButtonProps) {
    const router = useRouter();
    const canGoBack = router.canGoBack();

    if (textOnly && text) {
        return (
            <View style={[styles.textHeader, textStyle]}>
                <ThemedText type="defaultSemiBold" fontVariant="semiBold">{text}</ThemedText>
            </View>
        );
    }

    if (!canGoBack && !text) return null;

    const handleBack = () => {
        if (onPress) {
            onPress();
        } else if (canGoBack) {
            router.back();
        }
    };

    return (
        <View style={styles.row}>
            {back && (onPress || canGoBack) && (
                <TouchableOpacity onPress={handleBack} activeOpacity={0.8} style={[styles.icon, { backgroundColor: text ? "transparent" : Colors.catskillWhite }]}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            )}
            {text && (
                <ThemedText type="defaultSemiBold" fontVariant="semiBold">{text}</ThemedText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        borderRadius: 24,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    textHeader: {
        paddingVertical: 16,
        borderBottomColor: Colors.catskillWhite,
        borderBottomWidth: 1,
    },
});
