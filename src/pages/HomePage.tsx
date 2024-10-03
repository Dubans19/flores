import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
// import PayUForm from '../components/Pagos';
import CardComponent from '../components/CardComponents';
import ProductGrid from '../components/ProductGrid';
import Informacion from '../components/Informacion';
// import { useSelector } from 'react-redux';
// import PiedePagina from '../components/PiedePagina';
// import SearchOverlay from '../components/SearchOverlay';

const HomePage: React.FC = () => {
  // const producto = useSelector((state: any) => state); // Reemplaza 'any' con el tipo adecuado si lo tienes

  // const totalPrecio = producto.productos.reduce((acumulador: number, producto: { precio: number }) => {
  //   return acumulador + producto.precio;
  // }, 0);
  useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  // const state = queryParams.get('lapTransactionState');
  // const transactionId = queryParams.get('transactionId');
  // const referenceCode = queryParams.get('referenceCode');
  // const amount = queryParams.get('TX_VALUE');

  // console.log("el estado es state",state)
  // console.log("transactionId es",transactionId)
  // console.log("reference code es",referenceCode)
  // console.log("amount es",amount)


 
  // const currency = queryParams.get('currency');
    // Forzar el scroll al top al cargar el componente
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      {/* <Topbar/>
    <Header /> */}
      <Slider />
      <Footer />
      <Carousel />
      <CardComponent />
      <ProductGrid />
      <Informacion />
      {/* <PiedePagina/> */}
      {/* {totalPrecio > 0 ? <PayUForm totalPrecio={totalPrecio} /> : null} */}

    </div>
  );
};

export default HomePage;
