import {createSlice} from "@reduxjs/toolkit";
import {productTypesExtraReducer} from "../thunks/productTypesThunk";

const initialState = {
    productTypes: [],
}

const productTypesSlice = createSlice({
        name: 'productTypesSlice',
        initialState,
        reducers: {
            setProductTypes: (state, {payload}) => {
                state.productTypes = payload;
            }
        },
        extraReducers: builder => {
            productTypesExtraReducer(builder)
        }
    }
)

export const {setProductTypes} = productTypesSlice.actions;
export const productTypesSelector = state => state.productTypesSlice.productTypes;
export default productTypesSlice.reducer;