import styled, { css } from "styled-components";

export const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  >img{
    max-width: 720px;
    max-height: 720px;
  }
`;

export const TextOverlay = styled.div`
>h1{
  text-align: center;
}
width: 100%;
letter-spacing: .2rem;
  font-family: 'Noto Sans', sans-serif;  
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  text-align: left;
  color: #FFFFFF;
  z-index: 1;
`;