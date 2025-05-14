import WEBSITES from "../data";
import { SiGithub } from "react-icons/si";

import { useState } from "react";
export default function ProjectDisplay({ projectId, onReturn }) {
  const [imageArray, setImageArray] = useState(
    WEBSITES[projectId - 1].displayImages
  );

  function handleSwap(direction) {
    setImageArray((prevArray) => {
      if (direction === "left") {
        return [prevArray[prevArray.length - 1], ...prevArray.slice(0, -1)];
      } else {
        return [...prevArray.slice(1), prevArray[0]];
      }
    });
  }

  function handleLinkClick(link) {
    window.open(link, "_blank");
  }

  return (
    <div className="min-h-screen bg-slate-300 relative  ">
      <h1 className=" absolute left-1/2 transform -translate-x-1/2 top-4 text-6xl text-stone-900 ">
        {WEBSITES[projectId - 1].title}
      </h1>
      <button
        className=" absolute top-4 right-4 text-2xl text-stone-50 place-self-center justify-end bg-slate-800 rounded-xl p-2 hover:bg-slate-900 hover:text-stone-100 "
        onClick={onReturn}
      >
        Back To Menu
      </button>
      <div className="flex justify-center items-center pt-28 space-x-2">
        <button
          className=" w-1/4 transform scale-80  hover:blur-none "
          onClick={() => handleSwap("left")}
        >
          <img
            src={imageArray[0]}
            className="object-cover w-full h-[250px] max-w-full rounded-2xl"
          />
        </button>

        <div className=" w-1/2 transform scale-100">
          <img
            src={imageArray[1]}
            className="object-cover w-auto h-[600px] max-w-full border-slate-700 border-2 justify-self-center"
          />
        </div>

        <button
          className=" w-1/4 transform scale-80  hover:blur-none "
          onClick={() => handleSwap("right")}
        >
          <img
            src={imageArray[2]}
            className="object-cover w-full h-[250px] max-w-full rounded-2xl"
          />
        </button>
      </div>
      <div className="pt-20 mx-20 ">
        <h2 className="text-4xl font-semibold text-stone-900 border-b-4 border-stone-700 inline-block mb-4">
          {WEBSITES[projectId - 1].title}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: WEBSITES[projectId - 1].text }}
          className="text-lg text-stone-800 leading-relaxed mt-4 border-2 border-slate-700 p-4"
        ></div>

        <button
          onClick={() => handleLinkClick(WEBSITES[projectId - 1].gitHubLink)}
          className="p-4 bg-slate-800 text-white rounded-full hover:bg-slate-900 mt-4 mb-4"
        >
          <SiGithub className="w-6 h-6 text-white " />
        </button>

        <button
          className=" absolute bottom-4 right-4 text-2xl text-stone-50 place-self-center justify-end mt-4 bg-slate-800 rounded-xl p-2 hover:bg-slate-900 hover:text-stone-100 "
          onClick={onReturn}
        >
          Back To Menu
        </button>
      </div>
    </div>
  );
}
