export interface IPokemonList {
    sprites: any;
    name: string;
    url: string;
    id: number;
    types: string[];
  }
  
  export interface IGetPokemonDetails {
    count: number;
    next: null | string;
    previous: null | string;
    results: IPokemonList[];
  }