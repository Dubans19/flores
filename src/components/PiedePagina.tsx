// import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
import payuLogo from "../assets/PayU-Logo.png"
import imperialLove from "../assets/rosas.png"
const Footer = () => {
  return (
    <footer className="bg-white py-10 px-5 lg:px-24 border-t border-gray-300 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Logo y Eslogan */}
        <div className="col-span-1 flex flex-col items-start">
          <img src={imperialLove} alt="iMPERIAL LOVE LOGO" className="w-32 mb-4" />
          <p className="text-gray-600">La mejor marca.</p>
        </div>

        {/* Contacto */}
        <div className="col-span-1">
          <h4 className="font-bold mb-4">CONTÁCTANOS</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <FaPhoneAlt className="mr-2" /> 347474
            </li>
            <li className="flex items-center text-gray-600">
              <FaWhatsapp className="mr-2" /> 334565
            </li>
            <li className="flex items-center text-gray-600">
              <FaEnvelope className="mr-2" /> pedidos@imperiallove.co
            </li>
            <li className="text-gray-600">
              Medellín – Colombia
            </li>
          </ul>
        </div>

        {/* Políticas */}
        <div className="col-span-1">
          <h4 className="font-bold mb-4">POLÍTICAS IMPERIAL LOVE</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Políticas de envío</li>
            <li>Política de datos</li>
            <li>Políticas de cambios</li>
            <li>Políticas de pago</li>
          </ul>
        </div>

        {/* Suscripción */}
        <div className="col-span-1">
          <h4 className="font-bold mb-4">SUSCRÍBETE</h4>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre *"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Tu correo electrónico *"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <input
              type="tel"
              placeholder="Celular *"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="suscripcion" className="border-gray-300" />
              <label htmlFor="suscripcion" className="text-gray-600">
                ¡Suscríbeme a la lista de correo!
              </label>
            </div>
            <button className="bg-rose-500 text-white py-2 px-4 rounded-md">
              Suscríbete
            </button>
          </form>
        </div>
      </div>

      {/* Métodos de pago y Redes sociales */}
      <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-300 mt-8 pt-8">
        <div className="flex items-center space-x-4">
          <p className="text-gray-600">PAGOS SEGUROS CON</p>
          <img src={payuLogo} alt="Wompi" className="w-16" />
        </div>

        <div className="flex space-x-2 mt-4 lg:mt-0">
          <FaFacebookF className="text-gray-600" />
          <FaInstagram className="text-gray-600" />
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center text-gray-600 mt-4">
        <p>ImperialLove - Todos los derechos reservados | Desarrollado por WebDesign</p>
      </div>
    </footer>
  );
};

export default Footer;
