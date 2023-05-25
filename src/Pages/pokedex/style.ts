import styled, { css } from 'styled-components/';


export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  widht: 100rem;
  border-color: coral;
  justify-content: center;
`;

export const WrapperAnimation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
`;