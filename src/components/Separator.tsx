import { Colors } from "@/constants/Colors";
import React from "react";
import { View, StyleSheet } from "react-native";

type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  color?: string;
  length?: number | string;
  style?: object;
};

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = StyleSheet.hairlineWidth,
  color = Colors.borderColor,
  length = "100%",
  style,
}) => {
  const isVertical = orientation === "vertical";

  return (
    <View
      style={[
        {
          backgroundColor: color,
          width: isVertical ? thickness : length,
          height: isVertical ? length : thickness,
        },
        style,
      ]}
    />
  );
};
