import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios"; // Importe a biblioteca axios
import {
  Container,
  Input,
  Button,
  ModalLogin,
  PasswordIcon,
  EmailIcon,
  IconWrapper
} from "./styles";
import imagem from "../../../assets/seguranca-do-computador-com-cadeado-de-login-e-senha.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login", {
            email,
            senha: password
        }
      );

      if (response.status === 200) {
        window.location.href = "http://localhost:5173/home";
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      alert("Erro ao autenticar. Verifique sua conexão ou tente novamente mais tarde.");
      console.error("Erro ao autenticar:", error);
    }
  };

  return (
    <Container>
      <ModalLogin>
        <img src={imagem} alt="Imagem de segurança" />
        <div>
          <h1>Bem-vindo a Ponto Perfeito!</h1>
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
