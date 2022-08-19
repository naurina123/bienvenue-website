const Hero = () => {
  return (
    <div className="primary-bg hero-bg">
      <div className="min-h-[100vh] flex flex-col lg:flex-row items-center justify-center mx-auto lg:container p-[3rem] gap-[2rem] lg:gap-[5rem]">
        <div className="flex-1 text-white">
          <h1>Spend Less, Do More</h1>
          <p className="body-1 mt-[2rem]">
            Bienvenue brings you buy one get one & discount offers for
            restaurants and entertainment facilities across Canada.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="images/hero.svg" className="w-[35rem]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
