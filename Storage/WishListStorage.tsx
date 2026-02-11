import AsyncStorage from "@react-native-async-storage/async-storage";

const WISHLIST_KEY = "WishListList";

const getWishlist = async () => {
  try {
    const Liked = await AsyncStorage.getItem(WISHLIST_KEY);
    return Liked != null ? JSON.parse(Liked) : [];
  } catch (error) {
    console.error("Failed to fetch wishlist", error);
    return [];
  }
};

const saveWishlist = async (wishlistArray: any) => {
  try {
    const liked = JSON.stringify(wishlistArray);
    await AsyncStorage.setItem(WISHLIST_KEY, liked);
  } catch (error) {
    console.error("Failed to save wishlist", error);
  }
};

export const addProductToWishlist = async (product: any) => {
  let wishlist = await getWishlist();
  if (!wishlist.some((item: any) => item.id === product.id)) {
    wishlist = [...wishlist, product];
    await saveWishlist(wishlist);
  }
};

export const removeProductFromWishlist = async (productId: any) => {
  let wishlist = await getWishlist();
  wishlist = wishlist.filter((item: any) => item.id !== productId);
  await saveWishlist(wishlist);
};
