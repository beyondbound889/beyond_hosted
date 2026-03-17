import React, { useState } from "react";
import "./BeforeAfter.css"; // See the CSS below

const ImageSlider = ({ beforeImg, afterImg }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="slider-container">
      {/* After Image */}
      <img src={afterImg} alt="After" className="image-after" />

      {/* Before Image with Clip-Path */}
      <div
        className="image-before"
        style={{
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          backgroundImage: `url(${beforeImg})`,
        }}
      />

      {/* The Invisible Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(e.target.value)}
        className="slider-input"
      />

      {/* The Custom Handle Overlay */}
      <div className="slider-handle" style={{ left: `${sliderPos}%` }}>
        <div className="handle-line" />
        <div className="handle-circle">
          <span className="arrow-left"></span>
          <span className="arrow-right"></span>
        </div>
        <div className="handle-line" />
      </div>

      <div className="before-tag" style={{ opacity: sliderPos < 10 ? 0 : 1 }}>
        before
      </div>
      <div className="after-tag" style={{ opacity: sliderPos > 90 ? 0 : 1 }}>
        after
      </div>
    </div>
  );
};

export default ImageSlider;
