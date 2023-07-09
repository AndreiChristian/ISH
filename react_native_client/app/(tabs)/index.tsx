import { Button, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { useState } from "react";

export default function TabOneScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <View style={styles.actions}>
        <Button
          title="Increment"
          onPress={() => {
            setCount((count) => count + 1);
          }}
        ></Button>
        <Button
          title="Decrement"
          onPress={() => {
            setCount((count) => count - 1);
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
