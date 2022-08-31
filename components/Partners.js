import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partners = () => {
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
    <div className=" text-[#2E2E2E]  min-h-[100vh]">
      <div className="flex justify-center items-center flex-col w-full lg:w-[50rem] mx-auto relative z-[100] px-[2rem] py-[4rem]">
        <img src="images/waves.svg" className="absolute right-0 top-0" alt="" />
        <img
          src="images/waves.svg"
          className="absolute left-0 bottom-0 "
          alt=""
        />
        <h2 className="my-[5rem]">What our partners say about the BIENVENUE</h2>
        <p className="mb-[3rem] text-[white]">Merchants Sign Up</p>
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
        className="my-[3rem] py-[4rem] relative"
      >
        <div className="flex justify-center ">
          <img src="images/testimonial-bg.svg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
            rhoncus urna facilisis quisque orci lectus sed nulla. amet,
            consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus
            sed nulla. amet, consectetur adipiscing
          </p>
        </div>
        <div className="flex justify-center">
          <img src="images/testimonial-bg.svg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
            rhoncus urna facilisis quisque orci lectus sed nulla. amet,
            consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus
            sed nulla. amet, consectetur adipiscing
          </p>
        </div>
        <div className="flex justify-center">
          <img src="images/testimonial-bg.svg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
            rhoncus urna facilisis quisque orci lectus sed nulla. amet,
            consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus
            sed nulla. amet, consectetur adipiscing
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Partners;
