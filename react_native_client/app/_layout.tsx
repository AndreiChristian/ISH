import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "../components/Themed";

const StackLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerTitle:"",
          headerBackground: () => {
            return <View style={{ flex: 1, backgroundColor: "black" }}></View>;
          },
        }}
      >
        <Stack.Screen name="(tabs)"></Stack.Screen>
      </Stack>
    </SafeAreaProvider>
  );
};

export default StackLayout;
