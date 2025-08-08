import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Datos de contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
          <p className="text-sm">Carrera 65 # 58B - 03, Medellín, Colombia</p>
          <p className="text-sm">Teléfono: +57 604 444 5656</p>
          <p className="text-sm">Email: contacto@uniremington.edu.co</p>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Síguenos</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF
                className="text-white hover:text-red-500 transition"
                size={20}
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram
                className="text-white hover:text-red-500 transition"
                size={20}
              />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn
                className="text-white hover:text-red-500 transition"
                size={20}
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter
                className="text-white hover:text-red-500 transition"
                size={20}
              />
            </Link>
          </div>
        </div>

        {/* Logo universidad */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Uniremington
          </h3>
          <div className="flex space-x-4">
            <Image
              src="/Logo_Uniremington.png"
              alt="Logo Uniremington"
              width={100}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* Linea inferior */}
      <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Uniremington. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
