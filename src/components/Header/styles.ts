import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  min-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background: #327AD9;
  min-height: 70px;

  > div, button {
    display: flex;
    flex-wrap: wrap;
    border: none;
    font-size: 14px;
    outline: 0;
    cursor: pointer;
    background: #327AD9;
    &:hover {
      color: #F1C40F; /* Altere para a cor desejada ao passar o mouse */
    }
  }
`;