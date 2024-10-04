import { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../utils/helpers';
import {Cart} from "./Cart"
import SearchOverlay from './SearchOverlay';
import { Link } from 'react-router-dom';
import rosas from "../assets/rosas.png";
// import PayUForm from './Pagos';
import { groupProducts } from '../utils/groupProducts';

interface MenuItem {
    label: string;
    href: string;
    submenu?: Array<{
        label: string;
        href: string;
        imageUrl: string;
    }>;
}

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const producto = useSelector((state: any) => state); // Reemplaza 'any' con el tipo adecuado si lo tienes
    const count = producto.productos.length;
    const groupedProducts=groupProducts(producto.productos)

    // console.log("los productos son",producto.productos)
    // const groupedProducts = producto.productos.reduce((acc:any, product:any) => {
    //     const existingProduct = acc.find(p => p.id === product.id);
      
    //     if (existingProduct) {
    //       existingProduct.cantidad += 1; // Si ya existe el producto, incrementamos la cantidad
    //     } else {
    //       acc.push({ ...product, cantidad: 1 }); // Si no existe, lo agregamos con cantidad 1
    //     }
      
    //     return acc;
    //   }, []);

    //   console.log("productos agrupados son",groupedProducts)

    const totalPrecio = producto.productos.reduce((acumulador: number, producto: { precio: number }) => {
        return acumulador + producto.precio;
    }, 0);

    const menuItems: MenuItem[] = [
        { label: 'Novedades', href: '#novedades' },
        {
            label: 'Flores',
            href: '#flores',
            submenu: [
                { label: 'Rosas', href: '#rosas', imageUrl: 'https://via.placeholder.com/150x100?text=Rosas' },
                { label: 'Girasoles', href: '#girasoles', imageUrl: 'https://via.placeholder.com/150x100?text=Girasoles' },
                { label: 'Gerberas', href: '#gerberas', imageUrl: 'https://via.placeholder.com/150x100?text=Gerberas' },
                { label: 'Tulipanes', href: '#tulipanes', imageUrl: 'https://via.placeholder.com/150x100?text=Tulipanes' },
            ],
        },
        { label: 'Diseños', href: '#disenos' },
        { label: 'Fechas Especiales', href: '#fechas' },
        { label: 'Blog', href: '#blog' },
        { label: 'Flores para empresas', href: '#empresa' },
        { label: 'Eventos', href: '#eventos' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubMenu = (index: number) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`bg-white shadow-md py-4 fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'sticky top-0 shadow-lg bg-white' : ''
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                <div className="flex md:hidden items-center">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <FaBars size={24} />
                    </button>
                </div>

                <div className="flex items-center justify-center w-full md:w-auto">
                    <Link to="/"><img src={rosas} alt="Logo" className="mx-auto cursor-pointer" width={50} height={50} /></Link>
                </div>

                <div className="flex items-center space-x-4 md:order-2">
                    <a href="#search" className="text-black hover:text-rose-200" onClick={() => setIsOpen(true)}><FaSearch size={20} /></a>
                    <Link to="/iniciar-sesion" className="text-black hover:text-rose-200"><FaUser size={20} /></Link>
                    <a href="#cart" className="relative text-black hover:text-rose-200" onClick={() => setOpenCart(!openCart)}>
                        <FaShoppingBag size={24} />
                        <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-3 bg-rose-300 px-1 py-0.5 rounded-full text-white text-xs">
                            {count}
                        </span>
                    </a>

                    <h1>Total: {formatCurrency(totalPrecio)}</h1>
                    {/* {totalPrecio > 0 ? <PayUForm totalPrecio={totalPrecio} /> : null} */}
                    </div>
            </div>
            {isOpen && <SearchOverlay onClose={() => setIsOpen(false)} />}
            {openCart && totalPrecio > 0 ? (
        <Cart producto={groupedProducts} onClose={() => setOpenCart(false)} />
      ):null}
   
            

            {isMenuOpen && (
                <div className="md:hidden bg-white w-full py-4 px-6 space-y-4 shadow-md">
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center">
                                <a href={item.href} className="text-black">{item.label}</a>
                                {item.submenu && (
                                    <button
                                        onClick={() => toggleSubMenu(index)}
                                        className="text-black focus:outline-none"
                                    >
                                        {openSubMenuIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                )}
                            </div>
                            {item.submenu && openSubMenuIndex === index && (
                                <div className="mt-2 pl-4 space-y-2">
                                    {item.submenu.map((subItem, subIndex) => (
                                        <a key={subIndex} href={subItem.href} className="block text-black">
                                            {subItem.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <div className="hidden md:flex justify-center space-x-6 text-black">
                {menuItems.map((item, index) => (
                    <div key={index} className="relative group">
                        <a href={item.href} className="hover:text-rose-200">{item.label}</a>
                        {item.submenu && (
                            <div className="absolute left-0 hidden mt-2 w-72 bg-white border rounded-md shadow-lg group-hover:block">
                                <div className="flex p-4 space-x-4">
                                    <div>
                                        <ul>
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex} className="mb-2">
                                                    <a href={subItem.href} className="block text-black hover:text-rose-200">
                                                        {subItem.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <img
                                            src={item.submenu[0].imageUrl}
                                            alt={item.submenu[0].label}
                                            className="w-20 h-20 rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Header;
