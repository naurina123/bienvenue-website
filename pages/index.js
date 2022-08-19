import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bienvenue </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features
        image="images/feature-img-1.svg"
        background="#d3fbe9"
        heading="What’s Featured"
        body={
          <div className="">
            <h3 className="mt-[2rem]">Bienvenue, my friend!</h3>
            <p className="mt-[.3rem] max-w-[30rem] ">
              Deals made especially for you. Up to 50% off at your favourite
              restaurant
            </p>
            <h3 className="mt-[2rem]">Your convenient partner</h3>
            <p className="mt-[.3rem] max-w-[30rem]">
              Track your savings with our budgeting tool
            </p>
            <h3 className="mt-[2rem]">Pucks</h3>
            <p className="mt-[.3rem] max-w-[30rem]">
              Introducing our loyalty program. Use coupons to accumulate points
              and score big!
            </p>
          </div>
        }
      />
      <Features
        image="images/feature-img-2.svg"
        background="#ffe4b1"
        heading="Pricing"
        body={
          <ul className="list-disc ">
            <li className="">
              <h3 className="mt-[2rem]">Monthly</h3>
            </li>
            <p className="mt-[.3rem] max-w-[30rem] ">$ 10 (1 month)</p>
            <li>
              {" "}
              <h3 className="mt-[2rem]">Quarterly</h3>
            </li>
            <p className="mt-[.3rem] max-w-[30rem]">$ 25 (1 quarter)</p>
            <li>
              <h3 className="mt-[2rem]">Annually</h3>
            </li>
            <p className="mt-[.3rem] max-w-[30rem]">$ 65 (1 year)</p>
          </ul>
        }
      />
      <Features
        image="images/feature-img-3.svg"
        background="#dce6ff"
        heading="Subscribe today & Start Collecting Pucks"
        body={
          <ul className="list-disc">
            <li className="">
              <p className="mt-[.3rem] max-w-[30rem] ">
                Collect pucks by using coupons
              </p>
            </li>

            <li>
              <p className="mt-[.3rem] max-w-[30rem]">
                Collect as many pucks as you can to buy back coupons to your
                favourite restaurants or discount your Bienvenue subscription
                renewal!
              </p>
            </li>
          </ul>
        }
      />
      <Form/>
      <Footer/>
    </div>
  );
}
