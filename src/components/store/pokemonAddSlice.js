import {
    createSlice
} from "@reduxjs/toolkit";
export const pokemonAddSlice = createSlice({
    name: 'addSlice',
    initialState: {
        pokemonList: [],
        pokemonToDisplay: [],
        firstLoad: true,
        isLoading: true,
        isError: false,

        offSet: 0
    },
    reducers: {
        updatePokemonList: (state, action) => {

            console.log(action.payload.completePokemonArray)
            state.pokemonList = [...state.pokemonList, ...action.payload.completePokemonArray]
            state.pokemonToDisplay = [...state.pokemonList]
            state.offSet += 30

            state.firstLoad = false

        },
        setisLoading: (state, action) => {
            state.isLoading = !state.isLoading
        },
        filterDataToDisplay: (state, action) => {
            if (action.payload.type === '' && action.payload.name === '') {
                return
            } else if (action.payload.type === '' && action.payload.name !== '') {

                state.pokemonToDisplay = state.pokemonList.concat().filter(
                    pokemon =>
                    pokemon.name.includes(action.payload.name))
            } else if (action.payload.type !== '' && action.payload.name === '') {


                if (action.payload.type === 'All') {
                    state.pokemonToDisplay = [...state.pokemonList]
                } else {
                    state.pokemonToDisplay = state.pokemonList.concat().filter(
                        pokemon =>
                        pokemon.types[0].type.name === action.payload.type)
                }



            } else {

                if (action.payload.type === 'All') {
                    state.pokemonToDisplay = state.pokemonList.concat().filter(
                        pokemon =>
                        pokemon.name.includes(action.payload.name))
                } else {
                    state.pokemonToDisplay = state.pokemonList.concat().filter(

                        pokemon =>
                        pokemon.name.includes(action.payload.name) && pokemon.types[0].type.name === action.payload.type)

                }

            }





        }
    }

})