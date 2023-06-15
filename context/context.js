// import { createContext, useState, useEffect } from "react"
import { createContext, useState, useEffect } from "react";

export const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(false);
  const [volume, setVolume] = useState(false);
  const [timestamp, setTimestamp] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      let audio = document.querySelector("#audio-element");

      audio.addEventListener(
        "timeupdate",
        function () {
          setTimestamp(secondsToMinSec(audio.currentTime));
        },
        false
      );
    }
  }, [isPlaying]);

  const pause = () => {
    setIsPaused(true);
    document.querySelector("#audio-element").pause();
  };

  const play = () => {
    document.querySelector("#audio-element").play();
    setIsPaused(false);
  };

  const playOnSelect = (song) => {
    try {
      // document.querySelector('#audio-element').src = song.musicUrl
      document.querySelector("#audio-element").src = song.link;
      document.querySelector("#audio-element").play();
      setCurrentSong(song);
      setIsPlaying(true);
      setIsPaused(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const secondsToMinSec = (value) => {
    const minute = Math.round(value / 60);
    let second = Math.round(value % 60);
    second = second >= 10 ? second : "0" + second;
    return minute + ":" + second;
  };

  const updateProgress = (e) => {
    const _progress = e.target.currentTime / e.target.duration;
    setProgress(_progress.toFixed(2) * 100);
  };

  const updateVolume = (e) => {
    try {
      setVolume(e.target.value);
      document.querySelector("#audio-element").volume = e.target.value;
    } catch (e) {
      console.log(e.message);
    }
  };

  const onProgressChange = (e) => {
    const _progress = e.target.value / 100;
    document.querySelector("#audio-element").currentTime =
      _progress * document.querySelector("#audio-element").duration;
  };

  const onVolumeChange = (e) => {
    const _volume = e.target.value / 100;
    document.querySelector("#audio-element").volume = _volume;
  };

  const playNext = (songs) => {
    // const id = songs.findIndex((value) => value.index === currentSong.index);
    const id = ( currentSong.index);
    // console.log("we are in play next in context.js value of id is :", id);
    // console.log("we are in play next in context.js value of songs.length is :", songs.length);
    
    if (songs.length === id ) {
      playOnSelect(songs[0]);
      setCurrentSong(songs[0]);
      return;
    }
    const nid = id+1;

    // console.log("we are in play next in context.js value of nid is :", nid);
    const nextSong = songs[nid-1];
    // console.log("we are in play next in context.js value of next song is :", nextSong);
    
    playOnSelect(nextSong);
  };

  const playPrevious = (songs) => {
    // console.log("we are in play previous in context.js :", songs);
    // console.log("we are in play previous in context.js and current song is :", currentSong);
    // const id = songs.findIndex((value) => value.account === currentSong);
    const id = ( currentSong.index);
    // const id = songs.findIndex( currentSong);
    // console.log("we are in play previous in context.js value of id is :", id);
    if (id === 1) {
      playOnSelect(songs[songs.length - 1]);
      setCurrentSong(songs[songs.length - 1]);
      // setCurrentSong(songs[songs.length - 1].account);
      return;
    }
    const previousSong = songs[id - 2];
    console.log("we are in play previous in context.js and the previous song is :", previousSong);
    // playOnSelect(previousSong.play);
    playOnSelect(previousSong);
  };
  return (
    <SpotifyContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentSong,
        isPaused,
        setIsPaused,
        play,
        pause,
        updateProgress,
        progress,
        playOnSelect,
        onProgressChange,
        playNext,
        playPrevious,
        timestamp,
        updateVolume,
        volume,
        onVolumeChange,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
