

import Logo from "../utilComponents/Logo";
const Hero = () => {
  return (
    <div className="relative bg-black text-white"
    style={{
      backgroundImage: `url(/bg-gradient-top.svg), url(/circles.svg)`,
      backgroundPosition: "left top, center",
      backgroundRepeat: "no-repeat, no-repeat",
    }}>
      <Logo className="mx-auto" src = {"/logo.png"} alt = {"company logo"} width={184} height={61}/>
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
  )
}

export default Hero
