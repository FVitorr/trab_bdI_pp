import React, { useState } from "react";
import imagem from "../../../assets/seguranca-do-computador-com-cadeado-de-login-e-senha.png";
import { Container, Button, EmailIcon, IconWrapper, Input, ModalLogin, PasswordIcon, pass } from "./styles";
./styles
const Registrar: React.FC = () => {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula uma requisição assíncrona para verificar o login
    // Aqui você pode fazer uma chamada à API para autenticar o usuário
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        setIsLoggedIn(true);
        <link href="\" /> // Redireciona o usuário para a página inicial
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    }, 1000); // Simulando uma requisição assíncrona com um atraso de 1 segundo
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
          <form onSubmit={handleLogin} style={{ borderRadius: '1rem 0rem 0rem 1rem' }}>
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
        <img src={imagem} />
      </ModalLogin>
    </Container>
  );
};

export default Registrar;
