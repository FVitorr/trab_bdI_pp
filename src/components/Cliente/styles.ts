import styled, {css} from "styled-components";

export const Container = styled.div`
  /* margin-top: 1rem; */
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`;

export const InfoCliente = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;

  text-align:left;
  /* gap:1rem; */
  >p{
    border:1px solid white;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    padding-left: 1rem;
    display:flex;
    align-items: center;
  }
`;