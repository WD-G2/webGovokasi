import React from "react";
import EmailButton from "../components/email-button";
import IgButton from "../components/ig-button";
import WaButton from "../components/wa-button";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo Footer */}
          <div className="mb-6 md:mb-2">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://govokasi.com/wp-content/uploads/2021/07/site-logo.png"
                className="h-8 ml-8"
                alt="Govokasi Logo"
              />
            </a>
          </div>
          {/* End of Logo Footer*/}

          {/* Contact Button */}
          <div className="flex mt-4 mr-6 sm:justify-center sm:mt-0">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mr-6">
              Contact Us:
            </span>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <WaButton />
              <span className="sr-only">Whatsapp</span>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <IgButton />
              <span className="sr-only">Ig</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <EmailButton />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
          {/* End of Contact Button */}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="ml-6 text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Jl. Raya Belimbing No.88, Babakan Asem, Kec. Kosambi, Kabupaten
            Tangerang, Banten 15212
          </span>
          <span className="mr-6 text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © All Rights Reserved 2024
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
