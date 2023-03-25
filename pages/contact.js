import Head from "next/head";
import Image from "next/image";
import "./components/writer.js";
import Navbar from "./components/Navbar";
import React from "react";

function contact() {
  return (
    <div>
      <Head>
        <title>Welcome to my profile 👾</title>
      </Head>

      <h1>Arjun P</h1>
      <Navbar />
      <p className="bio">You can contact me through any of this!</p>
      <div className="contacts">
        <p>Email : arjunajju2004@gmail.com</p>
        <p>Twitter : @arjunpajju</p>
        <p>Github : arjun2004</p>
      </div>
    </div>
  );
}

export default contact;
