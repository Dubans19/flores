import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../utils/helpers';
import Cart from './Cart';
import SearchOverlay from './SearchOverlay';
import { Link } from 'react-router-dom';
import rosas from "../assets/rosas.png"

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el estado del menú mobile
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null); // Controla qué submenú está abierto
    const [isScrolled, setIsScrolled] = useState(false);
    const [openCart, setOpencart] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // Controla si la página ha hecho scroll
    const producto = useSelector((state) => state);
    console.log("producto redux", producto)
    const count = producto.productos.length
    const precio = producto.productos
    const totalPrecio = precio.reduce((acumulador, producto) => {
        return acumulador + producto.precio;
    }, 0);





    const menuItems = [
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
        setIsMenuOpen(!isMenuOpen); // Alterna la apertura del menú mobile
    };

    const toggleSubMenu = (index: number) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index); // Abre o cierra el submenú
    };
    console.log("open",openCart)

    // Agregar un efecto de scroll para hacer el menú sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // Cambia el estado si se ha hecho scroll
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
                {/* Menú hamburguesa en móviles */}
                <div className="flex md:hidden items-center">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <FaBars size={24} />
                    </button>
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center w-full md:w-auto">
                    <Link to="/"><img src={rosas} alt="Logo" className="mx-auto cursor-pointer" width={50} height={50}/></Link>
                </div>

                {/* Iconos a la derecha */}
                <div className="flex items-center space-x-4 md:order-2">
                    <a href="#search" className="text-black hover:text-rose-200"    onClick={() => setIsOpen(true)}><FaSearch size={20} /></a>
                    <Link to="/iniciar-sesion" className="text-black hover:text-rose-200"><FaUser size={20} /></Link>
                    <a href="#cart" className="relative text-black hover:text-rose-200" onClick={()=>setOpencart(!openCart)}>
                        <FaShoppingBag size={24} /> {/* Tamaño del ícono */}
                        <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-3 bg-rose-300 px-1 py-0.5 rounded-full text-white text-xs">
                            {count}
                        </span>
                        
                    </a>

                   

                    <h1>Total: {formatCurrency(totalPrecio)}</h1>
                </div>
            </div>
             {isOpen && <SearchOverlay onClose={() => setIsOpen(false)}/>}
            {openCart && <Cart producto={precio}/>}

            {/* Menú hamburguesa desplegable para pantallas móviles */}
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
                            {/* Submenú solo si está abierto */}
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

            {/* Menú para pantallas grandes */}
            <div className="hidden md:flex justify-center space-x-6 text-black">
                {menuItems.map((item, index) => (
                    <div key={index} className="relative group">
                        <a href={item.href} className="hover:text-rose-200">{item.label}</a>
                        {item.submenu && (
                            <div className="absolute left-0 hidden mt-2 w-72 bg-white border rounded-md shadow-lg group-hover:block">
                                <div className="flex p-4 space-x-4">
                                    {/* Contenedor de enlaces */}
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
                                    {/* Imagen de la categoría */}
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
