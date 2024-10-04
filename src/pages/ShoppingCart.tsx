import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupProducts } from "../utils/groupProducts";
import { Subtotal } from "../utils/SubTotal";
import { formatCurrency } from "../utils/helpers";
// import PayUForm from "../components/Pagos";
import { removeOneProduct, setProducto } from "../redux/state";
import { Link } from "react-router-dom";



const ShoppingCart = () => {
    const [increment, setincrement] = useState(0)



    const producto = useSelector((state: any) => state);
    console.log("producto estado inicial es", producto)
    const dispatch = useDispatch()

    useEffect(() => {

    }, [increment])
    const groupedProducts = groupProducts(producto.productos);

    const Decrement = (id: any) => {
        console.log("decremnt es", increment)
        if (increment === 0) {
            return null
        } else {
            setincrement((increment) => increment -= 1)
            dispatch(
                removeOneProduct(
                    id,

                )
            )
        }

    }
    const handleIncrease = (product: any) => {
        console.log("producto estado es", product)
        setincrement((increment) => increment += 1)
        dispatch(
            setProducto(
                product,
            )
        )
        // Acción para aumentar cantidad
    };







    console.log("grouped products es", groupedProducts) // Agrupar productos
    const subtotal = Subtotal(groupedProducts)
    return (
        <div className="p-4 lg:p-8 mt-20"> {/* Aumenté el margen superior a mt-10 */}
            {/* Iterar sobre los productos agrupados */}
            {groupedProducts.map((product: any) => (
                <div key={product.id} className="w-full bg-white shadow-md rounded-lg p-4 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 items-center">
                        <div className="flex items-center justify-start md:col-span-2">
                            <img
                                src={product.img}
                                alt={`Product image of ${product.nombre}`}
                                className="w-24 h-24 object-cover rounded-md"
                            />
                            <p className="ml-4 text-sm font-semibold">{product.nombre}</p>
                        </div>
                        <div className="hidden md:flex justify-center">
                            <p className="text-gray-700 font-semibold">COP {product.precio.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-center md:flex-row md:items-center mt-4 md:mt-0">
                            <button
                                className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 text-lg leading-none"
                                onClick={() => Decrement(product.id)}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={product.cantidad}
                                className="w-10 text-center border border-gray-300 mx-2 rounded-md"

                            />
                            <button
                                className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 text-lg leading-none"
                                onClick={() => handleIncrease(product)}
                            >
                                +
                            </button>
                        </div>
                        <div className="hidden md:flex justify-center">
                            <p className="text-gray-700 font-semibold">COP {(product.precio * product.cantidad).toLocaleString()}</p>
                        </div>
                        <div className="flex justify-end">
                            <i className="fas fa-times text-gray-400 hover:text-gray-700 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            ))}

            {/* Sección de cupón */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg mb-8">
                <input
                    type="text"
                    placeholder="Código de cupón"
                    className="border border-gray-300 p-2 rounded-md w-full md:w-2/3 mb-4 md:mb-0"
                />
                <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600">
                    Aplicar Cupón
                </button>
            </div>

            {/* Totales del carrito */}
            <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-6">Totales del carrito</h2>
                <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="font-semibold">COP {formatCurrency(subtotal)}</p>

                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-700">Envío</p>
                    <p className="text-gray-500 text-sm">
                        Introduce tu dirección para ver las opciones de envío.
                    </p>
                </div>
                <a href="#" className="text-red-500 text-sm underline flex items-center">
                    <i className="fas fa-truck mr-1"></i> Calcular envío
                </a>
                <div className="flex justify-between mt-4">
                    <p className="text-gray-700 font-bold">Total</p>
                    <p className="font-bold">COP {formatCurrency(subtotal)}</p>
                </div>
            </div>

            {/* Botón de finalizar compra */}
            <div className="mt-8 flex justify-center">
                {/* {Number(subtotal) > 0 ? <PayUForm totalPrecio={Number(subtotal)} /> : null} */}
                <Link to="/detalles_facturacion"><button className='bg-rose-500 text-white rounded-full px-4 py-2 font-semibold'>
                    Finalizar Compra
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ShoppingCart;
