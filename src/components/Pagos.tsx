import React, { useEffect, useState } from 'react';
import generateHash from '../utils/helpers';

const PayUForm = () => {
  // 
  const api_key = import.meta.env.VITE_API_KEY
  const merchantId = import.meta.env.VITE_MERCHANTID
  const accountId = import.meta.env.VITE_ACCOUNT_ID
  const [firma, setfirma] = useState("")
  const handleSubmit = (e:any) => {
    e.preventDefault();
    document.getElementById('payu-form').submit(); // Enviar el formulario a PayU
  };

  useEffect(() => {
    const firma = generateHash(api_key,merchantId,"unique_order_reference","100")
    console.log("firma es", firma)
    setfirma(firma)
  }, [])

  return (
    // <form method="POST" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
    //   <input name="merchantId" type="hidden" value={`${merchantId}`} />
    //   <input name="accountId" type="hidden" value={`${accountId}`} />
    //   <input name="description" type="hidden" value="Pago de prueba" />
    //   <input name="referenceCode" type="hidden" value="TEST001" />
    //   <input name="amount" type="hidden" value="10000" />
    //   <input name="tax" type="hidden" value="0" />
    //   <input name="taxReturnBase" type="hidden" value="0" />
    //   <input name="currency" type="hidden" value="COP" />
    //   <input name="signature" type="hidden" value={`${firma}`} />
    //   <input name="test" type="hidden" value="1" />
    //   <input name="buyerEmail" type="hidden" value="test@test.com" />
    //   <input name="responseUrl" type="hidden" value="http://localhost:5175/" />
    //   <input name="confirmationUrl" type="hidden" value="http://localhost:5175/" />
    //   <button type="submit">Pagar</button>
    // </form>

<form
id="payu-form"
method="POST"
action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu"
>
{/* Credenciales de PayU */}
<input type="hidden" name="merchantId" value={`${merchantId}`} />
<input type="hidden" name="accountId" value={`${accountId}`} />
<input type="hidden" name="description" value="Compra en mi tienda" />
<input type="hidden" name="referenceCode" value="unique_order_reference" />
<input type="hidden" name="amount" value="100" />
<input type="hidden" name="currency" value="COP" />
<input type="hidden" name="signature" value={`${firma}`} />
<input type="hidden" name="test" value="1" /> {/* Para el entorno de pruebas */}
<input type="hidden" name="buyerEmail" value="buyer@test.com" />
<input type="hidden" name="responseUrl" value="https://www.google.com/" />
<input type="hidden" name="confirmationUrl" value="https://www.google.com/" />

{/* Botón para completar la compra */}
<button type="submit" onClick={handleSubmit}>
  Pagar
</button>
</form>
  );
};

export default PayUForm;
