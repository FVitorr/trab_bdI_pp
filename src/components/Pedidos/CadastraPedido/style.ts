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
  min-width: 700px;
  height: auto;
  /* padding-bottom: 1.5rem; */
  transform: translate(-50%, -50%);
  background-color: #262626;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: black;
  gap: 1rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #313131;
  padding-top: 1rem;
  padding-bottom: 1rem;
  > button:nth-child(1) {
    color: white;
    background: #838383;
    width: 110px;
    height: 35px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 27rem;
  }
  > button:nth-child(2) {
    color: white;
    background: #327ad9;
    width: 110px;
    height: 35px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    margin-right: 1.5rem;
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
    font-weight: bold;
    width: 100%;
    font-size: 20px;
    color: #ffffff;
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
      color: #aaaaaa;
      float: left;
    }
    > input, select {
      margin-bottom: 0.5rem;
      padding: 0 0 0 1rem;
      min-height: 34px;
      min-width: 656px;
      border-radius: 4px;
      border: none;
      background-color: #313131;
      color: #aaaaaa;
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
  background-color: #313131;
  color: #aaaaaa;
  font-size: 14px;
  display: flex;
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
  /* border: 1px solid #cccccc; */
  background-color: #313131;
  max-height: 150px;
  overflow-y: auto;
  color: #aaaaaa;
  z-index: 1;

  > label {
    width: 100%;
    &:hover {
      background-color: #444444;
    }
    > p {
      color: #aaaaaa;
    }
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
  align-items: center;
  justify-content: center;
  width: 70%;
  font-size: 12px;
  overflow: hidden;
  color: #aaaaaa;
`;
