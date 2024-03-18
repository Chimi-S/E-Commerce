import {createSlice} from "@reduxjs/toolkit";

import axios from "axios";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        cartItems: [],
        shippingAddress: {},
        paymentMethod: null,
    },
    reducers: {
        setToCart: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.product === newItem.product);
            if (existingItemIndex !== -1){
                state.cartItems[existingItemIndex] = newItem
            }else {
                state.cartItems.push(newItem);
            }
        },
        clearFromCart:(state, action) => {
            const product = action.payload;
            state.cartItems = state.cartItems.filter(item=> item.product !== product);
            console.log(state.cartItems);
        },
        setShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
        },
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        },
        clearItems: (state) => {
            state.cartItems = [];
        }
    }
});

export const {
    setToCart,
    clearFromCart,
    setShippingAddress,
    setPaymentMethod,
    clearItems,
} = cartSlice.actions;



export default cartSlice.reducer;

export const addToCart = (id, quantity) => {
    return async (dispatch,getState) => {
        const { data } = await axios.get(`/api/product/${id}`);
        const added_quantity = {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            quantity
        }
        dispatch(setToCart(added_quantity))
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    }
}

export const removeFromCart = (id) => {
    return async (dispatch, getState) => {
        dispatch(clearFromCart(id))
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    }
}

export const saveShippingAddress = (data) => {
    return async (dispatch) => {
        dispatch(setShippingAddress(data))
        localStorage.setItem('shippingAddress', JSON.stringify(data));
    }
}

export const savePaymentMethod = (data) => {
    return async (dispatch) => {
        dispatch(setPaymentMethod(data))
        localStorage.setItem('paymentMethod', JSON.stringify(data))
    }
}
export const clear = () => {
    return async (dispatch) => {
        dispatch(clearItems())
    }
}
