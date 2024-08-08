import React from "react";
import { Tabs, experiences } from "../utils/Utils";

export default function Section4() {
  return (
    <>
      <div className="p-6 mx-3 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 w-full text-center">
          MES EXPÉRIENCES
        </h2>

        {experiences.map((experience, index) => (
          <Tabs
            key={index}
            h3={experience.h3}
            p1={experience.p1}
            p2={experience.p2}
          />
        ))}
      </div>
    </>
  );
}
