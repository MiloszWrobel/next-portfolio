"use client"

import { useState } from "react"
import Background from "../components/Background"
import Projects from "../components/Projects"
import WEBSITES from "../data"
import ProjectDisplay from "../components/ProjectDisplay"

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
    <div className="overflow-x-hidden">
      <Background />

      {projectSelected === 0 ? (
        <div className="min-h-screen bg-slate-300 grid grid-cols-3 gap-6">{projectsOutput}</div>
      ) : (
        <ProjectDisplay projectId={projectSelected} onReturn={() => handleProjectSelect(0)} />
      )}
    </div>
  )
}

export default App
