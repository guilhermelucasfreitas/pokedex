import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Pokedex } from "./Pages/pokedex/Pokedex";
import { PokemonDetails } from "./Pages/pokemon-details/PokemonDetails";

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/pokemon/:name" element={<PokemonDetails />} />
      <Route path="/" element={<Pokedex />} />
    </RouterRoutes>
  );
};
