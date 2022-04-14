import {
    pokemonAddActions
} from "./storeOfSlices"


export const fetch20Pokemons = (off) => {
    const offset = off
    console.log(off)
    return async dispatch => {
        const fetchPokemonList = async () => {
            const response = await fetch(`https:pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)

            if (!response.ok) {
                throw new Error('failed fetch Pokemons')
            }
            const responsePokemons = await response.json()

            return responsePokemons
        }
        const fetchSinglePokemon = async (name) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            if (!response.ok) {
                throw new Error('failed fetch Pokemon')
            }
            const responsePokemon = await response.json()
            return responsePokemon
        }
        try {
            dispatch(pokemonAddActions.setisLoading())
            const {
                results: pokemonsToFetch
            } = await fetchPokemonList()
            const completePokemonArray = await []
            for await (const pokemon of pokemonsToFetch) {
                const pokemonData = await fetchSinglePokemon(pokemon.name)
                completePokemonArray.push(pokemonData)
            }
            await dispatch(pokemonAddActions.updatePokemonList({
                completePokemonArray
            }))
            dispatch(pokemonAddActions.setisLoading())
        } catch (error) {
            console.log(error)

        }

    }
}