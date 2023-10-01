import styled, {css} from "styled-components";

export const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  background-color: #D7D4FF;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0 2rem 0;

  >div{
    max-width: 50%;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 20px;

    >p {
    color: #2B2B2B;
    font-size: 1.4rem;
  }

  >h1{
    color: #2B2B2B;
  }
  }

  justify-content: space-around;
  align-items: center;
`;