
import Button from "../utilComponents/Button"
const Onboard = () => {
  return (
    <section className="h-[50vh] lg:h-screen relative flex flex-col items-center justify-center text-center text-white bg-black px-4 sm:px-6 lg:px-40">
        <div
          id="bgOnboardGradient"
          style={{
            backgroundImage: `url(/bg-onboard-gradient.svg)`,
            backgroundPosition: "center right",
            backgroundSize: "71%",
            backgroundRepeat: "no-repeat, no-repeat",
            position: "absolute",
            zIndex: "0",
            right: "0px",
            top: "-60px",
            height: "100%",
            width: "45%",
          }}
        ></div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Onboard with Us Today and <br /> Get Pre-Launch Partner Benefits
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-center text-gray-500 width-[80%]">
          Join us now and enjoy perks reserved for our early partners. Pay a Rs.
          499 onboarding fee, reimbursed to your wallet upon successful
          registration.
        </p>
        <Button content="Pay Rs. 499 Today"/>
      </section>
  )
}

export default Onboard
