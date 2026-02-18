import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_DATA = "ProductDetails";

export const getCartItems = async () => {
  const data = await AsyncStorage.getItem(CART_DATA);
  return data ? JSON.parse(data) : [];
};

export const addToCart = async (product: any) => {
  const cart = await getCartItems();

  const exists = cart.find((item: any) => item.id === product.id);

  if (exists) {
    const updated = cart.map((item: any) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    await AsyncStorage.setItem(CART_DATA, JSON.stringify(updated));
  } else {
    const updated = [...cart, { ...product, quantity: 1 }];
    await AsyncStorage.setItem(CART_DATA, JSON.stringify(updated));
  }
};
export const increaseQty = async (id: number) => {
  const cart = await getCartItems();
  const updated = cart.map((item: any) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
  );
  await AsyncStorage.setItem(CART_DATA, JSON.stringify(updated));
};

export const decreaseQty = async (id: number) => {
  const cart = await getCartItems();
  const updated = cart
    .map((item: any) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
    )
    .filter((item: any) => item.quantity > 0);
  await AsyncStorage.setItem(CART_DATA, JSON.stringify(updated));
};

export const removeFromCart = async (id: number) => {
  const cart = await getCartItems();

  const updated = cart.filter((item: any) => item.id !== id);

  await AsyncStorage.setItem(CART_DATA, JSON.stringify(updated));
};
