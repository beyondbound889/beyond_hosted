import "./App.css";
import Navbar from "./components/navbar";
import HowItWorks from "./components/Howit";
import Trust from "./components/trust";
import AboutBeyond from "./components/AboutBeyond";
import MeetGlycomicsShowcase from "./components/MeetGlycomicsShowcase";
import WhoGlycomics from "./components/WhoGlyco";
import ProductDetailSection from "./components/ProductDetailSection";
import PurchaseAssurance from "./components/PurchaseAssurance";
import WhyDifferentSection from "./components/WhyDifferentSection";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Meet from "./components/MeetGlyco";
import LovedSection from "./components/LovedSection";
import TransformationSection from "./components/TransformationSection";

function App() {
  return (
    <div className="page-container">
      {/*  <Navbar /> */}
      <Meet />
      <Trust />
      <AboutBeyond />
      <MeetGlycomicsShowcase />
      <WhoGlycomics />
      <ProductDetailSection />
      <PurchaseAssurance />
      <WhyDifferentSection />
      <FAQ />
      <HowItWorks />
      <LovedSection />
      <TransformationSection />
      {/* <Footer /> */}
    </div>
  );
}
export default App;
