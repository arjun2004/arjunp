import Head from "next/head";
import Image from "next/image";
//import "./components/writer.js";
import Navbar from "./components/Navbar";

export default function about() {
  return (
    <div>
      <Head>
        <title>Welcome to my profile 👾</title>
      </Head>

      <h1>Arjun P</h1>
      <Navbar />
      <p className="bio">
        Hi, I am a Computer Science engineering student. And I love computers and tech stuff. This website is like a profile of mine. And it is still in development. Need to do a lot of improvements to this website. Thank you for visiting this site. 
      </p>
    </div>
  );
}

