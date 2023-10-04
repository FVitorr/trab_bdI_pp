import styled, {css} from "styled-components";

export const Container = styled.div`
  margin: 0px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
  height: 80px;
  max-height: 90%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InfoPedido = styled.div`
text-align: center;
  width: 100%;
  gap: 0.5rem;
  max-height: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 17px;
  >p{
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #2B2B2B;
    justify-content: space-between;
    background-color: #C0C0C0;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    width:100%;
    height: 5rem;
    padding-left: 2rem;
  }
`;