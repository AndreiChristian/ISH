import { Stack, Tabs, useSearchParams } from "expo-router";
import { View } from "../../components/Themed";
import { Text } from "react-native";
import { globalStyles } from "../../constants/GlobalStyles";

const PropertiesIdPage = () => {
  const { id } = useSearchParams();

  return (
    <View style={globalStyles.fullView}>
      {/* <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `Property number ${id}`,
        }}
      ></Stack.Screen> */}

      <Text style={globalStyles.h1}>{id}</Text>
      <Text>HELLO</Text>
    </View>
  );
};

export default PropertiesIdPage;
