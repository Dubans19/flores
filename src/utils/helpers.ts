// utils/helpers.js
// import SHA256 from 'crypto-js/sha256';
import CryptoJS from 'crypto-js';

export const formatCurrency = (precio:number) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(precio);
};



// const generateHash = (apiKey:string,merchantId:string,reference_code:string,precio:string) => {
//     let firma=`${apiKey}~${merchantId}~${reference_code}~${precio}~COP`

//     const hashed = SHA256(firma).toString();
//     return hashed
// };

// export default generateHash;

const generateHash = (apiKey:string, merchantId:string, referenceCode:string, amount:string) => {
    // Crear una cadena con los datos que quieras firmar
    const stringToHash = `${apiKey}~${merchantId}~${referenceCode}~${amount}~COP`;
    
    // Generar la firma MD5
    const signature = CryptoJS.MD5(stringToHash).toString();
  
    return signature;
  };





  



  export default generateHash;




