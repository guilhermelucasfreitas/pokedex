import { useLocation } from "react-router-dom";

export const PokemonDetails = () => {


  const location = useLocation();
  const pokemon = location.state?.pokemon;
  console.log(pokemon)

  return (
    <>
      <h1>{pokemon.name}</h1>
      <div>{JSON.stringify(pokemon, undefined, 2)}</div>
    </>
  );
};
