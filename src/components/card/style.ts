import styled, { css } from 'styled-components/';

export const PokemonCard = styled.div<any>`
  ${({ theme, type }) => css`
    background: ${theme.colors.backgroundCard[type]};
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    width: 20rem;
    height: 8rem;
    padding-top: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  `}
`;

export const LeftSide = styled.div`
  width: 50%;
  position: relative;
  margin-top: 10px;
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
    color: black;
    margin-left: 1rem
  `}
`;

export const PokemonName = styled.span`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    margin-left: 1rem;
    color: white
  `}
`;


export const PokemonContentType = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
`;

export const PokemonType = styled.div<any>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    background-color: ${theme.colors.boxType[type]};
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

export const PokemonImage = styled.img`
margin-top: -40px;
width: 130px;
height: 130px;
padding-left: 1rem
`;
