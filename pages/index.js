import Head from "next/head";
import Image from "next/image";
import "./components/writer.js";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to my profile 👾</title>
      </Head>

      <h1>Arjun P</h1>
      <Navbar />
      <div className="bio">
        Hello Guys! . My name is Arjun P and I am a Computer Science engineering student from India. I love computers
        and softwares.{" "}
        <div>
          So, <b>Welcome to my area of internet!</b>
        </div>
      </div>
      
    </div>
  );
}
