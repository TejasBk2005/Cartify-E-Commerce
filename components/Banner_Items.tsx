import React from "react";
import { View, StyleSheet } from "react-native";
import ImageSlider from "react-native-image-slider";

const BannerData = [
  "https://www.shutterstock.com/image-vector/beauty-make-banner-template-face-260nw-1926318266.jpg",
  "https://www.shutterstock.com/image-vector/fragrance-advertising-banner-template-glass-260nw-2147941849.jpg",
  "https://img.freepik.com/free-vector/grocery-store-sale-banner-template_23-2151089846.jpg",
  "https://marketplace.canva.com/EAGHC5NUD-Q/1/0/1600w/canva-black-and-white-modern-fashion-sale-banner-landscape-n7GVeIDu0Tg.jpg",
  "https://img.freepik.com/premium-vector/men-fashion-collection-social-media-banner-template-design_596383-181.jpg",
];

const CarouselBanner = () => {
  return (
    <View style={styles.banner}>
      <ImageSlider
        style={styles.bannercard}
        autoPlayWithInterval={6000}
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
