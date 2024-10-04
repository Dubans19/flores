import { useEffect, useState, FormEvent } from 'react';
import generateHash from '../utils/helpers';
import React from 'react';
interface Product {
  id: number;
  img: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface CartProps {
  totalPrecio:number
  email:string
  producto: Product[];

}
const PayUForm :React.FC<CartProps>=  ({totalPrecio,email,producto}) => {
  const api_key = import.meta.env.VITE_API_KEY as string;
  const merchantId = import.meta.env.VITE_MERCHANTID as string;
  const accountId = import.meta.env.VITE_ACCOUNT_ID as string;
  const [firma, setFirma] = useState<string>("");
  const [referenceCode, setreferenceCode] = useState("")
  const generateReferenceCode = () => Math.random().toString(36).substring(2, 12).toUpperCase();


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Enviar el formulario a PayU, ya que el formulario se envía por sí mismo
    const form = e.currentTarget; // e.currentTarget es el formulario
    form.submit(); // Enviar el formulario a PayU
  };
  const productos = producto.map((product) => `${product.nombre}, Cantidad: ${product.cantidad}`)
  .join(" / ");
  useEffect(() => {
    const uniqueReferenceCode = generateReferenceCode();
    console.log("uniqueReferences", uniqueReferenceCode)
    const firmaGenerada = generateHash(api_key, merchantId, uniqueReferenceCode, String(totalPrecio));
    console.log("firma es", firmaGenerada);
    setreferenceCode(uniqueReferenceCode)
    setFirma(firmaGenerada);
  }, [api_key, merchantId]);

  return (
    <form
      id="payu-form"
      method="POST"
      action="https://checkout.payulatam.com/ppp-web-gateway-payu"
      onSubmit={handleSubmit} // Aquí enlazamos el evento onSubmit
    >
      {/* Credenciales de PayU */}
      <input type="hidden" name="merchantId" value={merchantId} />
      <input type="hidden" name="accountId" value={accountId} />
      <input type="hidden" name="description" value={productos}/>
      <input type="hidden" name="referenceCode" value={referenceCode} />
      <input type="hidden" name="amount" value={String(totalPrecio)} />
      <input type="hidden" name="currency" value="COP" />
      <input type="hidden" name="signature" value={firma} />
      <input type="hidden" name="test" value="1" /> {/* Para el entorno de pruebas */}
      <input type="hidden" name="buyerEmail" value={email} />
      <input type="hidden" name="responseUrl" value="https://florespre.netlify.app/respuesta_transaccion" />
      <input type="hidden" name="confirmationUrl" value="https://florespre.netlify.app/respuesta_transaccion" />

      {/* Botón para completar la compra */}
      <button type="submit" className='bg-rose-500 text-white rounded-md  px-24 py-4 font-semibold'>
        Finalizar Compra
      </button>
    </form>
  );
};

export default PayUForm;
