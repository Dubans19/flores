import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import logoPayu from "../assets/PayU-Logo.png";
import { Subtotal } from "../utils/SubTotal";
import { groupProducts } from "../utils/groupProducts";
import { useSelector } from "react-redux";
import PayUForm from "../components/Pagos";
import { formatCurrency } from "../utils/helpers";

interface FormData {
  nombres: string;
  apellidos: string;
  documento: string;
  email: string;
  telefono: string;
  pais: string;
  departamento: string;
  ciudad: string;
  direccion: string;
  deliveryDate: string;
  mensaje: string;
}

interface Errors {
  nombres?: string;
  apellidos?: string;
  documento?: string;
  email?: string;
  telefono?: string;
  departamento?: string;
  ciudad?: string;
  direccion?: string;
  deliveryDate?: string;
}

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombres: "",
    apellidos: "",
    documento: "",
    email: "",
    telefono: "",
    pais: "Colombia",
    departamento: "",
    ciudad: "",
    direccion: "",
    deliveryDate: "",
    mensaje: "",
  });

  const producto = useSelector((state: any) => state);
  const groupedProducts = groupProducts(producto.productos);
  const subtotal = Subtotal(groupedProducts);

  const [errors, setErrors] = useState<Errors>({});
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() !== "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }

    validateForm();
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.nombres) newErrors.nombres = "Este campo es obligatorio";
    if (!formData.apellidos) newErrors.apellidos = "Este campo es obligatorio";
    if (!formData.documento) newErrors.documento = "Este campo es obligatorio";
    if (!formData.email) newErrors.email = "Este campo es obligatorio";
    if (!formData.telefono) newErrors.telefono = "Este campo es obligatorio";
    if (!formData.departamento) newErrors.departamento = "Este campo es obligatorio";
    if (!formData.ciudad) newErrors.ciudad = "Este campo es obligatorio";
    if (!formData.direccion) newErrors.direccion = "Este campo es obligatorio";
    if (!formData.deliveryDate) newErrors.deliveryDate = "Este campo es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
      setFormValid(true);
    }
  };

  useEffect(() => {
    const isFormValid = validateForm();
    setFormValid(isFormValid && subtotal > 0);
  }, [formData, subtotal]);
  console.log("grouped billin es",groupedProducts.map((product)=>product.nombre && product.precio))
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 mt-24">
      <div className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Detalles de facturación</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Campos del formulario en español */}
            <div>
              <label className="block mb-2">Nombres *</label>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.nombres && <p className="text-orange-500 text-sm">{errors.nombres}</p>}
            </div>

            <div>
              <label className="block mb-2">Apellidos *</label>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.apellidos && <p className="text-orange-500 text-sm">{errors.apellidos}</p>}
            </div>

            <div>
              <label className="block mb-2">Documento *</label>
              <input
                type="text"
                name="documento"
                value={formData.documento}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.documento && <p className="text-orange-500 text-sm">{errors.documento}</p>}
            </div>

            <div>
              <label className="block mb-2">Correo Electrónico *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && <p className="text-orange-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-2">Teléfono *</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.telefono && <p className="text-orange-500 text-sm">{errors.telefono}</p>}
            </div>

            <div>
              <label className="block mb-2">Departamento *</label>
              <input
                type="text"
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.departamento && <p className="text-orange-500 text-sm">{errors.departamento}</p>}
            </div>

            <div>
              <label className="block mb-2">Ciudad *</label>
              <input
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.ciudad && <p className="text-orange-500 text-sm">{errors.ciudad}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2">Dirección *</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.direccion && <p className="text-orange-500 text-sm">{errors.direccion}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2">Fecha de entrega *</label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.deliveryDate && <p className="text-orange-500 text-sm">{errors.deliveryDate}</p>}
            </div>

            {/* Campo de mensaje opcional */}
            <div className="md:col-span-2">
              <label className="block mb-2">Mensaje (opcional)</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-gray-100 p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Detalles del pedido</h2>
        {groupedProducts.map((product) => (
          <div className="flex items-center justify-between mb-4" key={product.id}>
            <div className="w-20 h-20 bg-gray-200 rounded-md">
              <img src={product.img} className="w-20 h-20 bg-gray-200 rounded-md cover" alt={product.nombre} />
            </div>
            <div className="flex-1 ml-4">
              <p className="text-lg font-semibold">{product.nombre}</p>
              <p>Cantidad: {product.cantidad}</p>
            </div>
            <div className="text-lg font-semibold">{formatCurrency(product.precio)}</div>
          </div>
        ))}

        <div className="mt-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{formatCurrency(subtotal)}</p>
          </div>
          <div className="flex justify-between">
            <p>Envío</p>
            <p>$5.00</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>{formatCurrency(subtotal)}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Métodos de pago</h3>
          <div className="flex justify-center gap-10">
          <div className="w-16 h-16 bg-gray-200 rounded-md">
              <img src={logoPayu} className="cursor-pointer" alt="PayU" />
            </div>
            {Number(subtotal) > 0 && formValid ? (
              <PayUForm totalPrecio={Number(subtotal)} email={formData.email} producto={groupedProducts} />
            ) : (
              <button onClick={handleSubmit} className="bg-rose-400 text-white rounded-md  px-24 py-2 font-semibold">Finalizar Compra</button>
            )}
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
