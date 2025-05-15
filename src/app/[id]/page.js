"use client"

import { use } from "react"
import ProjectDisplay from "@/components/ProjectDisplay"

export default function ProjectCard({ params }) {
  const { id } = use(params)

  return <ProjectDisplay projectId={id} />
}
