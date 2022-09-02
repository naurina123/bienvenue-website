import Fade from "react-reveal/Fade";
import { useState } from "react";

const BarcodeSec = ({ image, background, heading, body, sectionBackground }) => {
  const [show, setShow] = useState(true);
  return (
    <div
      className="bg-no-repeat bg-center bg-cover"
      // style={{
      //   backgroundImage: `url(${sectionBackground})`,
      // }}
    >
      <div className="min-h-[100vh] flex flex-col lg:flex-row items-center justify-center mx-auto lg:container ">
      <div className="flex-1 flex justify-center items-center lg:order-first order-last">
          <div
            className=" lg:rounded-full rounded-full"
            style={{ background: background }}
          ></div>
          <img
            src={image}
            className="w-[10rem] lg:w-[17rem]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </div>
        <div
          className="flex-1 px-[2rem] lg:px-[2rem] flex justify-center flex-col"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h2 className="features-heading">
            {heading}
          </h2>
          {body}
        </div>
       
      </div>
    </div>
  );
};

export default BarcodeSec;
