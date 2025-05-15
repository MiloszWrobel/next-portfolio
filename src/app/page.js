"use client"

import { useState } from "react"
import Background from "../components/Background"
import Projects from "../components/Projects"
import WEBSITES from "../data"
import ProjectDisplay from "../components/ProjectDisplay"
import ProjectCard from "@/components/ProjectCard"

function App() {
  const [projectSelected, setProjectSelected] = useState(0)

  function handleProjectSelect(projectId) {
    setProjectSelected(projectId)
  }

  const projectsOutput = WEBSITES.map(current => (
    <Projects
      key={current.id}
      image={current.image}
      title={current.title}
      onClick={() => handleProjectSelect(current.id)}
    />
  ))

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

{
  /* {projectSelected === 0 ? (
        <div className="min-h-screen bg-slate-300 grid grid-cols-3 gap-6">{projectsOutput}</div>
      ) : (
        <ProjectDisplay projectId={projectSelected} onReturn={() => handleProjectSelect(0)} />
      )} */
}
