import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

import {
  addToWishList,
  removeWishList,
  isInWishList,
} from "../Utils/Wish_List";

const productRenderItem = ({ item }: { item: any }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    checkWishList();
  }, []);

  const checkWishList = async () => {
    const exists = await isInWishList(item.id);
    setLiked(exists);
  };

  const toggleWishList = async (e: any) => {
    e.preventDefault();

    if (liked) {
      await removeWishList(item.id);
      setLiked(false);
    } else {
      await addToWishList(item);
      setLiked(true);
    }
  };

  return (
    <Link screen="ProductDetails" params={{ productId: item.id }}>
      <View>
        <Image source={{ uri: item.thumbnail }} />

        <TouchableOpacity onPress={toggleWishList}>
          <Ionicons
            name={liked ? "heart-outline" : "heart-outline"}
            size={22}
            color={liked ? "red" : "gray"}
          />
        </TouchableOpacity>

        <Text>{item.title}</Text>
      </View>
    </Link>
  );
};

export default productRenderItem;
