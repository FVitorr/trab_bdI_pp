import styled, {css} from "styled-components";

export const Container = styled.div`
  /* font-family: 'Noto Sans', sans-serif; */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif  ;

  font-weight: bold;
  z-index: 2;
  position: sticky;
  top: 0;

  background-color: #392E6D;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 8px 0 12px 13px;

  > a > button,
  > button {
    padding: 8px;
    border-radius: 5%;
    border: none;
    width: 13rem;
    background-color: transparent;
    font-size: 1.5rem;
    outline: 0;
    cursor: pointer;
    color: #BEA187;
  }
`;