import React from "react";
import config from "../config.json";
import { GlobalStyle } from "../src/components/GlobalStyle";
import Timeline from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import { temaClaro, temaEscuro } from "../src/components/UI/temas";
import { ThemeProvider } from "styled-components";

function HomePage() {
  const [valorDaBusca, setValorDaBusca] = React.useState("");
  const [tema, setTema] = React.useState(true);

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <Menu
        tema={tema}
        setTema={setTema}
        valorDaBusca={valorDaBusca}
        setValorDaBusca={setValorDaBusca}
      />
      <Header config={config} />
      <Timeline
        valorDaBusca={valorDaBusca}
        playlists={config.playlists}
        favoritos={config.favoritos}
      />
    </ThemeProvider>
  );
}

export default HomePage;
