import React from "react";
import "./Login.css";
import { LoginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        className="login__img"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify Logo"
      />
      <a href={LoginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
