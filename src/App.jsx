import Product from './product/Product.jsx'
import AboutUs from './about/components/AboutUs.jsx'
import Home from './home/src//App.jsx'
import Science from './science/Science.jsx'
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
        {activePage === 'science' && <Science />}
      </div>
      <Footer />
    </>
  )
}

export default App

