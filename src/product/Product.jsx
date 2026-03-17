import "./Product.css";
import BeforeAfterSlider from "./BeforeAfter";
import GlycomicsCard from "./GlycomicsCard";
import LandingDetails from "./LandingDetails";
import ProductPage from "./ProductPage";
import SoundFamiliar from "./SoundFamiliar";
import IngredientsSection from "./IngredientsSection";
import beforeImg from "./assets/before.jpg";
import afterImg from "./assets/after.jpg";

function App() {
  return (
    <>
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '80px',
      }}>
        <ProductPage />
        <SoundFamiliar />
        <IngredientsSection />
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div
            style={{
              fontFamily: "Inter",
              fontWeight: 200,
              fontSize: "64px",
              lineHeight: "82px",
            }}
          >
            Spiking Yesterday.
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "56px",
              lineHeight: "72px",
            }}
          >
            Stable Today
          </div>
        </div>
        <BeforeAfterSlider
          beforeImg={afterImgImg}
          afterImg={beforeImg}
        />
        <GlycomicsCard />
        <LandingDetails />
      </div>
    </>
  );
}

export default App;

