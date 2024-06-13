import { FaApple, FaAndroid } from "react-icons/fa";
import Logo from "../utilComponents/Logo";
const Footer = () => {
  return (
    <footer
        className="text-white py-6 bg-black lg:h-[50vh] lg:px-24 max-lg:px-2"
        style={{
          backgroundImage: `url("footer-looper-bg.svg")`,
          backgroundPosition: "bottom center",
          backgroundSize: "70%",
          backgroundRepeat: "no-repeat no-repeat",
        }}
      >
        <div className="container flex flex-col justify-between relative lg:px-24 pt-24">
          <Logo
            className="lg:absolute block lg:top-6 lg:left-24 max-md:mx-auto"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <div className="flex max-md:flex-col justify-between">
            {" "}
            {/* space-y-4 */}
            <div className="flex flex-col">
              <p className="text-center lg:text-left block my-8 text-gray-400">
                Flashoot Partner is a platform or service that <br /> connects 
                Reelmakers with Clients looking for Professional Video Services.
              </p>
              <p className="max-lg:text-center max-lg:text-sm">
                © 2024 Flashooot, a product of konchamkoote Pvt. Ltd. All Rights
                Reserved.
              </p>
            </div>
            <div className="flex flex-col space-x-4 my-8">
              <h2 className="flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 1.66699C5.40866 1.66699 1.66699 5.40866 1.66699 10.0003C1.66699 14.592 5.40866 18.3337 10.0003 18.3337C14.592 18.3337 18.3337 14.592 18.3337 10.0003C18.3337 5.40866 14.592 1.66699 10.0003 1.66699ZM13.9837 8.08366L9.25866 12.8087C9.14199 12.9253 8.98366 12.992 8.81699 12.992C8.65033 12.992 8.49199 12.9253 8.37533 12.8087L6.01699 10.4503C5.77533 10.2087 5.77533 9.80866 6.01699 9.56699C6.25866 9.32533 6.65866 9.32533 6.90033 9.56699L8.81699 11.4837L13.1003 7.20033C13.342 6.95866 13.742 6.95866 13.9837 7.20033C14.2253 7.44199 14.2253 7.83366 13.9837 8.08366Z"
                    fill="white"
                  />
                </svg>
                Available on all platforms
              </h2>
              <div className="flex lg:justify-between max-lg:justify-center w-auto my-8">
                <a
                  href="#"
                  className="w-[82px] h-[35px] lg:mx-4 max-lg:me-2 flex items-center justify-center bg-black p-[10px, 16px, 10px, 16px] rounded-[100px] gap-2 border-[1px] border-gray-200 hover:bg-white hover:text-black"
                >
                  <FaApple size={14} />
                  <p className="text-xs">ios</p>
                </a>
                <a
                  href="#"
                  className="w-[100px] h-[35px] flex items-center justify-center bg-black p-[10px, 16px, 10px, 16px] rounded-[100px] gap-2 border-[1px] border-gray-200 hover:bg-white hover:text-black"
                >
                  <FaAndroid size={14} />
                  <p className="text-xs">Android</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
