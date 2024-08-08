import React from "react";
import "./App.css";

import background from "./assets/background.png";

import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export default function App() {
  return (
    <>
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          className="pb-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Navbar />
          <Section1 />
        </div>
      </div>
      <Section2 />
      <Section3 />
      <Section4/>
    </>
  );
}
