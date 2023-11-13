import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background: #327AD9;
  min-height: 7.5vh;

  > div, button {
    color: white;
    display: flex;
    flex-wrap: wrap;
    border: none;
    font-size: 14px;
    outline: 0;
    cursor: pointer;
    background: #327AD9;
    color: white;
    &:hover {
      color: #F1C40F; /* Altere para a cor desejada ao passar o mouse */
    }
  }
`;