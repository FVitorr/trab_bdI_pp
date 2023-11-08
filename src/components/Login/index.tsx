import React, { useState } from "react";
import { Container, Input, Button, Text,Profile,Banner,TextOverlay } from "./styles";
import { Link } from 'react-router-dom';
import mulher_edge from './../../assets/mulher_edge.svg';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula uma requisição assíncrona para verificar o login
    // Aqui você pode fazer uma chamada à API para autenticar o usuário
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        setIsLoggedIn(true);
        alert("Login bem-sucedido!");
        <Link to="/" />
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    }, 1000); // Simulando uma requisição assíncrona com um atraso de 1 segundo
  };

  return (
    <Container>
      <Banner>
        <TextOverlay>
        <h1>Ponto Perfeito</h1>
        <p>Transformamos tecidos em obras-primas e sonhos em realidade.</p>
        </TextOverlay>
        <img src={mulher_edge}/>
      </Banner>
      <form onSubmit={handleLogin}>
        <h2>Entrar</h2>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e:any) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e:any) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
        <p>Novo por aqui?<a> Criar uma conta</a> </p>
      </form>
      
    </Container>
  );
};

export default Login;
