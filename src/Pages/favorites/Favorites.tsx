// Favorites.tsx
import { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoritesContext";
import { Card } from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import * as S from "../pokedex/style"; 
import { IPokemonList } from "../../interfaces/ILisPokemon";

export const Favorites = () => {
  const navigate = useNavigate();
  const { favorites } = useContext(FavoriteContext);

  const handleClick = (pokemon: IPokemonList) => {
    navigate(`/pokemon/${pokemon.name}`, { state: { pokemon } });
  };

  if (favorites.length === 0) {
    return (
      <S.PageContainer>
        <h1>No Favorite Pokemons</h1>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <S.CardContainer>
        {favorites.map((pokemon) => (
          <Card
            key={pokemon.id}
            onClick={() => handleClick(pokemon)}
            pokemon={pokemon}
          />
        ))}
      </S.CardContainer>
    </S.PageContainer>
  );
};
