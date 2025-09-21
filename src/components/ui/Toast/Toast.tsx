import React, { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet, View, Dimensions, Pressable } from "react-native";
import { ToastItemType } from "./toastStore";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";

const { width } = Dimensions.get("window");

type Props = {
    toast: ToastItemType;
    onClose: () => void;
};

export default function ToastItem({ toast, onClose }: Props) {
    const slideAnim = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        Animated.timing(slideAnim, { toValue: 0, duration: 250, useNativeDriver: true }).start();
        const timer = setTimeout(() => handleClose(), toast.duration || 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        Animated.timing(slideAnim, { toValue: -100, duration: 250, useNativeDriver: true }).start(onClose);
    };

    const bgColor = getColor(toast.type);
    const iconName = getIcon(toast.type);

    return (
        <Animated.View
            style={[styles.toast, { backgroundColor: bgColor, transform: [{ translateY: slideAnim }] }]}
        >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                <Ionicons name={iconName} size={24} color="#fff" />
                <View>
                    <ThemedText color="white">{toast.message}</ThemedText>
                </View>
            </View>

            <Pressable onPress={handleClose} >
                <Ionicons name="close" size={24} color="#fff" />
            </Pressable>
        </Animated.View>
    );
}

function getColor(type?: string) {
    switch (type) {
        case "success": return "#01E17B";
        case "error": return "#F04349";
        case "info": return "#4B85F5";
        case "warning": return "#FDCD0F";
        default: return "#FDCD0F";
    }
}

function getIcon(type?: string) {
    switch (type) {
        case "success": return "checkmark-circle-outline";
        case "error":
        case "info":
        case "warning":
        default:
            return "information-circle-outline";
    }
}

const styles = StyleSheet.create({
    toast: {
        flexDirection: "row",
        alignItems: "center",
        width: width - 32,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
        justifyContent: "space-between",
    },
    text: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
    },

});
