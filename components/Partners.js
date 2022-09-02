import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const Partners = () => {
  const [testimonial, setTestimonial] = useState([
    {
      avatar: "",
      text: " quisque orci lectus sed nulla. amet, consectetur adipiscing",
    },
    {
      avatar: "",
      text: "In eu rhoncus urna facilisis quisque orci lectus sed nulla. amet, consectetur adipiscing",
    },
    {
      avatar: "",
      text: "consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus sed nulla. amet, consectetur adipiscing",
    },
  ]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" text-[#2E2E2E] min-h-[100vh] px-[2rem] lg:px-[2rem]">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-center mb-2">
          What our partners say about the BIENVENUE
        </h2>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="h-[40rem]"
      >
        {testimonial.map((test) => (
          <div className="relative flex justify-center items-center ">
            <img
              src="images/waves1.svg"
              className="absolute bottom-0 left-[21rem] lg:bottom-6 lg:left-[21rem]"
            />
            <img
              src="images/waves.svg"
              className="absolute -top-9 right-[40rem] lg:-top-9 lg:right-[20rem]"
            />
            <img src="images/testimonial-bg.svg" className="z-[10]" />
            <p className="absolute w-[18rem] py-[4rem] mb-[3rem] text-white z-[10] text-[0.95rem] lg:w-[30rem] lg:py-[0rem]">
              {test.text}
            </p>
            <img
              src="images/avatar.svg"
              className="z-[10] rounded absolute -bottom-[6.25rem] left-[21.5rem] w-[7rem] h-[7rem] lg:-bottom-[6.25rem] lg:left-[26.5rem] lg:w-[9rem] lg:h-[9rem]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Partners;
