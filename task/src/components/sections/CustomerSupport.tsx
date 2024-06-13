import Logo from "../utilComponents/Logo"

const CustomerSupport = () => {
  return (
    <div className="wrapperCustomerServiceSupport h-screen bg-black relative">
        <div
          className="lg:w-[50%] max-lg:w-[90%]"
          style={{
            backgroundImage: `url(/bg-customer-gradient.svg)`,
            backgroundPosition: "top left",
            backgroundSize: "75%",
            backgroundRepeat: "no-repeat, no-repeat",
            position: "absolute",
            zIndex: "0",
            left: "0px",
            top: "-60px",
            height: "100%"
          }}
        ></div>
        <div
          className="lg:w-[50%] max-lg:w-[90%]"
          style={{
            backgroundImage: `url(/customer-looper-bg.svg)`,
            backgroundPosition: "center right",
            backgroundSize: "75%",
            backgroundRepeat: "no-repeat, no-repeat",
            position: "absolute",
            zIndex: "0",
            right: "0px",
            top: "-60px",
            height: "100%"
          }}
        ></div>
        <section
          className="h-screen flex flex-col lg:flex-row items-center justify-center text-center text-white bg-black px-4 sm:px-6 lg:px-36"
          // style={{
          //   backgroundImage: `url(${circles.src}), url(${bg_gradient.src})`,
          //   backgroundPosition: "center, left",
          //   backgroundRepeat: "no-repeat, no-repeat",
          // }}
        >
          <div className="relative flex flex-col items-center lg:items-start lg:w-1/2 space-y-8 px-4 lg:px-0">
            <div id="shield" className="relative lg:w-[275px] max-lg:w-[200px] max-lg:mx-auto">
              <Logo src={"/shield.svg"} alt="Shield" className="relative z-10" width={184} height={61} />
              <Logo
                src={"/sphere.svg"}
                alt="Sphere"
                className="absolute left-[-20%] top-1/2 transform -translate-y-1/2 z-0"
                width={184} 
                height={61}
              />
            </div>
          </div>
          <div className="max-w-2xl lg:w-1/2 mt-10 lg:mt-0 px-4 lg:px-0 max-lg:flex max-lg:flex-col max-lg:items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-left max-lg:text-center">
              24/7 access to full <br /> service customer <br /> support
            </h2>
            <p className="text-lg w-[85%] sm:text-md lg:text-lg font-normal text-gray-400 text-left leading-6 max-lg:text-center">
              Access round-the-clock customer assistance for all your needs. Our
              dedicated team ensures help is always available when you need it.
            </p>
          </div>
        </section>
      </div>
  )
}

export default CustomerSupport
