import { Pressable, StyleSheet, Text } from "react-native";
import { View } from "../../components/Themed";
import { Link, useRouter } from "expo-router";

const List = () => {
  const router = useRouter();

  const ids = [1, 2, 3];

  return (
    <View style={styles.container}>
      {ids.map((id) => {
        return (
          <Link
            key={id}
            href={{
              pathname: "properties/[id]",
              params: { id: id },
            }}
            asChild
          >
            <Pressable>
              <Text style={styles.link}>{id}</Text>
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
  },
  link: {
    fontSize: 40,
  },
});

export default List;
