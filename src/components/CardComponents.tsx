import React, { useState } from 'react';
import rosas from "../assets/rosas.png"
const cardsData = [
  {
    title: 'Para Mamá',
    description: 'Un gesto amor para el ser más importante',
    buttonText: 'CLICK AQUÍ',
    image: rosas,
  },
  {
    title: 'Para Enamorar',
    description: 'Regalo flores, un detalle que siempre enamora.',
    buttonText: 'VER MÁS',
    image: rosas,
  },
  {
    title: '¿Estás de Aniversario?',
    description: 'Nada mejor que demostrar amor regalando rosas.',
    buttonText: 'ME INTERESA',
    image: rosas,
  },
  {
    title: '¿Aún no te decides?',
    description: 'Mira todo nuestro catálogo.',
    buttonText: 'TODOS LOS PRODUCTOS',
    image: rosas,
  },
];

const CardComponent = () => {
  const [hoverEffect, setHoverEffect] = useState(null);

  const handleMouseMove = (e, index) => {
    const width = e.target.clientWidth;
    const xPos = e.nativeEvent.offsetX;

    if (xPos < width / 2) {
      setHoverEffect({ index, rotate: '-1deg', scale: 1.1 });
    } else {
      setHoverEffect({ index, rotate: '-1deg', scale: 1.1 });
    }
  };

  const handleMouseLeave = () => {
    setHoverEffect(null);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`relative w-full md:w-1/4 h-96 bg-cover bg-center mx-2 my-4 transform transition-all duration-700 ease-in-out`}
          style={{
            backgroundImage: `url(${card.image})`,
            transform: hoverEffect && hoverEffect.index === index 
              ? `rotate(${hoverEffect.rotate}) scale(${hoverEffect.scale})` 
              : 'rotate(0deg) scale(1)',
          }}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-30 flex flex-col justify-center items-center text-center text-white transition duration-700 ease-in-out">
            <h2 className="text-2xl font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm">{card.description}</p>
            <button className="mt-4 bg-rose-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
