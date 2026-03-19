import React from "react";
import "../css/OurTeam.css";
import priyanshuImg from "../assets/priyanshu.jpg";
import badgeImg from "../assets/badge.jpg";
import meenakshi from "../assets/meenakshi.jpg";
import vasudev from "../assets/vasudev.jpg";
import minu from "../assets/drminu.jpg";
import chaitanya from "../assets/chaitanya.jpg";
import somaiya from "../assets/somaiya.jpg";
import omni from "../assets/omni.jpg";
import bio from "../assets/bio.jpg";

const OurTeam = () => {

  const coreTeam = [
    {
      id: 1,
      name: "Priyanshu Chauhan",
      title: "Director & Founder",
      qualification: "MBA Healthcare Management KJ",
      location: "Somaiya, Mumbai",
      image: priyanshuImg,
      badge: somaiya
    },
    {
      id: 2,
      name: "Dr. Meenakshi Amrutkar",
      title: "Clinical & Scientific Advisor",
      qualification: "25+ Year ex in Ayurveda research",
      location: "MD Ayurveda, Phd Prof",
      image: meenakshi,
      badge: badgeImg
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Chaitanya Desai",
      desc: "40+ Years Ex in Pharma",
      image: vasudev,
      badge: bio
    },
    {
      id: 2,
      name: "Dr Minu Ramkrishna",
      desc: "MBBS, MD | Medical Superintendent",
      image: minu,
      badge: somaiya
    },
    {
      id: 3,
      name: "Vasudev Tribhuvan",
      desc: "26+ Years Ex in Pharma",
      image: chaitanya,
      badge: omni
    }
  ];

  return (
    <section className="our-team">

      {/* Core Team */}
      <h2>Our Team</h2>
      <div className="team-container">
        {coreTeam.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image-wrapper">
               <div className="mentor-bg"></div> {/* Teal Shadow Element */}
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="team-badge">
                <div className="badge-image">
                  <img src={member.badge} alt="Badge" />
                </div>
              </div>
            </div>

            <h3>{member.name}</h3>
            <p className="title">{member.title}</p>
            <p className="qualification">{member.qualification}</p>
            <p className="location">{member.location}</p>
          </div>
        ))}
      </div>


      {/* Mentors */}
      <h2 className="mentor-title">Mentors</h2>

      <div className="mentors-container">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <div className="mentor-image-wrapper">
             <div className="mentor-bg"></div> {/* Teal Shadow Element */}
              <div className="mentor-image">
                <img src={mentor.image} alt={mentor.name} />
              </div>

              <div className="mentor-badge">
                <div className="mentor-badge-image">
                  <img src={mentor.badge} alt="Mentor Badge" />
                </div>
              </div>
            </div>

            <h4>{mentor.name}</h4>
            <p>{mentor.desc}</p>
          </div>
        ))}
      </div>




    </section>
  );
};

export default OurTeam;
