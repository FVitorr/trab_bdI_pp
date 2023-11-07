import styled, {css} from "styled-components";
import {PersonCircle} from "@styled-icons/bootstrap/PersonCircle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, rgba(159, 146, 228, 1) 0%, rgba(28, 40, 126, 1) 100%);

  >form{
    display: flex;
    flex-direction: column;
    background-color: #5F676B;
    padding: 10rem 2rem;
    border-radius: 1rem;
    border: 1px solid rgba(0,0,0,0.1);
  }
`;
export const Profile = styled(PersonCircle)`
  color: white;
  width: 110px;
  margin-bottom: -50px;
  z-index: 5;
`

export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: whitesmoke;
  width: 300px;
  text-align: center;
  color: black;
`;

export const Button = styled.button`
margin-top: 2rem;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 1.4rem;
  margin-top: 20px;
`;
