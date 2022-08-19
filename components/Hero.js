import Fade from 'react-reveal/Fade';
const Hero = () => {
  return (
    <div className="primary-bg hero-bg">
      <div className="min-h-[100vh] flex flex-col lg:flex-row items-center justify-center mx-auto lg:container p-[3rem] gap-[2rem] lg:gap-[5rem]">
       <Fade left duration={1500}><div className="flex-1 text-white">
          <h1>Spend Less, Do More</h1>
          <p className="body-1 mt-[2rem]">
            Bienvenue brings you buy one get one & discount offers for
            restaurants and entertainment facilities across Canada.
          </p>
        </div>
        </Fade> 
        <div className="flex-1 flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img src="images/hero.svg" className="w-[35rem]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
