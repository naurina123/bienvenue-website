import { Button } from "@mui/material";
const HeroConsumer = () => {
  return (
    <div className="primary-bg heroConsumer-bg">
      <div className="min-h-[100vh] flex justify-center items-center sm:container mx-auto lg:flex-row flex-col lg:py-auto py-[9rem] px-[2rem]">
        <div
          className="flex-1 text-white"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h1>Spend Less, Earn More</h1>
          {/* <p className="body-1 mt-[2rem]">
              Bienvenue brings you buy one get one & discount offers for
              restaurants and entertainment facilities across Canada.
            </p> */}
          <Button className="text-white p-[1rem] rounded-[12px] h-[55px] w-[170px] my-[2rem]">
            Join us now
          </Button>
        </div>
        <div className="flex-1 flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img
            src="images/consumer-vector.svg"
            className="lg:w-[35rem] lg:h-[35rem] w-[20rem] h-[20rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroConsumer;
