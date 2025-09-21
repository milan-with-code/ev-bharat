import React from "react";
import { View, StyleSheet } from "react-native";
import { useToastStore } from "./toastStore";
import ToastItem from "./Toast";

export default function ToastContainer() {
    const { toasts, removeToast } = useToastStore();

    return (
        <View style={styles.container} pointerEvents="box-none">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 50,
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 9999,
    },
});
