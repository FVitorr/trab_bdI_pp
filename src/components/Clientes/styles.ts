import styled, {css} from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  font-family: 'Merriweather', serif;
  min-height: 100%;
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const Formulario = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  >p{
    font-size: 3rem;
  }

  >input{
    min-width: 80%;
    padding: 1rem 2rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color:#FFFFFF;
  }

  >div{
    display: flex;
    gap: 1rem;
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
  }
`;

export const Descriptions = styled.div`
  margin-top:2rem;
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  text-align:left;

  

  width:80%;
  /* gap:1rem; */


  >p{
    border:1px solid #D7D4FF;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    padding: 0.5rem;
    background-color:#6C63FF;
    color:white;
  }
`;


