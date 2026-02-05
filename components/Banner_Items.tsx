import React from "react";
import { View, StyleSheet } from "react-native";
import ImageSlider from "react-native-image-slider";

const BannerData = [
  require("../assets/Banner1.jpg"),
  require("../assets/Banner2.jpg"),
  require("../assets/Banner3.jpg"),
  require("../assets/Banner4.jpg"),
];

const CarouselBanner = () => {
  return (
    <View style={styles.banner}>
      <ImageSlider
        style={styles.bannercard}
        autoPlayWithInterval={7000}
        images={BannerData}
      ></ImageSlider>
    </View>
  );
};

export default CarouselBanner;

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    width: 500,
  },
  bannercard: {
    height: 200,
    width: 390,
    borderRadius: 15,
    right: 25,
  },
});
