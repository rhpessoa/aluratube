import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { VideoPlayerContext } from "../src/common/context/VideoPlayer";
import { useContext } from "react";
import { Logo } from "../src/components/Menu";
import DarkModeSwitch from "../src/components/Menu/DarkModeSwitch";

const ContainVideoPlayer = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  display: flex;
  max-height: 100vh;
  height: 100%;
  flex-direction: column;
  div {
    margin: auto;
  }
`;
const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  div {
    margin: 0;
  }
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
  }
  .text {
    fill: ${({ theme }) => theme.textColorBase || "#222222"};
  }
  .arrow {
    border: solid ${({ theme }) => theme.textColorBase || "#222222"};
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
  }
  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  a {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
const VideoPlayerContain = styled.section`
  background-color: ${({ theme }) => theme.backgroundBase};
  padding-top: 57px;
`;
export const InfoVideo = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  img {
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 15px;
  }
  h2 {
    margin-top: 25px;
    text-align: center;
  }
`;

export default function VideoPlayer() {
  const { videoPlayer } = useContext(VideoPlayerContext);

  return (
    <ContainVideoPlayer>
      <StyledMenu>
        <Link href="/">
          <p>
            <a>
              <i class="arrow left"></i>
            </a>
          </p>
        </Link>
        <Logo />
        <DarkModeSwitch />
      </StyledMenu>
      <VideoPlayerContain>
        <div>
          {videoPlayer ? (
            <ReactPlayer
              width={"1024px"}
              height={"560px"}
              controls
              url={videoPlayer.url}
            />
          ) : (
            ""
          )}
        </div>
      </VideoPlayerContain>
      <InfoVideo>
        <h2>{videoPlayer.title}</h2>
        <img src={videoPlayer.logoCanal} />
      </InfoVideo>
    </ContainVideoPlayer>
  );
}
