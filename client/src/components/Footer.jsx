import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto p-2 text-center flex flex-col lg:flex-row lg:justify-between gap-2 mt-4 lg:mt-3 md:mt-0">
        <p>tokoKu © All Rights Reserved 2024.</p>
        <div className="flex items-center gap-4 justify-center text-2xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="hover:text-primary-100"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="hover:text-primary-100"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-primary-100"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
