import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../constants/GlobalStyles";

const Home = () => {
  return (
    <View style={globalStyles.fullView}>
      <Text style={globalStyles.h1} >Hello</Text>
    </View>
  );
};

export default Home;
