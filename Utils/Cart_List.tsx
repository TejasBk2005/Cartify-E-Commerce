import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "CART_ITEMS";

export const getCartItems = async () => {
  const data = await AsyncStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const addToCart = async (product: any) => {
  const cart = await getCartItems();

  const exists = cart.find((item: any) => item.id === product.id);
  if (exists) {
  }
};
