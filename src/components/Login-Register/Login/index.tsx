import React, { useState } from "react";
import {
  Container,
  Input,
  Button,
  ModalLogin,
  PasswordIcon,
  EmailIcon,
  IconWrapper
} from "./styles";
import { Link } from "react-router-dom";
import imagem from "../../../assets/seguranca-do-computador-com-cadeado-de-login-e-senha.png";
import logo from "../../../assets/Group 29 (1).png";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula uma requisição assíncrona para verificar o login
    // Aqui você pode fazer uma chamada à API para autenticar o usuário
    setTimeout(() => {
      if (email === "user@gmail.com" && password === "123") {
        <Link to="/" />;
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    }, 1000); // Simulando uma requisição assíncrona com um atraso de 1 segundo
  };

  return (
    <Container>
      <img src={logo} width="130px" height="120px" />
      <ModalLogin>
        <img src={imagem} />
        <div>
          <h1>Bem vindo a Ponto Perfeito!</h1>
          <p>
            Onde cada agulhada conta uma história e cada linha tecida é um passo
            em direção à perfeição.
          </p>

          <form onSubmit={handleLogin}>
            <IconWrapper>
              <EmailIcon />
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </IconWrapper>

            <IconWrapper>
              <PasswordIcon />
              <Input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </IconWrapper>
            <Button type="submit">Entrar</Button>
            <p>
              Novo por aqui?
              <a href="http://localhost:5173/register"> Cadastre-se</a>{" "}
            </p>
          </form>
        </div>
      </ModalLogin>
    </Container>
  );
};

export default Login;
