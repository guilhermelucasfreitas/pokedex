import { useEffect, useState } from "react";
import { getPokemonDetails } from "../../services/getPokemonsDetails";
import { IPokemonDetails } from "../../interfaces/IPokemonDetails.";
import { useParams } from "react-router-dom";

interface PokemonQueryParams {
  name: string;
}

export const PokemonDetails = () => {
  const [selectedPokemonDetails, setSelectedPokemonsDetails] = useState<
    IPokemonDetails | undefined
  >(undefined);

  const { name } = useParams<Record<string, string | undefined>>();

  useEffect(() => {
    if (!name) return;

    getPokemonDetails(name).then((response) =>
      setSelectedPokemonsDetails(response)
    );
  }, [name]);

  return (
    <>
      <h1>{name}</h1>
      <div>{JSON.stringify(selectedPokemonDetails, undefined, 2)}</div>
    </>
  );
};
