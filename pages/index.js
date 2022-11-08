import config from "../config.json";
import { GlobalStyle } from "../src/components/GlobalStyle";
import {
  StyledHeader,
  BannerImg,
  UserContain,
  UserImg,
  UserInfo,
  UserName,
  UserJob,
} from "../src/components/Header";
import {
  ContainTimeline,
  VideoCard,
  PlayListName,
  ImageThumb,
  TituloThumb,
  NomeUserFav,
  UserImgFav,
  FavoriteCards,
} from "../src/components/Timeline";
import Menu from "../src/components/Menu";

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} favoritos={config.favoritos} />
      </div>
    </>
  );
}
function Header() {
  return (
    <StyledHeader>
      <BannerImg src={config.url_banner} />
      <UserContain>
        <UserImg src={`https://github.com/${config.github}.png`} />
        <UserInfo>
          <UserName>{config.name}</UserName>
          <UserJob>{config.job}</UserJob>
        </UserInfo>
      </UserContain>
    </StyledHeader>
  );
}
function Timeline(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists);
  const favoritosNames = Object.keys(propriedades.favoritos);
  return (
    <ContainTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <VideoCard>
            <PlayListName>{playlistName}</PlayListName>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <ImageThumb src={video.thumb} />
                    <TituloThumb>{video.title}</TituloThumb>
                  </a>
                );
              })}
            </div>
          </VideoCard>
        );
      })}

      {favoritosNames.map((favoritosName) => {
        const favoritos = propriedades.favoritos[favoritosName];
        return (
          <FavoriteCards>
            <h2>{favoritosName}</h2>
            <div>
              {favoritos.map((favorito) => {
                return (
                  <section>
                    <UserImgFav
                      src={`https://github.com/${favorito.user_nickname}.png`}
                    />
                    <NomeUserFav>{`@${favorito.user_nickname}`}</NomeUserFav>
                  </section>
                );
              })}
            </div>
          </FavoriteCards>
        );
      })}
    </ContainTimeline>
  );
}

export default HomePage;
