export const cartTotal = (cartItems) => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price, 0);
