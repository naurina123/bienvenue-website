const Footer = () => {
  return (
    <div className="bg-[#192227] text-white ">
      <div className="lg:container mx-auto flex flex-col lg:flex-row gap-[3rem] p-[3rem]">
        <div className=" flex-1">
          <img src="images/footer-logo.svg" className="mb-[2rem]" />
          <p className="body-2 mb-[2rem]">
            Bienvenue brings you buy one get one & discount offers for
            restaurants and entertainment facilities across Canada.
          </p>
          <div className="flex gap-[1rem] ">
            <img src="images/twitter.svg" className="w-[2rem]" />
            <img src="images/facebook.svg" className=" w-[2rem]" />
            <img src="images/linkedin.svg" className=" w-[2rem]" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-[1rem]">
          <h5 className="">Contact</h5>
          <p>bienvenueco.com</p>
          <p>+1 (416) 452 - 5630</p>
          <p>
            1609 - 16 Harrison Garden Blvd, North York, Toronto, On, M2N 7J6
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-[1rem]">
          <p>
            Subscribe to get information, latest news and other interesting
            offers about
          </p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="rounded-l-md p-[1rem]  bg-[#323C41] h-[4rem]"
            />
            <button className="bg-black rounded-r-md w-[100px] h-[4rem]  text-[.75rem]">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="border-t text-center p-[2rem]">
        <p>Copyright 2022. Bienvenue. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
