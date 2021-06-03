import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useDataLayerValue } from "./DataLayer.js";
import "./Footer.css";

function Footer({ spotify }) {
  const [{ token, uri }] = useDataLayerValue();

  return (
    <SpotifyPlayer
      className="footer"
      token={token}
      showSaveIcon
      play={true}
      uris={uri ? [uri] : []}
    />
  );
}

export default Footer;
