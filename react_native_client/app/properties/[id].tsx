import { Stack, Tabs, useSearchParams } from "expo-router";
import { View } from "../../components/Themed";
import { Text } from "react-native";

const PropertiesIdPage = () => {
  const { id } = useSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `Property number ${id}`,
        }}
      ></Stack.Screen>

      <Text>{id}</Text>
    </View>
  );
};

export default PropertiesIdPage;
