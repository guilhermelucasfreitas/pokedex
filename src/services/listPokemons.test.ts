import axios from "axios";
import { listPokemons } from "./listPokemons";
import { getPokemonDetails } from "./getPokemonsDetails";

jest.mock('axios');
jest.mock('./getPokemonsDetails');

const path = require('path');
const mockPokemonDetails = require(path.resolve(__dirname, '../mock/pokemonDetails.json'));

describe("listPokemons", () => {
  
  it("should fetch and return list of Pokemon with details", async () => {
    const mockResponse = {
      data: {
        results: [
          { name: "pikachu" },
          { name: "charmander" },
        ],
      },
    };

    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    (getPokemonDetails as jest.Mock).mockResolvedValue(mockPokemonDetails);

    const result = await listPokemons();

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_POKEAPI}/pokemon`
    );
    expect(getPokemonDetails).toHaveBeenCalledTimes(
      mockResponse.data.results.length
    );
    expect(result.results).toHaveLength(mockResponse.data.results.length);
  });

  it("should handle errors and return an empty list", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockRejectedValueOnce(new Error("API error"));

    const result = await listPokemons();

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_POKEAPI}/pokemon`
    );
    expect(getPokemonDetails).not.toHaveBeenCalled();
    expect(result.results).toHaveLength(0);
  });
});
