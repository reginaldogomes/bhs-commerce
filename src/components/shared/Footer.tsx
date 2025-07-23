import { GithubIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Digital Services</h3>
            <p className="text-gray-400 text-sm">
              A impulsionar o seu sucesso digital.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Digital Services. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
