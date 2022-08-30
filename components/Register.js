import { Button } from "@mui/material";
import Layout from "../components/Layout";

const Register = (image, background, heading, body, sectionBackground) => {
  return (
    <div>
      <Layout>
        <div className="min-h-[100vh] flex justify-center items-center sm:container mx-auto">
          <div className="flex flex-wrap w-full ">
            <div className="flex flex-1 flex-col">
              <img
                src="images/register-logo.svg"
                className="w-[128.12px] h-[74px] my-[3rem]"
              />
              <input
                type="text"
                placeholder="Business name"
                className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b] "
              />
              <div className="gap-[1rem]  flex justify-between">
                <input
                  type="text"
                  placeholder="Address"
                  className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b] flex flex-1"
                />
                <input
                  type="text"
                  placeholder="Business name"
                  className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b]  flex flex-1"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b]"
              />

              <input
                type="text"
                placeholder="Address"
                className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b]"
              />
              <input
                type="text"
                placeholder="Address"
                className="rounded-md p-[1rem] mb-[1.75rem] bg-[#8080802b]"
              />
              <div className="flex flex-1 flex-col ">
                <Button className="bg-[#fdb912] hover:bg-[#fdb912] text-white p-[1rem] rounded-[12px] h-[55px]">
                  Join us now
                </Button>
              </div>
              <div className="flex flex-1 flex-col py-[3rem]">
                <p className="text-[#8A8A8A]">
                  By signing up you are agree to our
                  <span className="px-[0.75rem] text-[#4844FF]">
                    privacy policy
                  </span>
                </p>
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center px-[3rem]">
              <div
                className=" lg:h-[30rem] lg:rounded-full h-[20rem] rounded-full"
                style={{ background: background }}
              ></div>
              <img
                src="images/login-bg.svg"
                className="w-[30rem] lg:w-[30rem] absolute transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Register;
