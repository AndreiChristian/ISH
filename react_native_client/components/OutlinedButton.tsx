import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { lvx } from "../constants/Colors";

interface ButtonProps {
  children: string;
  onPress?: () => {};
  mode?: "primary" | "warning" | "danger" | "success" | "info";
}

export const OutlinedButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  mode = "primary",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: lvx.colors[mode] }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: lvx.colors[mode] }]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
});
