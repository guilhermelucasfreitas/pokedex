import styled, { css } from 'styled-components/';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;


export const Container = styled.div<any>`
  ${({ theme, type }) => css`
    background: ${theme.colors.backgroundCard[type]};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    width: 80%;
    height: 80vh;
    max-width: 500px;
    max-height: 500px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  `}
`;

export const ImgPokemon = styled.img`
    width: 180px;
    height: 180px;
`;

export const Name = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: white;
    //padding-bottom: 8rem;
    &::first-letter {
        text-transform: uppercase;
      }
`;

export const AtributesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: white;
  margin-top: 5rem;
  & p::first-letter {
    text-transform: uppercase;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column1 = styled(Column)`
  margin-left: 2rem;
  
`;

export const Column2 = styled(Column)`
  margin-right: 2rem;
`;
