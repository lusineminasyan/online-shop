import { createSlice } from "@reduxjs/toolkit/dist";
import { phonesExtraReducer } from "../thunks/phoneThunk";

const initialState = {
    phones: []
}
const phonesSlice = createSlice({
    name: "phonesSlice",
    initialState,
    reducers: {
        setPhones: (state, { payload }) => {
            state.phones = payload;
        }
    },
    extraReducers: builder => {
        phonesExtraReducer(builder)
    }
})
export const { setPhones } = phonesSlice.actions;
export const phonesSelector = state => state.phonesSlice.phones;
export default phonesSlice.reducer;