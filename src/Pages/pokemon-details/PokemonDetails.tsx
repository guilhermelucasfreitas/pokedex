import { useLocation } from "react-router-dom";
import { AtributesWrapper, Column1, Column2, Container, ImgPokemon, MainWrapper, Name } from "./styles";

export const PokemonDetails = () => {
  const location = useLocation();
  const pokemon = location.state?.pokemon;
  
  // Formata os arrays para strings com primeira letra maiúscula e separadas por vírgulas
  const abilities = pokemon.abilities?.map((ability: string) => ability.charAt(0).toUpperCase() + ability.slice(1)).join(', ');
  const types = pokemon.types?.map((type: string) => type.charAt(0).toUpperCase() + type.slice(1)).join(', ');

  return (
    <>
      <h1></h1>
      <MainWrapper>
        <Container type={pokemon.types[0]}>
          <ImgPokemon
            src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
            alt={pokemon.name}
          ></ImgPokemon>
          <Name>{pokemon.name}</Name>
          <AtributesWrapper>
            <Column1>
              <p>Abilities: {abilities}</p>
              <p>Height: {pokemon.height}</p>
            </Column1>
            <Column2>
              <p>Weight: {pokemon.weight}</p>
              <p>Types:  {types}</p>
            </Column2>
          </AtributesWrapper>
        </Container>
      </MainWrapper>
    </>
  );
};
