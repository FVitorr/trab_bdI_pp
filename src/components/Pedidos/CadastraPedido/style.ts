import styled from "styled-components";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
  min-width: 100vw;
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 733px;
  min-height: 420px;
  transform: translate(-50%, -50%);
  background-color: #cccccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: black;
  gap: 1rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  > button {
    color: white;
    background: #327ad9;
    width: 228px;
    height: 45px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const Formulario = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  > p {
    width: 100%;
    font-size: 20px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    > p {
      padding-left: 0.5rem;
      width: 100%;
      font-size: 14px;
      color: black;
      float: left;
    }
    > input,select {
      margin-bottom: 0.5rem;
      padding: 0 0 0 1rem;
      min-height: 34px;
      min-width: 656px;
      border-radius: 4px;
      border: none;
      background-color: #ebebeb;
      color: black;
    }
  }
`;

export const SelectArea = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  > div {
    width: 100%;
  }
`;
export const SelectOpition = styled.div`
  border-radius: 4px;
  background-color: #ebebeb;
  color: #3f4373;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding-left: 1rem;
  min-height: 34px;
`;

export const Checkboxes = styled.i`
  position: absolute;
  top: 58px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #cccccc;
  background-color: #cccccc;
  max-height: 150px;
  overflow-y: auto; /* Permite rolar o conteúdo dentro do contêiner */
  z-index:1;
  > label {
    width: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Down = styled(ChevronDown)`
  width: 32px;
  padding: 0;
`;

export const OverSelect = styled.div`
  display: flex;
  width: 70%;
  flex-direction: row;
  font-size: 12px;
  overflow: hidden;
  gap: 3px;
`;
