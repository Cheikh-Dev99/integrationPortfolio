import React from "react";
import { ProjectCard, getProjects } from "../utils/Utils";
import img1 from "../assets/g1.png";
import img2 from "../assets/g2.png";
import img3 from "../assets/g3.png";
import img4 from "../assets/g4.png";
import img5 from "../assets/g5.png";
import img6 from "../assets/g6.png";

export default function Section3() {

  const images = {
    volkeno: img1,
    fewnu: img2,
    fewnuMobile: img3,
    volkeno2: img4,
    BakeliPayment: img5,
    MixteFeewnu: img6,
  };

  const projects = getProjects(images);

  return (
    <div className="container mx-3 my-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-10">Mon Portfolio</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-8 pb-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

