import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa"; // Librería para los íconos de más y menos
import rosas from "../assets/rosas.png"
import rosas2 from "../assets/Flores-y-Flores22.jpg"

interface Product {
  name: string;
  price: number;
  description: string;
  images: string[];
  options: {
    addGlobe: string[];
    addChocolates: string[];
    addLiquor: string[];
    addTeddy: string[];
    addPerfume: string[];
  };
}

interface SelectOptionProps {
  title: string;
  options: string[];
}

const ProductDetail: React.FC = () => {
    useEffect(() => {
        // Forzar el scroll al top al cargar el componente
        window.scrollTo(0, 0);
      }, []);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1); // Estado para la cantidad del producto

  const product: Product = {
    name: "CORAZÓN AMOR MÍO",
    price: 558000,
    description:
      "Corazón de lujo en 3D, con más de 100 rosas rojas de la mejor calidad, un diseño único, perfecto para sorprender a tu amado, este hermoso arreglo incluye topper con mensaje de temporada y tarjeta personalizada.",
    images: [
 rosas, // Añade las rutas correctas de tus imágenes
rosas2,
rosas,
    ],
    options: {
      addGlobe: ["Seleccionar una opción", "Sí", "No"],
      addChocolates: ["Seleccionar una opción", "Sí", "No"],
      addLiquor: ["Seleccionar una opción", "Sí", "No"],
      addTeddy: ["Seleccionar una opción", "Sí", "No"],
      addPerfume: ["Seleccionar una opción", "Sí", "No"],
    },
  };

  // Funciones para manejar el incremento y decremento de la cantidad
  const handleQuantityIncrease = () => setQuantity((prev) => prev + 1);
  const handleQuantityDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16" style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
        {/* Columna de imágenes miniatura */}
        <div className="flex flex-col items-center lg:w-1/4 space-y-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Miniatura ${index + 1}`}
              onClick={() => setSelectedImage(index)}
              className={`cursor-pointer w-24 h-24 object-cover rounded-lg border-2 transition ${
                selectedImage === index ? "border-rose-600" : "border-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Imagen principal + Detalles */}
        <div className="lg:w-3/4 flex flex-col lg:flex-row gap-8 justify-center">
          {/* Imagen principal */}
          <div className="lg:w-1/2">
            <img
              src={product.images[selectedImage]}
              alt="Imagen seleccionada"
              className="w-full h-auto object-cover rounded-lg border-2 border-rose-400"
            />
          </div>

          {/* Información del producto */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-6 text-center lg:text-left">
              {product.description}
            </p>
            <h2 className="text-2xl font-semibold text-red-600 mb-4 text-center lg:text-left">
              COP {product.price.toLocaleString()}
            </h2>

            {/* Opciones adicionales */}
            <div className="space-y-4">
              <SelectOption title="¿Deseas agregar un globo?" options={product.options.addGlobe} />
              <SelectOption title="¿Deseas agregar unos chocolates?" options={product.options.addChocolates} />
              <SelectOption title="¿Deseas agregar una botella de licor?" options={product.options.addLiquor} />
              <SelectOption title="¿Deseas agregar un oso peluche?" options={product.options.addTeddy} />
              <SelectOption title="¿Deseas agregar un perfume?" options={product.options.addPerfume} />
            </div>

            {/* Control de cantidad del producto */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleQuantityDecrease}
                  className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={handleQuantityIncrease}
                  className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Precio detallado */}
            <div className="border-t mt-6 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">Precio del producto:</span>
                <span className="text-lg font-semibold text-gray-900">
                  COP {product.price.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-gray-700">Total del pedido:</span>
                <span className="text-lg font-semibold text-gray-900">
                  COP {(product.price * quantity).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Botón de añadir al carrito */}
            <div className="mt-8">
              <button className="w-full bg-rose-600 text-white text-lg py-3 rounded-lg hover:bg-red-700 transition">
                Añadir Al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectOption: React.FC<SelectOptionProps> = ({ title, options }) => (
  <div>
    <label className="block text-gray-700 text-sm mb-2">{title}</label>
    <select className="w-full border border-gray-300 rounded-lg p-3">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default ProductDetail;
