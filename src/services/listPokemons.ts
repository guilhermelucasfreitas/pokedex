import axios from "axios";
import { IGetPokemonDetails } from "../interfaces/ILisPokemon";
import { getPokemonDetails } from "./getPokemonsDetails";
  
export async function listPokemons(): Promise<IGetPokemonDetails> {
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;
    const result = await axios.get<IGetPokemonDetails>(endpoint);
    const promiseArr = result.data.results.map(async (pokemon) => {
      const pokemonDetails = await getPokemonDetails(pokemon.name);
  
      return {
        ...pokemon,
        sprites: pokemonDetails.sprites,
        id: pokemonDetails.id,
        types: pokemonDetails.types.map((typeInfo) => typeInfo.type.name),
      };
    });
  
    // wait 3 seconds before continue
    await new Promise((resolve) => setTimeout(resolve, 3000));
  
    const resultsWithDetails = await Promise.all(promiseArr);
  
    return {
      ...result.data,
      results: resultsWithDetails,
    };
  }
  


