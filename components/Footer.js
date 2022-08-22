const Footer = () => {
  return (
    <div className="bg-[#192227] text-white ">
      <div className="lg:container mx-auto flex flex-col lg:flex-row gap-[3rem] p-[3rem]">
        <div className=" flex-1">
          <img src="images/footer-logo.svg" className="mb-[2rem]" />
          <p className="mb-[2rem]">
            Bienvenue brings you buy one get one & discount offers for
            restaurants and entertainment facilities across Canada.
          </p>
          <div className="flex gap-[1rem] ">
            <a href="#" target="_blank"><img src="images/twitter.svg" className="w-[2rem]" /></a>
            <a href="https://www.facebook.com/ORIO-103986585601560/" target="_blank"><img src="images/facebook.svg" className=" w-[2rem]" /></a>
            <a href="https://www.linkedin.com/company/orio.tech/" target="_blank"><img src="images/linkedin.svg" className=" w-[2rem]" /></a>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-[1rem]">
          <h5 className="">Contact</h5>
          <p><a href="mailto:bienvenueco.com">bienvenueco.com</a></p>
          <p><a href="tel:+14164525630">+1 (416) 452 - 5630</a></p>
          <p>
            1609 - 16 Harrison Garden Blvd, North York, Toronto, On, M2N 7J6
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-[1rem]">
          <p>
            Subscribe to get information, latest news and other interesting
            offers about
          </p>
          <div className="flex justify-start items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="rounded-l-md p-[1rem]  bg-[#323C41] h-[4rem] "
            />
            <button className="bg-black rounded-r-md w-[100px] h-[4rem] lg:text-[1rem] text-[.75rem] hover:shadow-md hover:bg-[#fcc53d] hover:transition hover:ease-in">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="border-t text-center p-[2rem]">
        <p>Copyright 2022.<a href="https://uat.bienvenueco.com/" >Bienvenue.</a> All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
