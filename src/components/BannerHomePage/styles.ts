import styled from "styled-components";

export const Container = styled.div`
  min-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FirstSection = styled.div`
margin-top: 1rem;
margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: 356px;
  justify-content: space-around;
  width: 100%;
    >p{
      max-width: 538px;
      font-size: 40px;
      color: #d9d9d9;
    }
    >img{
      height: 243px;
      width: 268px;
    }
  `;

export const SecondSection = styled.div`
margin-top: 1rem;
margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: 356px;
  justify-content: space-around;
  background: #d9d9d9;
  width: 99vw;
    >p{
      text-align: end;
      max-width: 565px;
      font-size: 40px;
      color: #327AD9;
    }
    >img{
      height: 258px;
      width: 288px;
    }
  `;