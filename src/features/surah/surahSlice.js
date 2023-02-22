import { createSlice } from "@reduxjs/toolkit";

const surahSlice = createSlice({
    name: "surah",
    initialState: {
        title: "set",
        body: "tes"
    },
    reducers:{
        update: (state, action) => {
            state.title = action.payload.title;
            state.body = action.payload.body;
        }
    }
})

export const {update} = surahSlice.actions
export default surahSlice.reducer