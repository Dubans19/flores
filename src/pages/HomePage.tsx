import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
// import PayUComponent from '../components/Pagos';
import PayUForm from '../components/Pagos';
import CardComponent from '../components/CardComponents';
import ProductGrid from '../components/ProductGrid';
import Informacion from '../components/Informacion';
// import PiedePagina from '../components/PiedePagina';
// import SearchOverlay from '../components/SearchOverlay';

const HomePage: React.FC = () => {
    useEffect(() => {
        // Forzar el scroll al top al cargar el componente
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
    {/* <Topbar/>
    <Header /> */}
    <Slider />
    <Footer/>
    <Carousel/>
    <CardComponent/>
    <ProductGrid/>
    <Informacion/>
    {/* <PiedePagina/> */}

    <PayUForm/>
    </div>
  );
};

export default HomePage;
