import React from "react";
import { Text, TextProps, StyleSheet, Platform } from "react-native";

const StyledText: React.FC<TextProps> = ({ style, ...props }) => {
  return <Text {...props} style={[styles.default, style]} />;
};

const styles = StyleSheet.create({
  default: {
    fontFamily:
      Platform.OS === "web" ? "Poppins, sans-serif" : "Poppins-Regular",
    fontSize: 16,
    color: "white",
  },
});

export default StyledText