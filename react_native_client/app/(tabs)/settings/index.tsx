import React from "react";

import { Text, View } from "react-native";

import { OutlinedButton } from "../../../components/OutlinedButton";
import { globalStyles } from "../../../constants/GlobalStyles";

const Settings = () => {
  //   const { toggleDrawer } = DrawerActions;

  return (
    <View style={globalStyles.fullView}>
      <Text style={globalStyles.h1}>Settings</Text>
      <OutlinedButton>Hello</OutlinedButton>
      {/* <OutlinedButton onPress={toggleDrawer}>Hello</OutlinedButton> */}
      {/* <Drawer /> */}
    </View>
  );
};

export default Settings;
