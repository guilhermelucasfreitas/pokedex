import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Pokedex } from "./Pages/pokedex/Pokedex";
import { PokemonDetails } from "./Pages/pokemon-details/PokemonDetails";
import { Favorites } from "./Pages/favorites/Favorites";

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/pokemon/:name" element={<PokemonDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/" element={<Pokedex />} />
    </RouterRoutes>
  );
};
