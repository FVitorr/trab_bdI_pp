import styled, { css } from "styled-components";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";

export const Container = styled.div`
  background-color: #dcdcdc;

  height: 100%;
  min-height: 100vh;

  font-family: "Merriweather", serif;
  /* min-width: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  > div {
    width: 1280px;
    /* margin: 0 auto; */
    margin: 20px auto 0px auto;
  }
`;

export const Formulario = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 2rem;
    color: black;
  }

  > input {
    max-width: 50%;
    min-width: 50%;
    padding: 1rem 2rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    color: #3f4373;
  }

  > div {
    display: flex;
    gap: 1rem;
    > button {
      margin-top: 1rem;
      padding: 8px;
      border-radius: 5%;

      width: 13rem;
      font-size: 1.5rem;

      outline: 0;
      cursor: pointer;

      background-color: #6c63ff;
      color: #ffffff;

      &:hover {
        background: #594fff;
      }
    }
  }
`;

export const SelectArea = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    width: 100%;
  }
`;

export const SelectBtn = styled.div`
  min-width: 50%;
  padding: 0.5rem 2rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  color: #3f4373;
  font-size: 13px;

  display: grid;
  grid-template-columns: 0.4fr 3fr 0.1fr;
  align-items: center;
`;

export const Down = styled(ChevronDown)`
  color: black;
  width: 32px;
`;

export const Checkboxes = styled.i`
  position: relative;
  top: -12px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  background-color:white;
  width:98%;
  max-height: 310px;
  overflow-y: auto; /* Permite rolar o conteúdo dentro do contêiner */
  &::-webkit-scrollbar {
  display: none;
}
`;


export const OverSelect = styled.div`
  display:flex;
  max-width:90%;
  font-size:12px;
  gap:3px;
  overflow: hidden;
`;