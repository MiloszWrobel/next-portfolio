import WEBSITES from "../data"
import { SiGithub } from "react-icons/si"

import { useState } from "react"
export default function ProjectDisplay({ projectId }) {
  const [imageArray, setImageArray] = useState(WEBSITES[projectId - 1].displayImages)

  function handleSwap(direction) {
    setImageArray(prevArray => {
      if (direction === "left") {
        return [prevArray[prevArray.length - 1], ...prevArray.slice(0, -1)]
      } else {
        return [...prevArray.slice(1), prevArray[0]]
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-200 relative  ">
      <div className="flex justify-center items-center p-4 border-b-2 bg-gray-100 border-stone-300 fixed min-w-full z-10 ">
        <h1 className=" m-4 top-4 text-3xl text-stone-900 font-bold ">
          {WEBSITES[projectId - 1].title}
        </h1>
        <img src={WEBSITES[projectId - 1].image} className="w-[50px] h-[50px] rounded-2xl" />
      </div>
      <div className=" bg-white  drop-shadow-md rounded-sm p-6 mx-20 mr-50 ml-50">
        <div className=" flex justify-center items-center pt-30 space-x-2 ">
          <button
            className=" w-1/4 transform scale-80  hover:blur-none "
            onClick={() => handleSwap("left")}>
            <img
              src={imageArray[0]}
              className="object-cover w-full h-[150px] max-w-full rounded-2xl justify-self-center drop-shadow-md"
            />
          </button>

          <div className=" w-1/2 transform scale-100">
            <img
              src={imageArray[1]}
              className="object-cover w-auto h-[300px] max-w-full border-slate-700 border-2 justify-self-center drop-shadow-md"
            />
          </div>

          <button
            className=" w-1/4 transform scale-80  hover:blur-none "
            onClick={() => handleSwap("right")}>
            <img
              src={imageArray[2]}
              className="object-cover w-full h-[150px] max-w-full rounded-2xl justify-self-center drop-shadow-md"
            />
          </button>
        </div>
        <div className="  mt-10  ">
          <h2 className="text-black pl-4 text-2xl ">Overview</h2>
          <div
            dangerouslySetInnerHTML={{ __html: WEBSITES[projectId - 1].text }}
            className="text-md text-black leading-relaxed mt-4  p-4"></div>

          <div className="flex justify-between items-center w-full">
            <a
              href={`${WEBSITES[projectId - 1].gitHubLink}`}
              className="p-4 bg-slate-800 text-white rounded-full hover:bg-slate-900">
              <SiGithub className="w-6 h-6 text-white" />
            </a>
            <a
              href="/"
              className="text-2xl text-stone-50 bg-slate-800 rounded-xl p-2 hover:bg-slate-900 hover:text-stone-100">
              Back To Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
