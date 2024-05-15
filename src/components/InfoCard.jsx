const InfoCard = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">+ 6,000</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Talent Pool
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">+120</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Startup Partners
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">+500</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Hands-On Training
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">80%</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Intern to Full Time
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
