export default function Projects({ image, title, onClick }) {
  return (
    <div className="flex justify-center items-center ">
      <button className=" place-self-center" onClick={onClick}>
        <div className="transform transition-transform duration-200 hover:scale-125 flex flex-col items-center">
          <img src={image} className="size-60 place-self-center rounded-lg" />
          <p className="text-2xl text-stone-900  place-self-center">{title}</p>
        </div>
      </button>
    </div>
  );
}
