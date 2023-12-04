import React from "react";
import Header from "../Header";
import InfoPP from "../BannerHomePage";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
          <InfoPP />
      </ Container>
    </>

  );
};

export default Main;
