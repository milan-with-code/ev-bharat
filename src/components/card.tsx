import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";

interface CardProps {
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
}: CardProps) {
  return (
    <View style={[styles.container, style, { width, padding }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 12,
  },
});
