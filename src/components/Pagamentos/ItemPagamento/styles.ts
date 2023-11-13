import styled, { css } from "styled-components";

import {CheckCircleFill} from "@styled-icons/bootstrap/CheckCircleFill";

import {EyeOutline} from "@styled-icons/evaicons-outline/EyeOutline"

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

export const InfoPagamento = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 0.5fr;
justify-content: flex-start;
align-items: center;
text-align: left;
margin: 0 auto;
>p{
  text-align: left;
  color: gray;
  font-size: 14px;
}
>div{
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  width:100%;
  height: 5rem;
  >button{
    width: auto;
    background: #d9d9d9;
    border:none;
    padding:0;
    &:focus{
      outline: none;
    }
  }
}
`

export const Check = styled(CheckCircleFill)`
  color: #228b22;
  width: 32px;
`

export const View = styled(EyeOutline)`
  color: #bf3eff;
  width: 40px;
  border-radius: 10px;
`