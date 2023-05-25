import { listPokemons } from "../../services/listPokemons";
import { Card } from "../../components/card/Card";
import { IPokemonList } from "../../interfaces/ILisPokemon";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Loading } from "../../components/loading/Loading";

export const Pokedex = () => {
  const navigate = useNavigate();

  function handleClick(pokemon: IPokemonList) {
    //navigate(`/pokemon/${pokemon.name}`);
    console.log(pokemon, 'pokedex')
    navigate(`/pokemon/${pokemon.name}`, { state: { pokemon } });
  }

  const { data, isLoading } = useQuery(`listPokemons`, listPokemons, {
    staleTime: 1000 * 60 * 15, // remains cached for 15 minutes
  });


return (
  <S.PageContainer>
    {!isLoading ? (
      <S.CardContainer>
        {data?.results.map((pokemon, index) => (
          <Card
            key={index}
            onClick={() => handleClick(pokemon)}
            pokemon={pokemon}
          />
        ))}
      </S.CardContainer>
    ) : (
      <S.WrapperAnimation>
        <Loading />
      </S.WrapperAnimation>
    )}
  </S.PageContainer>
);
};
