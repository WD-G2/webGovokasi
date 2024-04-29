import collage from "../assets/collage.png";
import InfoCard from "../components/InfoCard";

const Hero = () => {
  return (
    <>
    <div className="bg-white relative   flex items-center  n justify-center overflow-hidden z-50 ">
      <div className="relative mx-auto h-full px-4 pb-2 md:pb-0 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className=" relative ">
            <div className="lg:max-w-xl lg:pr-5 relative z-40">
              <p className="flex text-sm uppercase text-g1 justify-center">GOVOKASi</p>
              <h2 className="flex flex-col items-center justify-center mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">
                  People
                </span>
                <span className="text-center">
                  Career
                </span>
                <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">
                  Solution
                </span>
              </h2>
              <p className="text-base text-center text-gray-700">
              Training and Coaching Company
              </p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <a
                  href="/"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-[#1a1d40] px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-white hover:text-[#1a1d40] focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                >
                  Be our Talent
                </a>
                <a
                  href="/"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-[#1a1d40] shadow-md transition hover:bg-[#1a1d40] hover:text-white focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                >
                  Be our Partner
                </a>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <div className="bg-orange-400 mx-auto w-fit overflow-hidden ">
              <img src={collage} />
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div className="mt-[-70px]"><InfoCard /></div>
    
    
    </>
  );
}

export default Hero;
