import {
    createSlice
} from "@reduxjs/toolkit";
export const darkModeSlice = createSlice({
    name: 'DarkMode',
    initialState: {
        darkMode: false
    },
    reducers: {
        changeDarkModeState: (state, action) => {
            state.darkMode = !state.darkMode

        }
    }
})