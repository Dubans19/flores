import  { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importamos el icono del carrito
import rosas from "../assets/Flores-y-Flores22.jpg"
import { Link } from 'react-router-dom';
const productsData = [
  {
    title: 'ROSA ROMANTIC',
    price: 'COP 160.000',
    image: rosas,
  },
  {
    title: 'CORAZÓN AMOR MÍO',
    price: 'COP 558.000',
    image: rosas,
  },
  {
    title: 'CONO CORAZÓN',
    price: 'COP 129.000',
    image: rosas,
  },
  {
    title: 'FLORERO ROMANCE',
    price: 'COP 165.000',
    image: rosas,
  },
  {
    title: 'ROSA ROMANTIC',
    price: 'COP 160.000',
    image: rosas,
  },
  {
    title: 'CORAZÓN AMOR MÍO',
    price: 'COP 558.000',
    image: rosas,
  },
  {
    title: 'CONO CORAZÓN',
    price: 'COP 129.000',
    image: rosas,
  },
  {
    title: 'FLORERO ROMANCE',
    price: 'COP 165.000',
    image: rosas,
  },
  // Agrega más productos si es necesario
];

const ProductsGrid = () => {
    const [activeButton, setActiveButton] = useState('recent');

  return (
    <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex justify-center mb-4 space-x-6">
        {/* Botones de filtro */}
        <button
          className={`py-2 px-6 rounded-md transition-colors duration-300 ${activeButton === 'recent' ? 'bg-rose-500 text-white' : 'border border-gray-300 text-gray-700'}`}
          onClick={() => setActiveButton('recent')}
        >
          LO MÁS RECIENTE
        </button>
        <button
          className={`py-2 px-6 rounded-md transition-colors duration-300 ${activeButton === 'discount' ? 'bg-rose-500 text-white' : 'border border-gray-300 text-gray-700'}`}
          onClick={() => setActiveButton('discount')}
        >
          EN DESCUENTO
        </button>
        <button
          className={`py-2 px-6 rounded-md transition-colors duration-300 ${activeButton === 'bestseller' ? 'bg-rose-500 text-white' : 'border border-gray-300 text-gray-700'}`}
          onClick={() => setActiveButton('bestseller')}
        >
          LO MÁS VENDIDO
        </button>
      </div>
      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mx-8">
        {productsData.map((product, index) => (
          <div key={index} className="relative group border rounded-lg overflow-hidden shadow-lg">
            {/* Imagen del producto */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Botón que aparece al hacer hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-rose-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
                <FaShoppingCart />
               <Link to="/flores/1"><span>Ver más</span></Link> 
              </button>
            </div>
            {/* Información del producto */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-red-500 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
