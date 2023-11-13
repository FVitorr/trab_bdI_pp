import styled from "styled-components";

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
  min-height: 418px;
  transform: translate(-50%, -50%);
  background-color: #cccccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: black;
  gap: 3.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  > button {
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
    font-size: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    > p {
      font-size: 14px;
      color: black;
      float: left;
    }
    > input {
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
