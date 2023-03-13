import {createSlice} from "@reduxjs/toolkit";
import {productsExtraReducer} from "../thunks/productsThunk";

const initialState = {
    products: [],
}

const dataSlice = createSlice({
        name: 'dataSlice',
        initialState,
        reducers: {
            setProducts: (state, {payload}) => {
                state.products = payload;
            }
        },
        extraReducers: builder => {
            productsExtraReducer(builder)
        }
    }
)

export const {setProducts} = dataSlice.actions;

export const productsSelector = state => state.dataSlice.products

export default dataSlice.reducer;