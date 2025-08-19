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
    <footer className="bg-blue-700 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor principal con flex responsive */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Datos de contacto */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-2">Contacto</h3>
            <p className="text-sm">Carrera 65 # 58B - 03, Medellín, Colombia</p>
            <p className="text-sm">Teléfono: +57 604 444 5656</p>
            <p className="text-sm">Email: contacto@uniremington.edu.co</p>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold mb-2">Síguenos</h3>
            <div className="flex space-x-3">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebookF className="text-white hover:text-red-500 transition" size={18} />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <FaInstagram className="text-white hover:text-red-500 transition" size={18} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn className="text-white hover:text-red-500 transition" size={18} />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter className="text-white hover:text-red-500 transition" size={18} />
              </Link>
            </div>
          </div>

          {/* Logo universidad */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-base font-semibold mb-2">Uniremington</h3>
            <Image
              src="/Logo_Uniremington.png"
              alt="Logo Uniremington"
              width={90}
              height={36}
            />
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-6 border-t border-white/30 pt-3 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Uniremington. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
