import { Tabs } from "expo-router";
import { View } from "react-native";
import { lvx } from "../../constants/Colors";
import { Entypo, Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => (
          <View
            style={{ flex: 1, backgroundColor: lvx.colors.secondary }}
          ></View>
        ),
        tabBarActiveTintColor: lvx.colors.primary,
        tabBarInactiveTintColor: lvx.colors.tertiary,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen name="property"></Tabs.Screen>
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;
