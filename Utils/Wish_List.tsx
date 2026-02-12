import AsyncStorage from "@react-native-async-storage/async-storage";

const WISHLISTKEY = "ProductList";

export const getWishList = async () => {
  const data = await AsyncStorage.getItem(WISHLISTKEY);
  return data ? JSON.parse(data) : [];
};

export const addToWishList = async (product: any) => {
  const wishlist = await getWishList();
  const exists = wishlist.find((item: any) => item.id === product.id);
  if (!exists) {
    const updated = [...wishlist, product];
    await AsyncStorage.setItem(WISHLISTKEY, JSON.stringify(updated));
  }
};

export const removeWishList = async (id: number) => {
  const wishlist = await getWishList();
  const updated = wishlist.filter((item: any) => item.id !== id);
  await AsyncStorage.setItem(WISHLISTKEY, JSON.stringify(updated));
};

export const isInWishList = async (id: number) => {
  const wishlist = await getWishList();
  return wishlist.some((item: any) => item.id === id);
};
