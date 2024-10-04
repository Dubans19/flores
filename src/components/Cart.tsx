import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importa el icono para cerrar
// import PayUForm from './Pagos';
import { useDispatch } from "react-redux";
import { quitProducto } from '../redux/state';
import { Link } from 'react-router-dom';
import { Subtotal } from '../utils/SubTotal';

interface Product {
  id: number;
  img: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface CartProps {
  producto: Product[];
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ producto, onClose }) => {
  const dispatch = useDispatch()
  const formatPrice = (price: number) => 
    `COP ${price.toLocaleString('es-CO', { minimumFractionDigits: 0 })}`;
  const subtotal=Subtotal(producto)
  // const subtotal = producto.reduce((sum, product) => 
  //   sum + product.precio * product.cantidad, 0
  // );

  const quitarProducto=(id:any)=>{
    console.log("producto id",id)
    dispatch (
       quitProducto(
         id,
     
        )
      )
  }
  useEffect(()=>{
    {Number(subtotal) == 0 ? onClose  : null}
  },[])

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white shadow-lg w-full md:w-96 p-6 h-full flex flex-col">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-bold">Carrito</h2>
          <button onClick={onClose} className="text-red-500 text-2xl font-bold">
            <FaTimes /> {/* Utiliza el icono de cerrar */}
          </button>
        </div>

        {/* Contenedor scrollable */}
        <div className="flex-grow overflow-y-scroll space-y-4">
          {producto.map((product, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <img
                  src={product.img}
                  alt={product.nombre}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div>
                  <h3 className="text-gray-700 font-semibold">{product.nombre}</h3>
                  <p className="text-sm text-gray-500">
                    {product.cantidad} x {formatPrice(product.precio)}
                  </p>
                </div>
              </div>
              <button className="text-red-500 text-lg font-bold" onClick={()=>quitarProducto(product.id)}>x</button>
            </div>
          ))}
        </div>

        <div className="border-t mt-4 pt-4">
          <p className="text-xl font-semibold text-gray-700">
            Subtotal: <span className="font-bold">{formatPrice(subtotal)}</span>
          </p>
        </div>

        <div className="flex justify-between mt-4">
          <Link to="/carro"><button className="bg-rose-500 text-white rounded-full px-4 py-2 font-semibold">Ver Carrito</button></Link>
          {/* {Number(subtotal) > 0 ? <PayUForm totalPrecio={Number(subtotal)} /> : null} */}

          <Link to="/detalles_facturacion"><button className='bg-rose-500 text-white rounded-full px-4 py-2 font-semibold'>
        Finalizar Compra
      </button>
      </Link>
        </div>
      </div>
    </div>
  );
};
