import { createAsyncThunk } from "@reduxjs/toolkit/dist";
import instance from "../../api/axios";

export const getPhones = createAsyncThunk(
    "getPhones",
    async () => {
        return await instance.get(`/phone`)
    }
)
const phonesFulfilled = (state, { payload }) => {
 state.phones=payload.data   
}
const phonesRejected = (state, { payload }) => {
    state.phones = payload.data
}

export const phonesExtraReducer = builder => {
    builder
        .addCase(getPhones.fulfilled, phonesFulfilled)
        .addCase(getPhones.rejected, phonesRejected)
}