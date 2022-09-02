import Fade from "react-reveal/Fade";
import { useState } from "react";

const FeaturesSwap = ({ image, background, heading, body, sectionBackground }) => {
  const [show, setShow] = useState(true);
  return (
    <div
      className="bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${sectionBackground})`,
      }}
    >
      <div className="min-h-[100vh] flex flex-col lg:flex-row items-center justify-center mx-auto lg:container p-[3rem] gap-[2rem] lg:gap-[5rem]">
       
        <div className="relative">
          <div
            className=" lg:w-[30rem] lg:h-[30rem] lg:rounded-full w-[20rem] h-[20rem] rounded-full absolute"
            // style={{ background: background }}
          ></div>
          <div
            className="flex-1 relative z-[100]"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 className="features-heading features-swap w-[18rem] lg:w-[40rem]  mb-[2rem]">
              {heading}
            </h2>
            {body}
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={image}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSwap;
