import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { lvx } from "../../constants/Colors";
import { useRoute } from "@react-navigation/native";
import { Link, useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

interface Property {
  id: number;
  image_url: string;
  name: string;
  region: string;
}

const Carousel = () => {
  const router = useRouter();

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

  const scrollX = useSharedValue(0);
  const ref = useRef(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const renderItem = ({ item }: { item: Property }) => {
    return (
      <Link
        style={{ flex: 1 }}
        // onPress={() => {
        //   router.push(`properties/${item.id}`);
        // }}
        href={`properties/${item.id}`}
      >
        <View style={styles.item}>
          <Image style={styles.image} source={{ uri: item.image_url }} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </View>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lvx.colors.secondary,
  },
  item: {
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "70%",
    resizeMode: "cover",
    borderRadius: 20,
    margin: 10,
    shadowColor: "#fff",
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  titleContainer: {
    position: "absolute",
    bottom: 20,
    backgroundColor: lvx.colors.secondary + "aa",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: lvx.colors.primary,
  },
});

export default Carousel;
