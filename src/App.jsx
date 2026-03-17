import { useState } from 'react'
import Product from './product/Product.jsx'
import './App.css'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import useMenuStore from './useMenuStore';

function App() {
  const activeMenu = useMenuStore((state) => state.activeMenu);
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {activeMenu==='products' && <Product/>}
    <Footer />
    </>
  )
}

export default App
