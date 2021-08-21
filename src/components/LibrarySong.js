import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    // change the active state
    const newSongs = songs.map((curr) => {
      if (curr.id === song.id) {
        return {
          ...curr,
          active: true,
        };
      } else {
        return {
          ...curr,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    // check if the song is playings
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
