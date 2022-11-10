import React from "react";
import { createContext } from "react";
export const VideoPlayerContext = createContext();

export const VideoPlayerProvider = ({ children }) => {
    const [videoPlayer, setVideoPlayer] = React.useState("");
  return (
    <VideoPlayerContext.Provider value={{ videoPlayer, setVideoPlayer }}>
      {children}
    </VideoPlayerContext.Provider>
  );
};