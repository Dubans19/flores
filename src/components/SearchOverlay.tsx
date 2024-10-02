import  { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const SearchOverlay = ({onClose}:{onClose:any}) => {
  const [query, setQuery] = useState('');

  // Simulación de lista de productos
  const products = [
    { id: 1, name: 'Bouquet nacimiento azul', price: 'COP 194.000', image: 'product1.png' },
    { id: 2, name: 'BOUQUET PRIMAVERA', price: 'COP 165.000', image: 'product2.png' },
    { id: 3, name: 'BOUQUET ANTURIOS', price: 'COP 185.000', image: 'product3.png' },
    { id: 4, name: 'Caja Arts & Flowers Gerberas', price: 'COP 220.000', image: 'product4.png' },
    { id: 5, name: 'CAJA ARTS & FLOWERS TULIPANES', price: 'COP 290.000', image: 'product5.png' },
    { id: 6, name: 'CAJA ARTS & FLOWERS GIRASOLES', price: 'COP 220.000', image: 'product6.png' },
    { id: 7, name: 'Bouquet Rosas', price: 'COP 180.000', image: 'product7.png' },
    // Agrega más productos si lo necesitas para probar el scroll
  ];

  // Filtra los productos según el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-95 p-4 md:p-8 flex flex-col items-start justify-start md:justify-center">
      {/* Barra de búsqueda */}
      <div className="w-full flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Busca tus flores favoritas"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-b-2 border-rose-400 text-2xl md:text-4xl font-light focus:outline-none"
        />
        {/* Botón para cerrar el overlay */}
        <button
          className="ml-4 text-gray-600 text-xl md:text-2xl"
          onClick={onClose} // Llama a la función para cerrar el overlay
        >
          <FaTimes />
        </button>
      </div>

      {/* Mostrar productos solo si el usuario ha comenzado a escribir */}
      {query && (
        <div className="w-full space-y-4 overflow-y-auto max-h-[400px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-md object-cover"
                />
                <div>
                  <p className="font-bold text-sm md:text-base">{product.name}</p>
                  <p className="text-gray-600 text-sm md:text-base">{product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No se encontraron productos.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchOverlay;
