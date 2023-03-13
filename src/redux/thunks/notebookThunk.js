import { createAsyncThunk } from "@reduxjs/toolkit/dist";
import instance from "../../api/axios";

export const getNotebooks = createAsyncThunk(
    "getNotebooks",
    async () => {
        return await instance.get(`/notebook`)
    }
)
const notebooksFulfilled = (state, { payload }) => {
 state.notebooks=payload.data   
}
const notebooksRejected = (state, { payload }) => {
    state.notebooks = payload.data
}
export const notebooksExtraReducer = builder => {
    builder
        .addCase(getNotebooks.fulfilled, notebooksFulfilled)
        .addCase(getNotebooks.rejected, notebooksRejected)
}