import styled, { css } from 'styled-components/';
import theme from '../../styles/theme';

interface PokemonType {
    type: keyof typeof theme.colors.backgroundCard;
  }
  

  type Pokemon = {
    name: string;
    url: string;
    id: number;
    types: PokemonType[];
  };
  
 
export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    padding: 20px;
    flex: 1;
  `}
`;

export const PokemonCard = styled.div<any>`
  ${({ theme, type }) => css`
    background: ${theme.colors.backgroundCard[type]};
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    cursor: pointer;
    user-select: none;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  `}
`;

export const LeftSide = styled.div`
  width: 50%;
  position: relative;
`;


export const ImageCardDetailLeftSide = styled.img`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
`;

export const PokemonContentType = styled.div`
  flex-direction: row;
`;

export const PokemonType = styled.div<any>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    background: ${theme.colors.boxType[type]};
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const PokemonTypeText = styled.div`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.background};
    text-transform: capitalize;
  `}
`;

export const RightSide = styled.div`
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`;

export const PokemonId = styled.div`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.span`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    margin-top: 5px;
    text-transform: capitalize;
    color: ${theme.colors.background};
  `}
`;

export const PokemonImage = styled.img`
  margin-top: -40px;
  width: 130px;
  height: 130px;
`;

export const PokeballCardDetail = styled.img`
  position: absolute;
  right: -20px;
`;
