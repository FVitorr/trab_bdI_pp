import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #DCDCDC;
  
  height: 100%;
  min-height: 100vh;
  font-family: 'Merriweather', serif;
  /* min-width: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  >div{
    width: 1280px;
    /* margin: 0 auto; */
    margin: 20px auto 0px auto;

  }
`;

export const ListClientes = styled.div`

width: 100%;
/* background-color: #C0C0C0; */
border-radius: 1rem;
gap: 0.5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-bottom: 50px;
/* box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1); */
`

export const Formulario = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >p{
    font-size: 2rem;
    color: black;
  }

  >input{
    max-width: 50%;
    min-width: 50%;
    padding: 1rem 2rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0,0,0,0.1);
    background-color:#FFFFFF;
    color: #3F4373;
  }

  >div{
    display: flex;
    gap: 1rem;
  >button {
    margin-top:1rem;
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


