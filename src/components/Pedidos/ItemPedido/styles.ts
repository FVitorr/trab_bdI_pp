import styled, { css } from "styled-components";

import { Edit } from "@styled-icons/boxicons-solid/Edit"
import { DeleteOutline } from "@styled-icons/typicons/DeleteOutline"


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
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  text-align: center;
  >p{
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #2B2B2B;
    background-color: #C0C0C0;
    font-size: 18px;
    font-weight: bold;
    width:100%;
    height: 5rem;
  }
  >div{
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    color: #2B2B2B;
    background-color: #C0C0C0;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    width:100%;
    height: 5rem;
    >button{
      width: auto;
      background-color: #C0C0C0;
      border:none;
      padding:0;
      &:focus{
        outline: none;
      }
    }
  }
`

export const DeleteButton = styled(DeleteOutline)`
  color: red;
  width: 40px;
`;

export const EditButton = styled(Edit)`
  color: blue;
  width: 32px;
`;