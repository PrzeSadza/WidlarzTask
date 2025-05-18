import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  Platform,
} from "react-native";
import StyledText from "./styled-text";

interface BtnProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<BtnProps> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <StyledText style={[styles.buttonText, textStyle]}>{title}</StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(43, 45, 66, 1)",
    padding: 15,
    borderRadius: 8,
    width: Platform.OS === "web" ? "20%" : "90%",
    maxWidth: Platform.OS === "web" ? "20%" : "100%",
    alignSelf: "center",
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default Button;
