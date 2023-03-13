import {createSlice} from "@reduxjs/toolkit";
import {productsExtraReducer} from "../thunks/productsThunk";

const initialState = {
    orderItem: {},
}

const orderSlice = createSlice({
        name: 'dataSlice',
        initialState,
        reducers: {
            setOrder: (state, {payload}) => {
                state.orderItem = payload;
            }
        },
        extraReducers: builder => {
            productsExtraReducer(builder)
        }
    }
)

export const {setOrder} = orderSlice.actions;

export const orderSelector = state => state.orderSlice.orderItem

export default orderSlice.reducer;