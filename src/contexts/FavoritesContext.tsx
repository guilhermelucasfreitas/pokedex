import { createContext, useState, ReactNode, useEffect } from "react";
import { IPokemonList } from "../interfaces/ILisPokemon";

interface FavoriteContextProps {
  favorites: IPokemonList[];
  addFavorite: (pokemon: IPokemonList) => void;
  removeFavorite: (pokemonId: number) => void;
}

interface FavoriteProviderProps {
  children: ReactNode;
}

const INITIAL_FAVORITES_VALUE: IPokemonList[] = [];

export const FavoriteContext = createContext<FavoriteContextProps>({
  favorites: [],
  addFavorite: () => console.warn(`addFavorite is not ready`),
  removeFavorite: () => console.warn(`removeFavorite is not ready`),
});

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<IPokemonList[]>(
    INITIAL_FAVORITES_VALUE
  );

  // Get favorites from localStorage when component mounts
  useEffect(() => {
    const savedFavorites = window.localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (pokemon: IPokemonList) => {
    setFavorites((currentFavorites) => [...currentFavorites, pokemon]);
  };

  const removeFavorite = (pokemonId: number) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((pokemon) => pokemon.id !== pokemonId)
    );
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
