import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-8 text-center">
      {/* Иконки соцсетей в одной линии */}
      <div className="flex flex-row justify-center items-center gap-6 mb-4">
        <a
          href="#"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="#"
          className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#"
          className="hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
        <p className="text-sm">
          &copy; 2025 Все права защищены —{" "}
          <span className="font-semibold">Onay School</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
