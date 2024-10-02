// import React from 'react';
import "../custom.css"
function Footer() {
  return (
    <footer className=" bg-rose py-2 overflow-hidden top-0">
      {/* Contenedor del texto en movimiento */}
      <div className=" w-full whitespace-nowrap ">
        <p className="bg-rose-500 text-white text-lg font-semibold animate-scroll-text">
          Envíos a Medellín y Bogotá | Servicio 24 horas | Regala flores en Amor y Amistad | Venta de arreglos florales
        </p>
      </div>
    </footer>
  );
}

export default Footer;
