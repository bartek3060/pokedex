import {
    configureStore
} from '@reduxjs/toolkit'
import {
    pokemonAddSlice
} from './pokemonAddSlice'
import {
    darkModeSlice
} from './darkModeSlice'

const store = configureStore({
    reducer: {
        pokemonAddSlice: pokemonAddSlice.reducer,
        darkModeSlice: darkModeSlice.reducer
    }
})
export const pokemonAddActions = pokemonAddSlice.actions
export const darkModeActions = darkModeSlice.actions
export default store