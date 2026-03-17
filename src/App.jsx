import Product from './product/Product.jsx'
import AboutUs from './about/components/AboutUs.jsx'
import Home from './home/App.jsx'
import './App.css'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import useMenuStore from './useMenuStore';

function App() {
  const activePage = useMenuStore((state) => state.activePage);

  return (
    <>
      <Navbar />
      <div /* className='scaled-wrapper' */>
   
        <div /* className='scaled-wrapper' */>

        {activePage === 'products' && <Product />}
        </div>

        {activePage === 'about' && <AboutUs />}
        {activePage === 'home' && <Home />}
      </div>
      <Footer />
    </>
  )
}

export default App

