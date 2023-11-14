import styled, { css } from "styled-components";
import { EmailOutline } from "styled-icons/evaicons-outline";
import { Lock } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #327AD9;
  width: 100vw;
  height: 100vh;
`;

export const ModalLogin = styled.div`
  width: 918px;
  height: 444px;
  background-color: #272B2F;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  >div{
    background-color: #272B2F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    >h1{
    font-size: 24px;
    }
    >p{
      max-width: 316px;
      font-size: 14px;
      color: #728284;
    }
    >form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      >p{
        color: #728284;
        font-size: 14px;
        > a {
          color: #327ad9;
        }
      }
    }
  }
  >img{
    width: 461px;
    height: 408px;
  }
  @media (max-width: 900px) {
    > img {
      display: none; 
    }
  }
`;

export const Input = styled.input`
  font-size: 14px;
  color: #728284;
  border:none;
  background-color: #34383C;
  width: 363px;
  height: 45px;
  font-size:14px;
  padding-left: 0.5rem;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
  margin-top: 2rem;
  font-size: 14px;
  background-color: #327AD9;
  color: white;
  border: none; 
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width:395px;
  height: 37px;
  font-weight: bold;
  &:hover {
    background-color: #2D75D3;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 1.4rem;
  margin-top: 20px;
`;

export const Banner = styled.div`
    width:580px;
    height:90vh;
    background: radial-gradient(circle, rgba(159, 146, 228, 1) 0%, rgba(28, 40, 126, 1) 100%);
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem 0rem 0rem 1rem;
    position: relative;
    >img{
      max-width: 340px;
      max-height: 340px;
      opacity: 0.5;
    }
`;


export const TextOverlay = styled.div`
>h1{
  text-align: center;
}
  width: 100%; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
  z-index: 1;
`;

export const PasswordIcon = styled(Lock)`
  padding-left: 10px;
  color: #327AD9;
  width: 32px;
`;

export const EmailIcon = styled(EmailOutline)`
  padding-left: 10px;
  color: #327AD9;
  width: 32px;
`;

export const IconWrapper = styled.div`
  background-color: #34383C;
  display: flex;
`;


// Defina o componente Banner com a borda estilizada
export const pass = styled.div`
  border: 2px solid black;
`;
