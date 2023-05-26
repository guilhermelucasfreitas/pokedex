import { FaHeart } from 'react-icons/fa';
import styled, { css } from 'styled-components/';

export const PokemonCard = styled.div<any>`
  ${({ theme, type }) => css`
    background: ${theme.colors.backgroundCard[type]};
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    width: 25rem;
    height: 8rem;
    padding-top: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
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

export const PokemonName = styled.div`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    margin-left: 1rem;
    color: white;
    display: inline-block;
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

export const NameAndHeartContainer = styled.div`
  display: flex;
  align-items: center;  // Este é para alinhar verticalmente em caso de desalinhamento
`;

export const FavoriteIcon = styled.div`
  margin-left: 0.5rem;
  margin-top: 0.6rem;
`;
