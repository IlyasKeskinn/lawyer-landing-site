export const SlideItem = ({slide}) => {
  return (
    <div id="slide" className="relative ">
      <img
        src={`./src/assets/${slide.img}`}
        className="h-full w-full object-cover object-center  bg-center bg-cover bg-fixed bg"
      ></img>
      <div className="absolute top-0 left-0 bg-slate-800/35 h-full w-full"></div>
      <div
        id="slide_caption"
        className="absolute top-[50%] left-[50%]   -translate-x-1/2 -translate-y-1/2 text-center w-full text-zinc-200 z-10"
      >
        <h3 className="mb-3 animate-slideInTop">{slide.title}</h3>
        <h5 className="mb-3 animate-slideInRight delay-100">
          {slide.desc}
        </h5>
        <button className="py-2 px-4 bg-slate-400/50 rounded cursor-pointer hover:bg-slate-400  animate-slideInLeft duration-300">
          Discover More...
        </button>
      </div>
    </div>
  );
};


