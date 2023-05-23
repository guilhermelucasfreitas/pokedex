import { IPokemonList } from "../../interfaces/ILisPokemon";
import * as S from './style'
import styled, { css } from 'styled-components/';



export const Navbar = () => {
    return (
      <S.NavbarContainer>
        <S.NavbarLogo>Pokedex</S.NavbarLogo>
        <S.NavbarLinks>
          <S.NavbarLink href="#">Home</S.NavbarLink>
          <S.NavbarLink href="#">About</S.NavbarLink>
          <S.NavbarLink href="#">Contact</S.NavbarLink>
        </S.NavbarLinks>
      </S.NavbarContainer>
    );
}
  
