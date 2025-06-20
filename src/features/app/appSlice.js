import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem("theme") || "light",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload);
        },
    },
});

export const { setTheme } = appSlice.actions;
export default appSlice.reducer;
