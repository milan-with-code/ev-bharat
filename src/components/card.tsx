import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface CardProps extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: object;
  width?: number | string;
  padding?: number;
}
export default function Card({
  children,
  style,
  width = "100%",
  padding = 16,
  ...rest
}: CardProps) {
  return (
    <TouchableOpacity style={[styles.container, style, { width, padding }]} {...rest} activeOpacity={0.9}>
      {children}
    </TouchableOpacity>
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
