import React from "react";

const CertificateSection = () => {
  return (
    <div className="container mx-auto">
      <div id="blogs" className="mt-6 relative pt-2 lg:pt-2 max-h-screen">
        <h1 className="text-center text-4xl p-3 bg-[#1a1d40] text-white">
          Certification
        </h1>
      </div>
      <div className="flex flex-row">
        <div>
          <h3 className="flex flex-col ml-10 mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-4xl sm:leading-snug">
            <span className="my-1 inline-block border-b-8 border-g4 bg-white font-bold text-g4 animate__animated animate__flash">
              Sertifikasi
            </span>
          </h3>
          <div className="w-3/5 ml-10">
            <span className="text-gray-700">
              GOVOKASi sudah tersertifikasi oleh ... pada ... dengan nomor
              sertifikasi ... sehingga talent dipastikan akan mendapatkan
              pengalaman terbaik dengan program kami.
            </span>
          </div>
        </div>
        <div className="mt-4 w-2/5 mr-6">
          <img src="https://www.certificateof.com/wp-content/uploads/2018/05/certificate-of-eligibility-1.png"></img>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
