import { useEffect, useState, FormEvent } from 'react'; 
import generateHash from '../utils/helpers';

const PayUForm: React.FC = () => {
  const api_key = import.meta.env.VITE_API_KEY as string;
  const merchantId = import.meta.env.VITE_MERCHANTID as string;
  const accountId = import.meta.env.VITE_ACCOUNT_ID as string;
  const [firma, setFirma] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Enviar el formulario a PayU, ya que el formulario se envía por sí mismo
    const form = e.currentTarget; // e.currentTarget es el formulario
    form.submit(); // Enviar el formulario a PayU
  };

  useEffect(() => {
    const firmaGenerada = generateHash(api_key, merchantId, "unique_order_reference", "100");
    console.log("firma es", firmaGenerada);
    setFirma(firmaGenerada);
  }, [api_key, merchantId]);

  return (
    <form
      id="payu-form"
      method="POST"
      action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu"
      onSubmit={handleSubmit} // Aquí enlazamos el evento onSubmit
    >
      {/* Credenciales de PayU */}
      <input type="hidden" name="merchantId" value={merchantId} />
      <input type="hidden" name="accountId" value={accountId} />
      <input type="hidden" name="description" value="Compra en mi tienda" />
      <input type="hidden" name="referenceCode" value="unique_order_reference" />
      <input type="hidden" name="amount" value="100" />
      <input type="hidden" name="currency" value="COP" />
      <input type="hidden" name="signature" value={firma} />
      <input type="hidden" name="test" value="1" /> {/* Para el entorno de pruebas */}
      <input type="hidden" name="buyerEmail" value="buyer@test.com" />
      <input type="hidden" name="responseUrl" value="https://www.google.com/" />
      <input type="hidden" name="confirmationUrl" value="https://www.google.com/" />

      {/* Botón para completar la compra */}
      <button type="submit">
        Pagar
      </button>
    </form>
  );
};

export default PayUForm;
