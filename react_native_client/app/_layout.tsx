import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "../components/Themed";
import { SafeAreaView } from "react-native";

const StackLayout = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: "transparent" }}>
      <Stack
        screenOptions={{
          headerTitle: "Properties",
          headerBackground: () => {
            return <View style={{ flex: 1 }}></View>;
          },
        }}
      >
        <Stack.Screen name="(tabs)"></Stack.Screen>
      </Stack>
    </SafeAreaProvider>
  );
};

export default StackLayout;
