import { Image } from "expo-image";
import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
    focused: boolean;
    activeUri: string;
    inactiveUri: string;
    size?: number;
};

export const TabBarIcon = ({ focused, activeUri, inactiveUri, size = 24 }: Props) => {
    const uri = focused ? activeUri : inactiveUri;

    return (
        <View style={{ width: size, height: size }}>
            <Image cachePolicy="memory-disk" source={{ uri }} style={styles.icon} contentFit="contain" />
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: "100%",
        height: "100%",
    },
});
