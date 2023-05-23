import { useEffect, useState } from "react";
import { listPokemons } from "../../services/listPokemons";
import { Card } from "../../components/card/Card";
import { IPokemonList } from "../../interfaces/ILisPokemon";
import * as S from "./style";
import { useNavigate } from "react-router-dom";



export const Pokedex = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const navigate = useNavigate();

  function handleClick(pokemon: IPokemonList) {
   navigate(`/pokemon/${pokemon.name}`);
  }

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  return (
    <div>
      
      <S.CardContainer>
        {pokemons.map((pokemon, index) => (
          <Card
            key={index}
            onClick={() => handleClick(pokemon)}
            pokemon={pokemon}
          />
        ))}
      </S.CardContainer>
    </div>
  );
};
