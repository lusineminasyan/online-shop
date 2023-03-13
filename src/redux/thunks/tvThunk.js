import { createAsyncThunk } from "@reduxjs/toolkit/dist";
import instance from "../../api/axios";

export const getTvs = createAsyncThunk(
    "getTvs",
    async () => {
        return await instance.get(`/tv`)
    }
)
const tvsFulfilled = (state, { payload }) => {
 state.tvs=payload.data   
}
const tvsRejected = (state, { payload }) => {
    state.tvs = payload.data
}
export const tvsExtraReducer = builder => {
    builder
        .addCase(getTvs.fulfilled, tvsFulfilled)
        .addCase(getTvs.rejected, tvsRejected)
}