import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  GestureResponderEvent,
} from "react-native";

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
          <Text style={styles.header}>Sort records by:</Text>

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
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
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
    width: Platform.OS === 'web' ? '40%' : '80%',
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
    color: "white",
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
  optionText: {
    fontSize: 16,
    color: "white",
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Card;
