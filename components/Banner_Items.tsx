import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ImageSlider from "react-native-image-slider";

const width = Dimensions.get("window").width;

const BannerData = [
  require("../assets/Banner1.jpg"),
  require("../assets/Banner2.jpg"),
  require("../assets/Banner3.jpg"),
  require("../assets/Banner4.jpg"),
  require("../assets/Banner5.jpg"),
  require("../assets/Banner6.jpg"),
];

const CarouselBanner = () => {
  return (
    <View style={[styles.banner, { width }]}>
      <ImageSlider
        style={styles.bannercard}
        autoPlayWithInterval={6000}
        loop
        images={BannerData}
      ></ImageSlider>
    </View>
  );
};

export default CarouselBanner;

const styles = StyleSheet.create({
  banner: {
    flex: 1,

    justifyContent: "center",
    width: width,
    height: 200,
    left: 50,
    marginBottom: 10,
  },
  bannercard: {
    height: 200,
    width: 400,
    borderRadius: 15,
    right: 25,
  },
});
