import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    totalQuantity: localStorage.getItem('totalQuantity') ? JSON.parse(localStorage.getItem('totalQuantity')) : 0,
    totalAmount: localStorage.getItem('totalAmount') ? JSON.parse(localStorage.getItem('totalAmount')) : 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // ADD CART
        addCart(state, action) {
            const newItem = action.payload;
            const existing = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existing) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existing.quantity++;
                existing.totalPrice = Number(existing.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.quantity) * Number(item.price),
                0,
            );

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
        },

        // ++++REMOVE++++
        removeCart(state, action) {
            const { id } = action.payload;
            const existing = state.cartItems.find((item) => item.id === id);
            state.totalQuantity--;

            if (existing.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            } else {
                existing.quantity--;
                existing.totalPrice = Number(existing.totalPrice) - Number(existing.price);
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0,
            );

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
        },

        // DELETE
        deleteCart(state, action) {
            const id = action.payload;
            const existing = state.cartItems.find((item) => item.id === id);
            if (existing) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.totalQuantity = state.totalQuantity - existing.quantity;
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.quantity) * Number(item.price),
                0,
            );

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
