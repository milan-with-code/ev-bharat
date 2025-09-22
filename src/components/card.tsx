import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View, ViewProps, ViewStyle } from "react-native";

interface CommonProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  width?: number | string;
  padding?: number;
  variant?: "view" | "touchable";
}

type CardProps = CommonProps & ViewProps & TouchableOpacityProps;

export default function Card({
  children,
  style,
  width = "100%",
  variant = "view",
  padding = 16,
  ...rest
}: CardProps) {
  const Component = variant === "touchable" ? TouchableOpacity : View;
  const cardStyle: ViewStyle = {
    width: width as ViewStyle["width"],
    padding,
  };
  return (
    <Component
      style={[styles.container, cardStyle, style]} {...rest}
      {...rest}>
      {children}
    </Component>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 12,
  },
});
