import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight, BsCartPlus } from 'react-icons/bs'; // Icono de carrito
import rosas from "../assets/rosas.png";
import rosas2 from "../assets/Flores-y-Flores22.jpg"
import { useDispatch } from "react-redux";
import { setProducto,quitProducto } from '../redux/state';
import { formatCurrency } from '../utils/helpers';
const productos = [
  { id: 1, nombre: "Corazón Mío", precio: 460000, img: rosas },
  { id: 2, nombre: "Cono Corazón", precio:  129.000, img: rosas2 },
  { id: 3, nombre: "Florero Romance", precio:  165.000, img: rosas },
  { id: 4, nombre: "Corazón Luxury", precio: 460000, img: rosas2 },
  { id: 5, nombre: "Ramo de Rosas", precio:  300.000, img: rosas },
  { id: 6, nombre: "Ramo de Girasoles", precio:  200.000, img: rosas },
  { id: 7, nombre: "Ramo de Lirios", precio:  180.000, img: rosas },
  { id: 8, nombre: "Bouquet Elegante", precio:  250.000, img: rosas },
  { id: 9, nombre: "Arreglo Floral Mixto", precio:  320.000, img: rosas },
  { id: 10, nombre: "Caja de Rosas", precio:  400.000, img: rosas },
  { id: 11, nombre: "Arreglo de Orquídeas", precio:  450.000, img: rosas },
  { id: 12, nombre: "Ramo de Claveles", precio:  120.000, img: rosas },
  { id: 13, nombre: "Corazón de Flores", precio:  470.000, img: rosas },
  { id: 14, nombre: "Ramo de Tulipanes", precio:  190.000, img: rosas },
  { id: 15, nombre: "Arreglo de Fresias", precio:  210.000, img: rosas },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch()
  const totalProducts = productos.length;

  // Determinar el número de elementos visibles dependiendo del tamaño de la pantalla
  const visibleItems = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProducts - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalProducts - 1 ? 0 : prevIndex + 1
    );
  };

  const anadirProducto=(producto:any)=>{
    console.log("producto",producto)
    dispatch (
        setProducto(
         producto,
     
        )
      )
  }

  const quitarProducto=(id:any)=>{
    console.log("producto id",id)
    dispatch (
       quitProducto(
         id,
     
        )
      )
  }


  return (
    <div className="relative w-full max-w-7xl mx-auto py-12 overflow-hidden">
      {/* Título principal */}
      <h1 className="text-center text-3xl font-bold mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
        Arreglos Florales en Medellín y el Área Metropolitana
      </h1>
      <p className="text-center text-gray-500 mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>
        Ver todos los productos
      </p>

      {/* Flecha Izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
      >
        <BsChevronLeft size={30} />
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
      >
        <BsChevronRight size={30} />
      </button>

      {/* Carrusel */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex + 1) * (100 / (visibleItems + 2))}%)`,
        }}
      >
        {/* Duplicar los productos al inicio y al final */}
        {[...productos.slice(-1), ...productos, ...productos.slice(0, 1)].map((producto, index) => (
          <div key={index} className="flex-shrink-0 px-4 w-72 relative group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={producto.img}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">{producto.nombre}</h2>
                <p className="text-rose-600 text-lg" >COP {formatCurrency(producto.precio)}</p>
              </div>
              {/* Botón de añadir al carrito */}
              <button
                className=" bottom-0 left-0 w-full bg-rose-500 text-white rounded-none py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                onClick={() => anadirProducto(producto)} // Cambiar por la función deseada
              >
                <div className="flex items-center justify-center">
                  <BsCartPlus className="mr-2" />
                  Añadir al carrito
                </div>

                
              </button>

              <button
                className=" bottom-0 left-0 w-full bg-rose-400 text-white rounded-none py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                onClick={() => quitarProducto(producto.id)} // Cambiar por la función deseada
              >
                <div className="flex items-center justify-center">
              
                Quitar
                </div>

                
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
