import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color:#327AD9;
`;

export const FirstSection = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  align-items: center;
  height: 50%;
  justify-content: space-around;
  background: #327AD9;
  max-width: 1280px;
  > p {
    max-height: 100%;
    max-width: 50%;
    font-size: 2.4vw;
    color: #d9d9d9;
  }

  > img {
    min-height: 80px;
    min-width: 100px;
    height: 15vw; 
    width: 16vw;
  }
  @media (max-width: 850px) {
    > p {
      font-size: 20px; 
    }
  }
`;

export const BgSecondSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 50%;
background: #d9d9d9;
width: 100vw;
`;

export const SecondSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  background: #d9d9d9;
  width: 1280px;

  > p {
    text-align: end;
    max-width: 50%;
    font-size: 2.4vw;
    max-height: 100%;
    color: #327AD9;
  }

  > img {
    min-height: 80px;
    min-width: 100px;
    height: 15vw; /* Use vw para tornar o tamanho da imagem responsivo */
    width: 16vw; /* Use vw para tornar o tamanho da imagem responsivo */
  }
  @media (max-width: 850px) {
    > p {
      font-size: 20px; 
    }
  }
`;