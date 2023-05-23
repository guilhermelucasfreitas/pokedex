import axios from "axios";
import { IPokemonDetails } from "../interfaces/IPokemonDetails.";


export async function getPokemonDetails(name: string): Promise<IPokemonDetails>{
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`
 
    const result = await axios.get<IPokemonDetails>(endpoint)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return result.data
}
