import { addItemToCart, removeItemFromCart, getCartItemsCount } from './cart.utils';

describe('cart utils', () => {

    test('should add items to cart', () => {
        const initialCartItems = [{
            id: 1,
            imageUrl: "test1.png",
            name: "Test Product1",
            price: 35,
            quantity: 1,
        }];
        const cartItemToAdd = { 
            id: 2,
            imageUrl: "test2.png",
            name: "Test Product 2",
            price: 18
        };
        const repeatCartItemToAdd = { 
            id: 1,
            imageUrl: "test1.png",
            name: "Test Product 1",
            price: 35
        };
        expect(addItemToCart(initialCartItems, cartItemToAdd)).toEqual([
            {
                id: 1,
                imageUrl: "test1.png",
                name: "Test Product1",
                price: 35,
                quantity: 1,
            },
            { 
                id: 2,
                imageUrl: "test2.png",
                name: "Test Product 2",
                price: 18,
                quantity: 1,
            }
        ]);
        expect(addItemToCart(initialCartItems, repeatCartItemToAdd)).toEqual([
            {
                id: 1,
                imageUrl: "test1.png",
                name: "Test Product1",
                price: 35,
                quantity: 2
            }
        ]);
    });

    test('should remove items from cart', () => {
        const initialCartItems = [{
            id: 1,
            imageUrl: "test1.png",
            name: "Test Product1",
            price: 35,
            quantity: 2,
        },
        { 
            id: 2,
            imageUrl: "test2.png",
            name: "Test Product 2",
            price: 18,
            quantity: 1,
        }];
        const singleCartItemMock = [{
            id: 1,
            imageUrl: "test1.png",
            name: "Test Product1",
            price: 35,
            quantity: 1,
        }];
        const cartItemToRemove = {
            id: 1,
            imageUrl: "test1.png",
            name: "Test Product1",
            price: 35,
            quantity: 2,
        };
        const expectedCartItems = [{
            id: 1,
            imageUrl: "test1.png",
            name: "Test Product1",
            price: 35,
            quantity: 1,
        },
        { 
            id: 2,
            imageUrl: "test2.png",
            name: "Test Product 2",
            price: 18,
            quantity: 1,
        }];
        expect(removeItemFromCart(initialCartItems, cartItemToRemove)).toEqual(expectedCartItems);
        expect(removeItemFromCart(singleCartItemMock, singleCartItemMock[0])).toEqual([]);
    });

    test('should get count of items in the cart', () => {
        const initialCartItems = [
            {
                id: 1,
                imageUrl: "test1.png",
                name: "Test Product1",
                price: 35,
                quantity: 2,
            },
            { 
                id: 2,
                imageUrl: "test2.png",
                name: "Test Product 2",
                price: 18,
                quantity: 1,
            }
        ]
        expect(getCartItemsCount(initialCartItems)).toBe(3);
    });
});
