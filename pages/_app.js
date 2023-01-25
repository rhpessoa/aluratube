import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/Global";
import { VideoPlayerProvider } from "../src/context/VideoPlayer";
import ColorModeProvider, { ColorModeContext } from "../src/context/ColorMode";
import { theme } from "../src/styles/Theme";

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"dark"}>{props.children}</ColorModeProvider>
  );
}

function Root({ Component, pageProps }) {
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
      <Root {...props} />
    </ProviderWrapper>
  );
}
