import styled, {css} from "styled-components";

export const Container = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background-color: #D7D4FF;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid #D7D4FF;

  >button {
    padding: 8px;
    border-radius: 5%;

    width: 13rem;
    font-size: 1.5rem;

    outline: 0;
    cursor: pointer;

    background-color: #6C63FF;
    color: #FFFFFF;

    &:hover{
      background: #594fff;
    }
  }
`;