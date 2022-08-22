import Pulse from 'react-reveal/Pulse';
const Form = () => {
  return (
    <div className="primary-bg text-white relative">
      <img
        src="images/form-bg-1.svg"
        className="absolute right-0 bottom-0 lg:w-[35rem] w-[15rem]"
        alt=""
      />
      <img
        src="images/form-img-2.svg"
        className="absolute left-0 top-0 lg:w-[15rem] w-[10rem]"
        alt=""
      />
      <img
        src="images/form-img-3.svg"
        className="absolute left-0 bottom-0 lg:w-[15rem] w-[10rem]"
        alt=""
      />
      <div className="min-h-[100vh] flex justify-center items-center flex-col w-full lg:w-[50rem] mx-auto relative z-[100] px-[2rem]">
        <h2>Partner with us</h2>
        <p className="mb-[3rem]">Merchants Sign Up</p>
        <div className="flex flex-col md:flex-row gap-[1rem] mb-[1rem] w-full">
          <input
            type="text"
            placeholder="Business name"
            className="rounded-md p-[1rem] flex-1"
          />
          <input
            type="text"
            placeholder="Address"
            className="rounded-md p-[1rem] flex-1"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-[1rem] mb-[1rem] w-full">
          <input
            type="text"
            placeholder="Email"
            className="rounded-md p-[1rem] flex-1"
          />
          <input
            type="text"
            placeholder="Phone"
            className="rounded-md p-[1rem] flex-1"
          />
        </div>
        <div className="flex  w-full">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="rounded-md p-[1rem] flex-1"
          ></textarea>
        </div>
        
        <div className="flex items-start w-full ">
          <button className="bg-[#212121] hover:shadow-lg rounded-md w-[182px] h-[3rem] mt-[1rem] hover:border-solid hover:border-2 border-[#fcc53d]  hover:border-[#fcc53d]  hover:mix-blend-overlay hover:transition hover:ease-in">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
