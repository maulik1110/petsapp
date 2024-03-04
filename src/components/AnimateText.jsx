import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";

const AnimateText = () => {
  return (
    <div className="main mt-10 text-black flex justify-between items-center py-[1vw] text-xl">
      <Marquee className="mq-container" speed={80} gradient={false} pauseOnHover>
        <h1 className="text bg-slate-700 rounded">HYGIENE</h1>
        <h1 className="text font-serif bg-orange-200 rounded">FOOD</h1>
        <h1 className="text font-thin bg-sky-400 rounded">CLOTHES</h1>
        <h1 className="text font-extrabold bg-amber-400 rounded">MEDICINE</h1>
        <h1 className="text font-extralight bg-lime-700 rounded">HYGIENE</h1>
        <h1 className="text font-black bg-slate-600 rounded">FOOD</h1>
        <h1 className="text font-mono bg-cyan-300 rounded">CLOTHES</h1>
        <h1 className="text bg-purple-200 rounded">MEDICINE</h1>
      </Marquee>
    </div>
  );
};

export default AnimateText;
