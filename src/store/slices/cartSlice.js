import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // ADD CART
        addCart(state, action) {
            const newItem = action.payload;
            const existing = state.cartItem.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existing) {
                state.cartItem.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existing.quantity++;
                existing.totalPrice = Number(existing.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItem.reduce(
                (total, item) => total + Number(item.quantity) * Number(item.price),
                0,
            );

            // console.log(state.totalAmount);
            // console.log(state.totalQuantity);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
