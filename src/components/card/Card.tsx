import { memo, useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoritesContext";
import { IPokemonList } from "../../interfaces/ILisPokemon";
import * as S from "./style";
import { FaHeart } from "react-icons/fa";


interface PokedexCardProps {
  pokemon: IPokemonList;
  onClick: () => void;
}

export const Card = memo((props: PokedexCardProps) => {
  const { addFavorite, removeFavorite, favorites } =
    useContext(FavoriteContext);

  const isFavorite = (pokemonId: number) =>
    favorites.some((favoritePokemon) => favoritePokemon.id === pokemonId);

  const { pokemon, onClick } = props;
  const primaryType = pokemon.types[0];

  return (
    <S.PokemonCard type={primaryType} onClick={onClick}>
      <S.LeftSide>
        <S.PokemonId>#{pokemon.id}</S.PokemonId>
        <S.NameAndHeartContainer>
          <S.PokemonName>{pokemon.name}</S.PokemonName>
          <S.FavoriteIcon>
            <FaHeart
              color={isFavorite(pokemon.id) ? "red" : "white"}
              size={20}
              onClick={(event) => {
                event.stopPropagation();
                isFavorite(pokemon.id)
                  ? removeFavorite(pokemon.id)
                  : addFavorite(pokemon);
              }}
            />
          </S.FavoriteIcon>
        </S.NameAndHeartContainer>

        <S.PokemonContentType>
          {pokemon.types.map((pokemonType, index) => (
            <S.PokemonType type={pokemonType} key={index}>
              <S.PokemonTypeText>{pokemonType}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>
      <S.RightSide>
        <S.PokemonImage
          src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
          alt={pokemon.name}
        />
      </S.RightSide>
    </S.PokemonCard>
  );
});
