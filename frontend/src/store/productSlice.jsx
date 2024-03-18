import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status.js";
import axios from "axios";

const productSlice = createSlice({
    name:'product',
    initialState: {
        products: [],
        product:{},
        status: STATUS.IDLE,
        errorMessage: ''
    },
    reducers: {
        setProducts:(state, action) => {
            state.products = action.payload;
        },
        setProduct:(state, action) => {
            state.product = action.payload;
        },
        setStatus:(state,action) => {
            state.status = action.payload;
        },
        setErrorMessage:(state,action) => {
            state.errorMessage = action.payload;
        }
    }
});

export const { setProducts, setProduct,setStatus,setErrorMessage} = productSlice.actions;
export default productSlice.reducer;


export const getProducts = () => async (dispatch) =>{
    dispatch(setStatus(STATUS.LOADING))
    try {
        const {data} = await axios.get(`/api/products`);
        dispatch(setProducts(data))
        dispatch(setStatus(STATUS.IDLE))
    }catch (error){
        dispatch(setErrorMessage(error.response && error.response.data.detail ? error.response.data.detail : error.message))
        dispatch(setStatus(STATUS.ERROR))
    }
};

export const getProduct =  (id) => async (dispatch) => {
    dispatch(setStatus(STATUS.LOADING))
    try {
        const { data } = await axios.get(`/api/product/${id}`);
        dispatch(setProduct(data))
        dispatch(setStatus(STATUS.IDLE))
    }catch (error){
        dispatch(setErrorMessage(error.response && error.response.data.detail ? error.response.data.detail : error.message))
        dispatch(setStatus(STATUS.ERROR))
    }
}

