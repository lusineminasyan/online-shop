import { createSlice } from "@reduxjs/toolkit/dist";
import { notebooksExtraReducer } from "../thunks/notebookThunk";

const initialState = {
    notebooks: []
}
const notebooksSlice = createSlice({
    name: "notebooksSlice",
    initialState,
    reducers: {
        setNotebooks: (state, { payload }) => {
            state.notebooks = payload;
        }
    },
    extraReducers: builder => {
        notebooksExtraReducer(builder)
    }
})
export const { setNotebooks } = notebooksSlice.actions;
export const notebooksSelector = state => state.phonesSlice.notebooks;
export default notebooksSlice.reducer;