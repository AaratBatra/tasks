import Head from "next/head";
import React from "react";
import Image from "next/image";
import logo from "./../../public/logo.png";
import Sphere from "../../public/sphere.svg";
import Shield from "../../public/shield.svg";
import circles from "../../public/circles.svg";
import bg_gradient from "../../public/bg-gradient-top.svg";
import { FaApple, FaAndroid } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flashooot Landing Page</title>
        <meta
          name="description"
          content="Collaborate, Work, and Earn with Flashooot."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative bg-black text-white"
        style={{
          backgroundImage: `url(${bg_gradient.src}), url(${circles.src})`,
          backgroundPosition: "left top, center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <header className="flex justify-between items-center p-4">
          <div className="w-1/3"></div>{" "}
          {/* Empty space to push the logo to the center */}
          <div className="flex justify-center w-1/3">
            <Image src={logo} alt="FLASHOOT Logo" width={184} height={61} />{" "}
            {/* Set the exact dimensions */}
          </div>
          <div className="w-1/3 flex justify-end"></div>
        </header>

        <section className="h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Collaborate <span className="text-red-500">{">"}</span> Work{" "}
            <span className="text-red-500">{">"}</span> Earn
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-6">
            Sign up, get verified, and start receiving bookings.
            <br />
            Complete shoots, upload your work, and get paid promptly.
          </p>
          <button className="bg-black text-red-500 border border-red-500 px-6 py-3 rounded-full text-lg sm:text-xl lg:text-2xl transition ease-in-out duration-300 hover:bg-red-500 hover:text-white">
            Partner Today
          </button>
        </section>
      </div>

      <section className="h-screen flex flex-col items-center justify-center text-center text-white bg-black px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-md lg:text-md font-bold mb-4 text-red-500">
          How it works
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">
          Let’s Take You Through a <br /> Step-by-Step Process
        </h3>
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="text-center max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white border border-white rounded-full text-2xl font-bold">
                1
              </div>
            </div>
            <div className="text-2xl font-bold mb-4">
              Onboard and Get Verified
            </div>
            <p>
              Create an account with your details and upload verification
              documents. Once approved, you'll receive a confirmation email and
              become an official partner.
            </p>
          </div>
          <div className="text-center max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white border border-white rounded-full text-2xl font-bold">
                2
              </div>
            </div>
            <div className="text-2xl font-bold mb-4">Receive Bookings</div>
            <p>
              Get booking notifications via the Flashooot app with job details.
              Review and accept bookings that fit your schedule, then confirm
              your availability.
            </p>
          </div>
          <div className="text-center max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white border border-white rounded-full text-2xl font-bold">
                3
              </div>
            </div>
            <div className="text-2xl font-bold mb-4">Shoot and Earn</div>
            <p>
              Arrive on time with your gear, understand client needs, and
              deliver high-quality work. Upload the final files for client
              review; once approved, you'll receive prompt payment.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative h-screen flex flex-col lg:flex-row items-center justify-center text-center text-white bg-black px-4 sm:px-6 lg:px-36"
        style={{
          backgroundImage: `url(${circles.src}), url(${bg_gradient.src})`,
          backgroundPosition: "center, left top",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="relative flex flex-col items-center lg:items-start lg:w-1/2 space-y-8 px-4 lg:px-0">
          <div className="relative">
            <Image src={Shield} alt="Shield" className="relative z-10" />
            <Image
              src={Sphere}
              alt="Sphere"
              className="absolute left-[-20%] top-1/2 transform -translate-y-1/2 z-0"
            />
          </div>
        </div>
        <div className="max-w-2xl lg:w-1/2 mt-10 lg:mt-0 px-4 lg:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            24/7 access to full service customer support
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Access round-the-clock customer assistance for all your needs. Our
            dedicated team ensures help is always available when you need it.
          </p>
        </div>
      </section>

      <section className="h-screen flex flex-col items-center justify-center text-center text-white bg-black px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Onboard with Us Today and Get Pre-Launch Partner Benefits
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6">
          Join us now and enjoy perks reserved for our early partners. Pay a Rs.
          499 onboarding fee, reimbursed to your wallet upon successful
          registration.
        </p>
        <button className="bg-red-500 px-6 py-3 rounded text-lg sm:text-xl lg:text-2xl">
          Pay Rs. 499 Today
        </button>
      </section>

      <footer className="text-white py-6 bg-black">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start space-y-4">
            <Image src={logo} alt="Logo" width={100} height={100} />
            <p className="text-left">
              Flashoot Partner is a platform or service that connects <br />
              Reelmakers with Clients looking for Professional Video Services.
            </p>
            <p>
              © 2024 Flashooot, a product of konchamkoote Pvt. Ltd. All Rights
              Reserved.
            </p>
          </div>
          <div className="flex flex-col space-x-4">
            <h2>Available on all platforms</h2>
            <div>
              <a href="#" className="bg-gray-700 p-2 rounded">
                <FaApple size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded">
                <FaAndroid size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
