import React, { useState } from "react";
import axios from "axios";
import imagem from "../../../assets/seguranca-do-computador-com-cadeado-de-login-e-senha.png";
import { Container, Button, EmailIcon, IconWrapper, Input, ModalLogin, PasswordIcon } from "./styles";

const Registrar: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (password !== passwordConfirm) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
      }
      console.log(email)
      console.log(password)
      const response = await axios.post("http://localhost:8080/register", {
          email,
          senha: password
      }
    );

      if (response.status === 200) {
        window.location.href = "http://localhost:5173/";
      } else {
        alert("Falha no registro. Tente novamente.");
      }
    } catch (error) {
      alert("Erro ao registrar. Verifique sua conexão ou tente novamente mais tarde.");
      console.error("Erro ao registrar:", error);
    }
  };

  return (
    <Container>
      <ModalLogin>
        <div>
          <h1>Venha fazer parte da Ponto Perfeito!</h1>
          <p>
            Onde cada agulhada conta uma história e cada linha tecida é um passo
            em direção à perfeição.
          </p>
          <form onSubmit={handleRegister} style={{ borderRadius: '1rem 0rem 0rem 1rem' }}>
            <IconWrapper>
              <EmailIcon />
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
              />
            </IconWrapper>

            <IconWrapper>
              <PasswordIcon />
              <Input
                placeholder="Nova Senha"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
              />
            </IconWrapper>

            <IconWrapper>
              <PasswordIcon />
              <Input
                placeholder="Repetir Senha"
                type="password"
                value={passwordConfirm}
                onChange={(e: any) => setPasswordConfirm(e.target.value)}
                required
              />
            </IconWrapper>

            <Button type="submit">Registrar</Button>
            <p>Já possui conta?<a href="http://localhost:5173/auth"> Entrar</a> </p>
          </form>
        </div>
        <img src={imagem} alt="Imagem de segurança" />
      </ModalLogin>
    </Container>
  );
};

export default Registrar;
