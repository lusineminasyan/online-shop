import { createSlice } from "@reduxjs/toolkit/dist";
import { tvsExtraReducer } from "../thunks/tvThunk";

const initialState = {
    tvs: []
}
const tvsSlice = createSlice({
    name: "tvsSlice",
    initialState,
    reducers: {
        setTvs: (state, { payload }) => {
            state.tvs = payload;
        }
    },
    extraReducers: builder => {
        tvsExtraReducer(builder)
    }
})
export const { setTvs } = tvsSlice.actions;
export const tvsSelector = state => state.tvsSlice.tvs;
export default tvsSlice.reducer;