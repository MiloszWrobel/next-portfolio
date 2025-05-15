"use client"

import Background from "../components/Background"
import WEBSITES from "../data"
import ProjectCard from "@/components/ProjectCard"

function App() {
  return (
    <div className="overflow-x-hidden ">
      <Background />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-4 overflow-hidden bg-gray-200 pl-10 pr-10 pt-5 ">
        {WEBSITES.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            icon={project.image}
            text={project.condensedText}
            image={project.displayImages[0]}
            id={project.id}
          />
        ))}
      </div>
    </div>
  )
}

export default App
