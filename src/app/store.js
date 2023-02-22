import { configureStore } from "@reduxjs/toolkit";
import surahReducer from "../features/surah/surahSlice";

export const store = configureStore({
    reducer: {
        surah: surahReducer
    }
})