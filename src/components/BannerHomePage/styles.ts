import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
  width: 100vw;
  > p {
    max-width: 50%; /* Use uma porcentagem do contêiner pai */
    font-size: 3.5vw; /* Use vw para tornar o tamanho de fonte responsivo */
    color: #d9d9d9;
  }

  > img {
    min-height: 80px;
    min-width: 100px;
    height: 15vw; /* Use vw para tornar o tamanho da imagem responsivo */
    width: 16vw; /* Use vw para tornar o tamanho da imagem responsivo */
  }
`;

export const SecondSection = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  justify-content: space-around;
  background: #d9d9d9;
  width: 100vw;

  > p {
    text-align: end;
    max-width: 50%; /* Use uma porcentagem do contêiner pai */
    font-size: 3.5vw; /* Use vw para tornar o tamanho de fonte responsivo */
    color: #327AD9;
  }

  > img {
    min-height: 80px;
    min-width: 100px;
    height: 15vw; /* Use vw para tornar o tamanho da imagem responsivo */
    width: 16vw; /* Use vw para tornar o tamanho da imagem responsivo */
  }
`;