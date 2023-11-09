import styled, { css } from "styled-components";


export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0,0,0, 0.7);
  z-index: 1000;
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 150px;
  background-color: #C0C0C0;
  border-radius: 10px;
  color: black;
`;


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
    max-width: 100%;
    min-width: 100%;
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