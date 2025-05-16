"use client";

import Background from "../components/Background";
import WEBSITES from "../data";
import ProjectCard from "@/components/ProjectCard";

function App() {
  return (
    <div className="overflow-x-hidden ">
      <Background />
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 py-10 bg-gray-100
      "
      >
        {WEBSITES.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            icon={project.image}
            text={project.condensedText}
            image={project.displayImages[0]}
            id={project.id}
            hoverColour={project.hoverColour}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
