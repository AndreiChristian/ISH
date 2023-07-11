import React from "react";
import { Drawer } from "expo-router/drawer";
import { View } from "../../components/Themed";
import { Text } from "react-native";
import { globalStyles } from "../../constants/GlobalStyles";

const settings = () => {
  return (
    <View style={globalStyles.fullView}>
      <Text style={globalStyles.h1}>Settings</Text>
    </View>
    // <Drawer />
  );
};

export default settings;
