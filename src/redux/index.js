import {combineReducers} from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import productTypesSlice from "./slices/productTypesSlice";
import phonesSlice from "./slices/phonesSlice";
import notebooksSlice from "./slices/notebooksSlice";
import tvsSlice from "./slices/tvsSlice";
import orderSlice from "./slices/orderSlice";

export const rootReducer = combineReducers({
    dataSlice,
    productTypesSlice,
    phonesSlice,
    notebooksSlice,
    tvsSlice,
    orderSlice,
})