import {createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../api/axios";

export const getProductTypes = createAsyncThunk(
    'getProductTypes',
    async () => {
        return await instance.get('/productTypes')
    }
)

const productTypesFulfilled = (state, {payload}) => {
    state.productTypes = payload.data
}

// const productsRejected = (state, {payload}) => {
//     state.productTypes = payload.data
// }

export const productTypesExtraReducer = builder => {
    builder
        .addCase(getProductTypes.fulfilled, productTypesFulfilled)
    // builder.addCase(getProductTypes.rejected, productsRejected)
}