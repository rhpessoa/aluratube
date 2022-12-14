import React, { useContext } from "react";
import config from "../config.json";
import Timeline from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";

function HomePage() {
  const [valorDaBusca, setValorDaBusca] = React.useState("");

  return (
    <>
      <Menu valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca} />
      <Header config={config} />
      <Timeline
        valorDaBusca={valorDaBusca}
        playlists={config.playlists}
        favoritos={config.favoritos}
      />
    </>
  );
}

export default HomePage;
