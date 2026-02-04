import { View, StyleSheet, Text, ScrollView } from "react-native";

import ProductList from "../components/Product_Lists";

const ShopScreen = () => {
  return <ProductList />;
};
export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 10,
  },
});
