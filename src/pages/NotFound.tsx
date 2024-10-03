// src/components/NotFound.tsx
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Página No Encontrada
        </h2>
        <p className="mt-2 text-gray-600">
          Lo sentimos, no podemos encontrar la página que buscas.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200"
          >
            Regresar al Inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
