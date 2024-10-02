import { useState, useEffect } from 'react';
import rosas from "../assets/rosas.png"
import rosas2 from "../assets/Flores-y-Flores22.jpg"
const images = [
  {
    url: rosas,
    heading: "FLORES MEDELLÍN",
    subheading: "Regala flores en Amor y Amistad",
    buttonText: "COMPRA AQUÍ"
  },
  {
    url: rosas2,
    heading: "ENVÍOS RÁPIDOS",
    subheading: "Entrega en el mismo día",
    buttonText: "COMPRA AQUÍ"
  }
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 lg:h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4 lg:px-0">
            <h1 className="text-4xl lg:text-5xl font-bold">{image.heading}</h1>
            <p className="text-md lg:text-xl mt-2">{image.subheading}</p>
            <button className="cursor-pointer mt-4 z-100 bg-rose-500 hover:bg-rose-700 py-2 px-4 rounded-md text-sm lg:text-base bg-rose-500 cursor-pointer">{image.buttonText}</button>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 flex justify-between items-center">
        <button onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)} className="text-white bg-black bg-opacity-50 p-4">❮</button>
        <button onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)} className="text-white bg-black bg-opacity-50 p-4">❯</button>
      </div>
    </div>
  );
}

export default Slider;
