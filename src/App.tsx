
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Login from './pages/Login'
import Topbar from './components/TopBar'
import PiedePagina from './components/PiedePagina'
import ProductDetail from './pages/ProductDetail'
import TransactionResponse from './pages/Response'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div >
      <BrowserRouter>
        <Topbar />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/iniciar-sesion' element={<Login />} />
          <Route path='/respuesta_transaccion' element={<TransactionResponse/>} />
          <Route path='flores/:id' element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
 

        </Routes>
        <PiedePagina />
      </BrowserRouter>
    </div>
  )
}

export default App
