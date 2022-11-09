import styled from "styled-components";
export const VideoCard = styled.section`
  width: 100%;
  padding: 0;
  overflow: hidden;
  padding: 16px;
`;
export const PlayListName = styled.h2`
  font-size: 16px;
  margin-bottom: 16px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.textColorBase || "#222222"};
`;
export const NomeUserFav = styled.span`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 8px;
  align-self: center;
  color: ${({ theme }) => theme.textColorBase || "#222222"};
`;
export const UserImgFav = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const ImageThumb = styled.img`
  aspect-ratio: 16/9;
  font-weight: 500;
  object-fit: cover;
  width: 100%;
  max-width: 210px;
  height: auto;
  border-radius: 12px;
`;
export const FavoriteCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-bottom: 22px;
  h2 {
    color: ${({ theme }) => theme.textColorBase || "#222222"};
    font-size: 16px;
    font-weight: bold;
  }
  div {
    display: flex;
  }
  section {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 16px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
export const LogoCanal = styled.img`
  width: 100%;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  max-width: 36px;
  margin-right: 5px;
  margin-top: 5px;
`;
export const TituloThumb = styled.span`

  padding-top: 8px;
  display: block;
  font-size: 16px;
  
  text-align: left;
  color: ${({ theme }) => theme.textColorBase || "#222222"};
`;
export const InfoVideo = styled.section`
display: flex;
flex-direction: row-reverse;
margin-bottom: 10px;
`
export const ContainTimeline = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  section {
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        color: inherit span {

        }
      }
    }
  }
`;
export default function Timeline({ valorDaBusca, ...propriedades }) {
  const playlistNames = Object.keys(propriedades.playlists);
  const favoritosNames = Object.keys(propriedades.favoritos);
  return (
    <ContainTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <VideoCard key={playlistName}>
            <PlayListName>{playlistName}</PlayListName>
            <div>
              {videos
                .filter((video) => {
                  const titleFiltrado = video.title.toLowerCase();
                  const valorDaBuscaFiltado = valorDaBusca.toLowerCase();
                  return titleFiltrado.includes(valorDaBuscaFiltado);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <ImageThumb src={video.thumb} />
                      <InfoVideo>
                        <TituloThumb>{video.title}</TituloThumb>
                        <LogoCanal src={video.logoCanal} />
                      </InfoVideo>
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
          <FavoriteCards key={favoritosName}>
            <h2>{favoritosName}</h2>
            <div>
              {favoritos.map((favorito) => {
                return (
                  <section key={favorito.id}>
                    <UserImgFav
                      src={`https://github.com/${favorito.user_nickname}.png`}
                    />

                    <NomeUserFav>
                      <a
                        href={`https://github.com/${favorito.user_nickname}`}
                      >{`@${favorito.user_nickname}`}</a>
                    </NomeUserFav>
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
