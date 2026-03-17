import React from 'react';
import '../css/MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="mission-vision-container" id="mission-vision-section">
        <div className="mission-vision-bg-text">MISSION & VISION</div>
        <h2>Mission & Vision</h2>
      </div>

      <div className="mv-container">
        <div className="mv-card">
          <div className="mv-image">
            <img src="/images/mission.jpg" alt="Mission" />
          </div>
          <div className="mv-content">
            <h3>Mission</h3>
            <p>
              To deliver modern clinical supplement solutions that support long-term metabolic stability and whole-body health.
            </p>
          </div>
        </div>

        <div className="mv-card">
          <div className="mv-image">
            <img src="/images/vision.jpg" alt="Vision" />
          </div>
          <div className="mv-content">
            <h3>Vision</h3>
            <p>
              We combine traditional botanical intelligence with rigorous scientific formulation to create products that are effective, safe, and built for lifelong wellbeing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

