import styled, {css} from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  
  font-family: 'Merriweather', serif;
  min-width: 100%;
  min-height: 100%;
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background-color: #D7D4FF;
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: space-around;

  text-align: center;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid #D7D4FF;

  >button {
    padding: 8px;
    border-radius: 5%;

    width: 13rem;
    font-size: 1.5rem;

    outline: 0;
    cursor: pointer;

    background-color: #6C63FF;
    color: #FFFFFF;

    &:hover{
      background: #594fff;
    }
  }
`;


export const InfoPP = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  background-color: #D7D4FF;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0 2rem 0;

  >div{
    max-width: 50%;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 20px;

    >p {
    color: #2B2B2B;
    font-size: 1.4rem;
  }

  >h1{
    color: #2B2B2B;
  }
  }

  justify-content: space-around;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #D7D4FF;


  padding: 10rem 0;

    >p {
    color: #2B2B2B;
    font-size: 1.4rem;
  }

`;