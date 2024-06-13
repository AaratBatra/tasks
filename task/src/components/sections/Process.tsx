
const Process = () => {
  return (
    <section className="lg:h-screen flex flex-col items-center justify-center text-center text-white bg-black px-4 sm:px-6 lg:px-8">
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
  )
}

export default Process
