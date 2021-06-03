import React from "react";
import "./SongRow.css";
import { useDataLayerValue } from "./DataLayer.js";
function SongRow({ track }) {
  const [{ uri }, dispatch] = useDataLayerValue();
  return (
    <div
      className="songRow"
      onClick={() => {
        dispatch({
          type: "SET_URI",
          uri: track.uri,
        });
        console.log(track);
      }}
    >
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
