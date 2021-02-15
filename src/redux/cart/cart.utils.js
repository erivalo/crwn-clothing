export const addCartItem = (cartItems, newCartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newCartItem.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
};
