import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { SiLinkedin, SiGithub } from "react-icons/si"
const cityImage = "/assets/city.png"

export default function Background() {
  function handleScrollClick() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative min-h-screen w-screen">
      <img
        src={cityImage}
        alt="background"
        className="w-full object-cover saturate-80 brightness-50 fixed z-[-1]"
        style={{ height: "100vh" }}
      />
      <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
        Milosz Wrobel
      </h2>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex gap-6"
        style={{ top: "55vh" }}>
        <a
          href="https://www.linkedin.com/in/milosz-w/"
          className="p-4 bg-slate-800 text-white rounded-full hover:bg-slate-900">
          <SiLinkedin className="w-6 h-6 text-white" />
        </a>

        <a
          href="https://github.com/MiloszWrobel"
          className="p-4 bg-slate-800 text-white rounded-full hover:bg-slate-900">
          <SiGithub className="w-6 h-6 text-white" />
        </a>
      </div>

      <button
        onClick={handleScrollClick}
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-slate-800 text-white rounded-full hover:bg-slate-900 cursor-pointer"
        style={{ top: "68vh" }}>
        <ChevronDownIcon className="w-6 h-4 text-white" />
      </button>
    </div>
  )
}
