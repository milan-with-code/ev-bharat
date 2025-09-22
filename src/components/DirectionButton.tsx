import React from "react";
import { Pressable, ViewStyle } from "react-native";
import Direction from "@assets/svg/bold.svg"
import { Colors } from "@/constants/Colors";

type DirectionButtonProps = {
    size?: number;
    backgroundColor?: string;
    onPress?: () => void;
    style?: ViewStyle;
};

const DirectionButton = ({
    size = 32,
    backgroundColor = Colors.primaryTransparent,
    onPress,
    style,
}: DirectionButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                {
                    width: size,
                    height: size,
                    borderRadius: 100,
                    backgroundColor,
                    alignItems: "center",
                    justifyContent: "center",
                },
                style,
            ]}
        >
            <Direction />
        </Pressable>
    );
};

export default DirectionButton;
