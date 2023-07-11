import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home"></Tabs.Screen>
      <Tabs.Screen name="property"></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;
