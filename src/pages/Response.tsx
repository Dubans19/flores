import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';

const TransactionResponse: React.FC = () => {
  // Estado para guardar los parámetros de la transacción
  const [status, setStatus] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [referenceCode, setReferenceCode] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | null>(null);

  // Obteniendo la URL con `useLocation`
  const location = useLocation();
const Alert=()=>{

}
  useEffect(() => {
    // Parseamos los parámetros de la URL usando URLSearchParams
    const queryParams = new URLSearchParams(location.search);
    const transactionState = queryParams.get('lapTransactionState');
    const transactionId = queryParams.get('transactionId');
    const referenceCode = queryParams.get('referenceCode');
    const amount = queryParams.get('TX_VALUE');

    // Guardar valores en el estado
    setStatus(transactionState);
    setTransactionId(transactionId);
    setReferenceCode(referenceCode);
    setAmount(amount ? parseFloat(amount) : null); // Convertir el monto a número

    // Scroll al top al cargar el componente
    window.scrollTo(0, 0);

    // Logging para depurar
    console.log('Transaction State:', transactionState);
    console.log('Transaction ID:', transactionId);
    console.log('Reference Code:', referenceCode);
    console.log('Amount:', amount);
  }, [location]);

  // Estilo dinámico para el estado de la transacción
  const statusColor =
    status === 'APPROVED'
      ? 'text-green-600 bg-green-100'
      : status === 'DECLINED'
      ? 'text-rose-500 bg-rose-200'
      : status=="PENDING"?'text-yellow-600 bg-yellow-100':status==="EXPIRED" ? "text-orange-500 bg-orange-200": status === "ERROR" ? "text-white bg-red":null;

      const estado =
    status === 'APPROVED'
      ? 'Pago Aprobado'
      : status === 'DECLINED'
      ? 'Pago Rechazado'
      : status=="PENDING"?'Pago pendiente':status==="EXPIRED" ? "Pago Expirado": status === "ERROR" ? "Error en el pago":"Pago Desconocido";
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Detalles de la Transacción
        </h1>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-600">Transaction ID:</span>
            <span className="text-gray-800">{transactionId || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-600">Código de Referencia:</span>
            <span className="text-gray-800">{referenceCode || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-600">Estado:</span>
            <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${statusColor}`}>
              {estado || 'Desconocido'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-600">Monto Pagado:</span>
            <span className="text-gray-800">
              {amount !== null ? `${formatCurrency(amount)}` : 'N/A'}
            </span>
          </div>
        </div>
        <div className="text-center">
            <Link to="/">
          <button className="mt-6 px-4 py-2 bg-rose-600 text-white rounded-lg shadow hover:bg-rose-500 transition duration-200" onClick={Alert}>
            Volver a Inicio
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionResponse;
