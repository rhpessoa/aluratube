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
} from "../src/components/Timeline";
import { ContainMenu, Logo } from "../src/components/Menu";

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
        <Timeline playlists={config.playlists} />
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
    </ContainTimeline>
  );
}



function Menu() {
  return (
    <ContainMenu>
      <Logo />
    </ContainMenu>
  );
}

export default HomePage;
