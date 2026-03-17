import { useState } from "react";

import "./Product.css";
import BeforeAfterSlider from "./BeforeAfter";
import GlycomicsCard from "./GlycomicsCard";
import LandingDetails from "./LandingDetails";
import ProductPage from "./ProductPage";
import SoundFamiliar from "./SoundFamiliar";
import IngredientsSection from "./IngredientsSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ProductPage />
        <SoundFamiliar />
        <IngredientsSection />
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div
            style={{
              fontFamily: "Bree Serif",
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
          beforeImg={"src/assets/after.jpg"}
          afterImg={"src/assets/before.jpg"}
        />
        <GlycomicsCard />
        <LandingDetails />
      </div>
    </>
  );
}

export default App;
