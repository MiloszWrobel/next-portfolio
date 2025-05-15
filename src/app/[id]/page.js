"use client"

import { use } from "react"
import WEBSITES from "../../data"
import ProjectDisplay from "@/components/ProjectDisplay"

export default function ProjectCard({ params }) {
  const { id } = use(params)
  const icon = WEBSITES[id - 1].image
  const text = WEBSITES[id - 1].text
  const images = WEBSITES[id - 1].displayImages
  const title = WEBSITES[id - 1].title
  const leftArrow = "<"
  const rightArrow = ">"

  return (
    <ProjectDisplay projectId={id} />

    // <div className="min-h-screen w-full h-full bg-gray-100 p-4 overflow-hidden">
    //   <div className="flex justify-center items-center">
    //     <h2 className="  text-5xl font-bold text-slate-700">Milosz Wrobel</h2>
    //   </div>
    //   <div className="bg-white p-6 drop-shadow-md rounded-sm mt-6 ">
    //     <div className="flex gap-6">
    //       <div className="w-1/2">
    //         <div className="flex items-center gap-4">
    //           <img src={icon} className="w-[60px] h-[60px] rounded-md"></img>
    //           <h3 className="text-2xl font-bold text-black">{title}</h3>
    //         </div>
    //         <div
    //           className="text-black mt-4 text-lg"
    //           dangerouslySetInnerHTML={{ __html: text }}></div>
    //       </div>

    //       <div className="w-1/2 justify-center items-center flex">
    //         <p className="text-black text-6xl m-6">{leftArrow}</p>
    //         <img src={images[0]} className="w-full rounded-lg " alt="Project screenshot" />
    //         <p className="text-black text-6xl m-6">{rightArrow}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
