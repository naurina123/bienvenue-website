const Features = ({ image, background, heading, body }) => {
  return (
    <div className="">
      <div className="min-h-[100vh] flex flex-col lg:flex-row items-center justify-center mx-auto lg:container p-[3rem] gap-[2rem] lg:gap-[5rem]">
        <div className="flex-1 flex justify-center items-center relative">
          <div
            className=" lg:w-[40rem] lg:h-[40rem] lg:rounded-full w-[20rem] h-[20rem] rounded-full"
            style={{ background: background }}
          ></div>
          <img
            src={image}
            className="w-[10rem] lg:w-[15rem] absolute transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </div>
        <div className="flex-1">
          <h2 className="features-heading w-[18rem] lg:w-[40rem]  mb-[2rem]">
            {heading}
          </h2>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Features;
