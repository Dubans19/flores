// import React from 'react';
import { FaTruck, FaLock } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

const Informacion = () => {
  return (
    <div className="mt-16 lg:mt-24 mx-5 lg:mx-20">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white py-10 px-5 lg:px-20 border-b-2 lg:border-none lg:border-l lg:border-r border-pink-300" style={{ marginTop: '70px' }}>
        {/* Entregas */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
          <div className="text-red-500 text-4xl mb-4">
            <FaTruck className="w-12 h-12 text-rose-500" />
          </div>
          <h3 className="font-bold text-lg">Entregas el mismo día</h3>
          <p className="text-gray-500">Entregas en 5 horas.</p>
        </div>

        {/* Horarios */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-0 border-t lg:border-t-0 lg:border-l lg:border-r lg:border-pink-300 py-8 lg:py-0 lg:px-16">
          <div className="text-black text-4xl mb-4">
            <FiClock className="w-12 h-12 text-rose-500" />
          </div>
          <h3 className="font-bold text-lg">Horarios</h3>
          <p className="text-gray-500">
            Lunes a sábado de 7 am a 10:30 pm <br /> Domingos y festivos de 7 am a 1 pm
          </p>
        </div>

        {/* Pagos Seguros */}
        <div className="flex flex-col items-center text-center">
          <div className="text-red-500 text-4xl mb-4">
            <FaLock className="w-12 h-12 text-rose-500" />
          </div>
          <h3 className="font-bold text-lg">Pagos seguros</h3>
          <p className="text-gray-500">Elije el medio de pago que desees.</p>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
