import React, { useState } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  GestureResponderEvent,
} from "react-native";
import { StyledText } from "./styled-text";
import Button from "./button";

interface CardProps {
  visible: boolean;
  onClose: (event?: GestureResponderEvent) => void;
}

const Card: React.FC<CardProps> = ({ visible, onClose }) => {
  const options: string[] = [
    "Upload date: latest",
    "Upload date: oldest",
    "Most popular",
  ];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <StyledText style={styles.header}>Sort records by:</StyledText>

          <View style={{ marginTop: 40 }}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionContainer}
                onPress={() => handleSelect(option)}
              >
                <View style={styles.radioOuter}>
                  {selectedOption === option && (
                    <View style={styles.radioInner} />
                  )}
                </View>
                <StyledText>{option}</StyledText>
              </TouchableOpacity>
            ))}
          </View>

          <Button
            title="Confirm"
            onPress={onClose}
            style={{ marginTop: "auto" }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: Platform.OS === "web" ? "40%" : "80%",
    minHeight: 420,
    backgroundColor: "rgba(141, 153, 174, 1)",
    borderRadius: 10,
    padding: 20,
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    ...(Platform.OS === "web"
      ? ({ outlineStyle: "none" } as any) // 👈 type error workaround
      : {}),
  },
  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "rgba(43, 45, 66, 1)",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: 10,
    alignItems: "center",
  },
});

export default Card;
