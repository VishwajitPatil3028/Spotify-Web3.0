import Nav from "../components/nav";
import Activity from "../components/activity";
import { useEffect, useState } from "react";
import Header from "../components/Header";

import useSpotify from "../hooks/useSpotify";
import UploadModel from "../components/UploadModel";
import Playlist from "../components/playlist";

import { songs } from "../data/songs";
import PlayerControls from "../components/PlayerControls";

console.log("Songs are here :", songs);

const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false);
  const [title, setTitle] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  // const [songs, setSongs] = useState("");

  const { newMusic, getSongs } = useSpotify(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic
  );

  return (
    <div className="flex">
      <Nav/>

      <div className="w-full">
        <Header setShowUploadMusic={setShowUploadMusic} />
        <Playlist songs={songs} />
        <PlayerControls songs={songs} />
         {showUploadMusic && (
          <UploadModel
            obj = {songs}
            setShowUploadMusic={setShowUploadMusic}  />
        )}
      </div>


      {/* <UploadModel
            title={title}
            setTitle={setTitle}
            setShowUploadMusic={setShowUploadMusic}
            musicUrl={musicUrl}
            setMusicUrl={setMusicUrl}
            newMusic={newMusic}
          /> */}

      <Activity />
    </div>
  );
};

export default HomePage;
