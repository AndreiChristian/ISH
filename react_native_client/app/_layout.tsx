import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const StackLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          
        }}
      >
        <Stack.Screen name="(tabs)"></Stack.Screen>
      </Stack>
    </SafeAreaProvider>
  );
};

export default StackLayout;
