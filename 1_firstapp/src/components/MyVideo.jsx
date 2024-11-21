import React from "react";
import ReactPlayer from "react-player/youtube";

const MyVideo = () => {
  // URL of the YouTube video to be embedded
  const vidUrl = "https://www.youtube.com/watch?v=5uqPJNccHps&ab_channel=MegaBen";

  return (
    // ReactPlayer component to play a YouTube video
    <ReactPlayer
      url={vidUrl}         // URL of the video to be played
      playing={false}      // Set to 'false' so the video doesn't start automatically
      volume={0.5}         // Set the volume level to 50%
      controls={true}      // Enable the video controls (play, pause, volume, etc.)
    />
  );
};

export default MyVideo;
