import { Button } from "@mui/material";
const Register = () => {
  return (
    <div className="lg:container mx-auto flex flex-col md:flex-row gap-[2rem] justify-center item-center m-h-[100vh]">
      <form className="flex-1 p-[3rem]">
        <img src="images/register-logo.svg" className="mb-[5rem]" />
        <input
          type="text"
          placeholder="Business name"
          className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b] w-full "
        />
        <div className="  flex flex-col md:flex-row md:gap-[2rem] justify-between">
          <input
            type="text"
            placeholder="Address"
            className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b] flex flex-1 w-full"
          />
          <input
            type="text"
            placeholder="Business name"
            className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b]  flex flex-1 w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b] w-full"
        />

        <input
          type="text"
          placeholder="Address"
          className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b] w-full"
        />
        <input
          type="text"
          placeholder="Address"
          className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b] w-full"
        />
        <div className="flex flex-1 flex-col ">
          <Button className="bg-[#fdb912] hover:bg-[#fdb912] text-white p-[1rem] rounded-[12px] h-[55px] w-[170px]">
            Join us now
          </Button>
        </div>
      </form>
      <div className="flex-1 flex justify-center md:justify-end p-[3rem]">
        <img src="images/login-bg.svg" alt="" />
      </div>
    </div>
  );
};

export default Register;
