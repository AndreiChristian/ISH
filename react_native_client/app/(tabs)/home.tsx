import { StyleSheet, Text } from "react-native";
import { View } from "../../components/Themed";
import { globalStyles } from "../../constants/GlobalStyles";

const Home = () => {
  return (
    <View style={globalStyles.fullView}>
      <Text style={globalStyles.h1}>Home</Text>
    </View>
  );
};

export default Home;
