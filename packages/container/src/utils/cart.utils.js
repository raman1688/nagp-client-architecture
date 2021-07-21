export const addItemToCart = (cartItems, cartItemsToAdd) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id);

    if(existingCartItem) {
        return cartItems.map((item) => ({...item, quantity: item.quantity +1}))
    }
    return [...cartItems, {...cartItemsToAdd, quantity: 1}];

} 

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    if(cartItemToRemove.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((item) => item.id === cartItemToRemove.id? {...item, quantity: item.quantity -1} : item)
}

export const getCartItemsCount = (cartItems) => {
    return cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0);
}
