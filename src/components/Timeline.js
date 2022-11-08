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
`;
export const NomeUserFav = styled.span`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 8px;
  align-self: center;
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
`;
export const FavoriteCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  h2{
    font-size: 16px;
    font-weight:bold
  }
  div{
    display: flex;
  }
  section{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 16px;
  }
`;
export const TituloThumb = styled.span`
  padding-top: 8px;
  display: block;
  padding-right: 24px;
  color: ${({ theme }) => theme.textColorBase || "#222222"};
`;
export const ContainTimeline = styled.div`
  background-color: #F9F9F9;
  flex: 1;
  width: 100%;
  padding: 16px;
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
        span {
        }
      }
    }
  }
`;
