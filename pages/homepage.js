import Nav from "../components/nav";
import Activity from "../components/activity";
import { useEffect, useState } from "react";
import Header from "../components/Header";

import useSpotify from "../hooks/useSpotify";
import UploadModel from "../components/UploadModel";
import Playlist from "../components/playlist";

import { songs } from "../data/songs";
import PlayerControls from "../components/PlayerControls";

// console.log("Songs are here :", songs);

const id  = 0;

const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false);
  const [title, setTitle] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [songs, setSongs] = useState([]);
  
  const [id, setID] = useState(1); 

  const incrementCount = () => {
    setID(id + 1);
    return id
  };
  // const [userData, setUserdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/songs")
      .then((response) => response.json())
      .then((json) => setSongs(json));
  }, []);

  
  const rows = songs.map((row,index) => ({
    index: index+1,
    title: row.titleser,
    artiste: row.artistser,
    link: row.musicurlser,
    plays: "1,324",
    songLength: "4:50",
    album: "The Random House",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
  }));

  // console.log("row Songs are here Homepage :", rows);
  // console.log("songs Songs are here Homepage :", songs);

  const { newMusic, getSongs } = useSpotify(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic
  );

  return (
    <div className="flex">
      <Nav />

      <div className="w-full">
        <Header setShowUploadMusic={setShowUploadMusic} />
        <Playlist songs={rows} />
        <PlayerControls songs={rows} />
        {showUploadMusic && (
          <UploadModel obj={rows} setShowUploadMusic={setShowUploadMusic} />
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
