// import React from 'react';

function Topbar() {
  return (
    <div className="bg-rose-500 text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <span>Envío el mismo día | Envíos en Medellín y Bogotá | SERVICIO 24 HORAS</span>
        <div className="space-x-4">
          <a href="#suscripcion" className="hover:underline">Suscripción F&F</a>
          <a href="#rastreo" className="hover:underline">Rastrea tu pedido</a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
