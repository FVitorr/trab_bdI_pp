import styled, { css } from "styled-components";

import { Edit } from "@styled-icons/boxicons-solid/Edit"
import { DeleteOutline } from "@styled-icons/typicons/DeleteOutline"

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 45px;
  background: #d9d9d9;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const InfoPedido = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr 0.5fr 0.5fr;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-left: 1rem;
  >p{
    width: 100%;
    text-align: left;
    color: gray;
    font-size: 14px;
  }
  >p:nth-child(3){
    padding-right: 0.5rem;
  }
  >div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    width:100%;
    height: 2rem;
    text-align: left;
    >button{
      text-align: left;
      width: 100%;
      background: #d9d9d9;
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
  width: 32px;
`;

export const EditButton = styled(Edit)`
  color: blue;
  width: 26px;
`;