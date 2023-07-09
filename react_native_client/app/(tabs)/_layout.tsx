import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tabs.Screen name="home"></Tabs.Screen>
      <Tabs.Screen name="property"></Tabs.Screen>
      <Tabs.Screen
        name="properties/[id]"
        options={{
          href: null,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;
