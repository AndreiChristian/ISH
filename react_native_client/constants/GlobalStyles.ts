import { StyleSheet } from "react-native";
import { lvx } from "./Colors";

export const globalStyles = StyleSheet.create({
  h1: {
    fontSize: 50,
    color: "white",
  },
  h2: {
    fontSize: 45,
    color: "white",
  },

  fullView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lvx.colors.secondary,
  },
});
