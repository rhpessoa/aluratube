import { useContext, useEffect, useState } from "react";
import config from "../config.json";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import supabase from "../src/config/supabaseClient";

function HomePage() {
  const [valorDaBusca, setValorDaBusca] = useState("");
  const [userFavoritos, setUserFavoritos] = useState([]);
  useEffect(() => {
    const getUserFavoriteInfo = async () => {
      const { data } = await supabase.from("user_favoritos").select();
      if (data) {
        setUserFavoritos(data);
      }
    };
    getUserFavoriteInfo();
  }, []);
 
  return (
    <>
      <Header valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca} />
      <Banner />
      <Timeline
        valorDaBusca={valorDaBusca}
        playlists={config.playlists}
        favoritos={config.favoritos}
        FavoriteUser={userFavoritos}
        setUserFavoritos={setUserFavoritos}
      />
    </>
  );
}

export default HomePage;
