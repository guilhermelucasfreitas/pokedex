import { listPokemons } from "../../services/listPokemons";
import { Card } from "../../components/card/Card";
import { IPokemonList } from "../../interfaces/ILisPokemon";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Loading } from "../../components/loading/Loading";
import { useCallback, useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoritesContext";

export const Pokedex = () => {
  
  const navigate = useNavigate();


  const { data, isLoading } = useQuery(`listPokemons`, listPokemons, {
    staleTime: 1000 * 60 * 15, // remains cached for 15 minutes
  });


  // useMemo is used here to memoize the handleClick function. This helps in optimizing the performance 
  // on the client-side by preventing the unnecessary re-creation of the handleClick function on each render.
  const handleClick = useCallback((pokemon: IPokemonList) => {
    navigate(`/pokemon/${pokemon.name}`, { state: { pokemon } });
  }, [navigate]);

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
