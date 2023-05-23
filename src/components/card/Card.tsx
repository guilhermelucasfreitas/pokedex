import { IPokemonList } from "../../interfaces/ILisPokemon";
import { IPokemonDetails } from "../../interfaces/IPokemonDetails.";
import * as S from "./style";

interface PokedexCardProps {
  pokemon: IPokemonList;
  onClick: () => void;
}

export const Card = (props: PokedexCardProps) => {
  const { pokemon, onClick } = props;
  const primaryType = pokemon.types[0];

  return (
    <S.PokemonCard type={primaryType} onClick={onClick}>
      <S.LeftSide>
        <S.PokemonId>#{pokemon.id}</S.PokemonId>
        <S.PokemonName>{pokemon.name}</S.PokemonName>

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
};
