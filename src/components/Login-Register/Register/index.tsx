import React, { useState } from "react";
import { Container, Input, Button, Banner, TextOverlay } from "./../Login/styles";
import mulher_edge from './../../../assets/mulher_edge.svg';



const Registrar: React.FC = () => {
  // const history = useHistory();
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
        <link href="\" /> // Redireciona o usuário para a página inicial
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    }, 1000); // Simulando uma requisição assíncrona com um atraso de 1 segundo
  };
  

  return (
    <Container>
      <form onSubmit={handleLogin} style={{ borderRadius: '1rem 0rem 0rem 1rem' }}>
        <h2>Registrar</h2>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required
        />
        <Input
            placeholder="Nova Senha"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
          />
          <Input
            placeholder="Repetir Senha"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
          />


        <Button type="submit">Registrar</Button>
        <p>Já possui conta?<a href="http://localhost:5173/auth"> Entrar</a> </p>
      </form>
      <Banner style={{ borderRadius: '0rem 1rem 1rem 0rem' }}>
        <TextOverlay>
          <h1>Ponto Perfeito</h1>
          <p> Transformamos tecidos em obras-primas e sonhos em realidade. <br/>Crie uma conta para começar a explorar nossa plataforma.</p>
        </TextOverlay>
        <img src={mulher_edge} />
      </Banner>
    </Container>
  );
};

export default Registrar;
