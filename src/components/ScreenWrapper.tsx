import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenWrapperProps = {
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
};

export default function ScreenWrapper({ children, style }: ScreenWrapperProps) {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.alabaster,
    },
});
