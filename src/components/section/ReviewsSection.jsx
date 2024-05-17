export const ReviewsSection = () => {
  return (
    <div className="my-10">
      <div className="relative h-[550px]">
        <img
          src="./src/assets/client_review_bg.jpeg"
          className="h-full w-full object-cover object-center  bg-center bg-cover bg-fixed bg"
        ></img>
        <div className="absolute top-0 left-0 bg-slate-800/60 h-full w-full"></div>
        <div className=" absolute top-[50%] left-[50%]   -translate-x-1/2 -translate-y-1/2 text-center  text-zinc-200 z-10 h-72 flex flex-col items-center justify-center w-[75%] backdrop-blur-md rounded-xl space-y-4">
          <div>
            <h3>Reviews For Clients</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              id recusandae temporibus.
            </p>
            <p>George Params</p>
          </div>
          <div className="flex space-x-2">
            <div className="h-3 w-3 bg-sky-300 rounded-full"></div>
            <div className="h-3 w-3 bg-sky-100/40 rounded-full"></div>
            <div className="h-3 w-3 bg-sky-100/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
