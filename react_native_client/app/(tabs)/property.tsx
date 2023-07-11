import { Pressable, StyleSheet, Text } from "react-native";
import { View } from "../../components/Themed";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Value } from "react-native-reanimated";
import { globalStyles } from "../../constants/GlobalStyles";

interface Property {
  id: number;
  image_url: string;
  name: string;
  region: string;
}

const List = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetch(
      "https://expressjs-postgres-production-3411.up.railway.app/api/property"
    )
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const ids = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
      {properties.map((property) => {
        return (
          <Link
            key={property.id}
            href={{
              pathname: "properties/[id]",
              params: { id: property.id },
            }}
            asChild
          >
            <Pressable>
              <Text style={globalStyles.h1}>{property.name}</Text>
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
