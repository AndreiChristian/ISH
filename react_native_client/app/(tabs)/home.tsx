import { StyleSheet, Text } from "react-native";
import { View } from "../../components/Themed";
import { globalStyles } from "../../constants/GlobalStyles";
import { OutlinedButton } from "../../components/OutlinedButton";
import { FilledButton } from "../../components/FilledButton";

const Home = () => {
  return (
    <View style={globalStyles.fullView}>
      <Text style={globalStyles.h1}>Home</Text>
      <OutlinedButton mode="primary">Helo</OutlinedButton>
      <OutlinedButton mode="danger">Helo</OutlinedButton>
      <OutlinedButton mode="success">Helo</OutlinedButton>
      <OutlinedButton mode="info">Helo</OutlinedButton>

      <FilledButton mode="primary">Hello</FilledButton>
      <FilledButton mode="danger">Hello</FilledButton>
      <FilledButton mode="success">Hello</FilledButton>
      <FilledButton mode="info">Hello</FilledButton>
    </View>
  );
};

export default Home;
