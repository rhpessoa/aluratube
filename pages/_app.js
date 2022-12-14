import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/components/GlobalStyle";
import { VideoPlayerProvider } from "../src/common/context/VideoPlayer";
import VideoPlayer from "./videoplayer";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/common/context/ColorMode";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};
function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"dark"}>{props.children}</ColorModeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  const contexto = React.useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <GlobalStyle />
      <VideoPlayerProvider>
        <Component {...pageProps} />
      </VideoPlayerProvider>
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
