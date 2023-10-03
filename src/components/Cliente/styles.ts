import styled, {css} from "styled-components";

export const Container = styled.div`
  margin: 50px 20px;
  background-color: #FFFFFF;
  width: 320px;
  max-width: 320px;
  height: 423px;
  max-height: 423px;

  box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
`;

export const InfoCliente = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #FFFFFF;
  max-height: 50%;
  height: 50%;
  gap: 20px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 17px;
  >p{
    color: #2B2B2B;
  }
  >div{
    color: #2B2B2B;
    /* display: flex; */
    justify-content: space-between;
    >p{
    
    margin: 0;
  }
    
    font-size: 18px;
    font-weight: bold;
  }
`;