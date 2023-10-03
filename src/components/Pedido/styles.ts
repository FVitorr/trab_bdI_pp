import styled, {css} from "styled-components";

export const Container = styled.div`
  padding: 15px 0;
  border-radius: 1rem;
  margin: 40px 20px 5px 20px;
  background-color: #9a94ff;
  width: 70%;
  max-width: 100%;
  height: 90%;
  max-height: 90%;

  box-shadow: 0px 0px 20px rgba(0,0,0,0.1);

  display: flex;
  align-items: center;
  flex-direction: column;
`;


export const InfoPedido = styled.div`
text-align: center;
  width: 100%;
  padding: 20px;
  gap: 20px;
  max-height: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 17px;
  >p{
    color: #2B2B2B;
    justify-content: space-between;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const ItensPedido = styled.div`
text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  max-height: 0.5rem;
  font-size: 17px;
  >p{
    color: #2B2B2B;
    margin: 0;
    font-size: 18px;
  }
`;