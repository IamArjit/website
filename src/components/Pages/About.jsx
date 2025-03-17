import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-image">
          <img src="hanish-sir.webp" alt="Hanish_Sir" />
        </div>
        <div className="about-text">
          <h1>Astrologer Hanish Bagga</h1>
          <p>
            Welcome to the blessed presence of Acharya Ganesh, who with his
            extensive bank of deep-rooted knowledge lights up wisdom beacons as
            guide in the arenas of Vedic astrology and Vastu Shastra, serving
            individualized understandings and answers interlinking timeless
            sciences to daily life dilemmas. Expert hands guide you with steps
            toward balance amid the perplexing maze of complex life as informed
            by age-old wisdom coupled with transformative answers that light
            your passage.
            <br />
            Acharya Ganesh is a celebrated scholar in astrology and Vastu. This
            has made him work all his life to study how cosmic forces influence
            human beings. He’s well-versed in celestial energy and how their
            alignment can positively affect our energy, thereby being able to
            win harmony, success, and peace in every single aspect of life.
          </p>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <p className="stat-number">15+</p>
          <p className="stat-label">YEARS OF EXPERIENCE</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">3 Lac+</p>
          <p className="stat-label">LIVES TOUCHED</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">700+</p>
          <p className="stat-label">VIDEOS</p>
        </div>
      </div>

      <div className="about-containers">
        {/* Left side - Text */}
        <div className="about-texts">
          <h1>Astrologer Hanish Bagga</h1>
          <p>Talk one-to-one with Hanish Bagga Astrologer.</p>
          <ul>
            <li>
              Solutions to all your life problems including marriage, love,
              education, career, and everything.
            </li>
            <li>
              Guidance on your spiritual journey as to what poojas and deities
              will be auspicious for you.
            </li>
            <li>A thorough astrological analysis of your life problems.</li>
            <li>
              An understanding of where you have gone wrong and how to do it
              right.
            </li>
            <li>
              Become master or choose a career in Astrology: Vedic Astrology,
              Lal Kitab, Numerology, Vastu, Kundli.
            </li>
            <li>Astrology Consultation for Family & Health Matters.</li>
            <li>Astrological Birthstone & Gemstone Consultation.</li>
            <li>Astrological Remedies.</li>
            <li>Seek Expert Guidance for Personal Development.</li>
            <li>Life Path Forecasts with Astrological Precision.</li>
            <li>Purchase best astrological product and services.</li>
            <li>Astrological Birthstone & Gemstone Consultation.</li>
            <li>Personalized Birth Chart Reading.</li>
            <li>Astrology for Financial Prosperity.</li>
            <li>Guidance for Students & Young Professionals.</li>
            <li>Planetary Influence Analysis.</li>
            <li>Career & Business Forecasting.</li>
            <li>Astrological Analysis for Property & Real Estate.</li>
            <li>Exclusive Astrological Events & Workshops.</li>
          </ul>
        </div>

        {/* Right side - Background image */}
        <div className="about-images">
          {/* Image is used as background via CSS */}
        </div>
      </div>
    </>
  );
};

export default About;
