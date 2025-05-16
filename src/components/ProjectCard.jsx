"use client";

export default function ProjectCard({
  icon,
  title,
  text,
  image,
  id,
  hoverColour,
}) {
  return (
    <a href={`/${id}`} className="group">
      <div
        className={`bg-white p-6 mt-4 mr-2 ml-2 rounded-sm shadow-md flex flex-col justify-between h-full  hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 border-t-4 border-slate-600 ${hoverColour}`}
      >
        <div>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-md">
              <img src={icon} className="w-[60px] h-[60px] rounded-md"></img>
            </div>
            <h3 className="text-2xl font-bold text-black  transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-black mt-4 text-md">{text}</p>
        </div>
        <div className="flex justify-center mt-4">
          <img
            src={image}
            className="w-[80%] rounded-lg "
            alt="Project screenshot"
          />
        </div>
      </div>
    </a>
  );
}
