"use client"

export default function ProjectCard({ icon, title, text, image }) {
  return (
    <div className="bg-white p-6 mt-4 mr-2 ml-2 rounded-sm drop-shadow-md flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-4">
          <img src={icon} className="w-[60px] h-[60px] rounded-md"></img>
          <h3 className="text-2xl font-bold text-black">{title}</h3>
        </div>
        <p className="text-black mt-4 text-md">{text}</p>
      </div>
      <div className="flex justify-center mt-4 ">
        <img src={image} className="w-[80%] rounded-lg " alt="Project screenshot" />
      </div>
    </div>
  )
}
