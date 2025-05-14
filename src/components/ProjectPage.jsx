"use client"

export default function ProjectCard({ icon, title, text, image }) {
  return (
    <div className="bg-slate-300 p-6 mt-4 mr-4 ml-4 rounded-sm">
      <div className="flex gap-6">
        <div className="w-1/2">
          <div className="flex items-center gap-4">
            <img src={icon} className="w-[60px] h-[60px] rounded-md"></img>
            <h3 className="text-2xl font-bold text-black">{title}</h3>
          </div>
          <div className="text-black mt-2" dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>

        <div className="w-1/2 justify-center items-center flex">
          <img src={image} className="w-full rounded-lg " alt="Project screenshot" />
        </div>
      </div>
    </div>
  )
}
