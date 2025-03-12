import React, { useState } from "react";
import "./Home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbwxX3WVxxRNSZgWTLu7gurbmnkFeSQYgNSkKHmf3v6sFqaiZD95hWtbyPruZpA8TVR2/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${name}&Email=${email}&Phone=${phone}`,
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="home-container">
        <div className="content-container">
          <div className="left-content">
            <h1>INDIA’S BEST ASTROLOGER HANISH BAGGA</h1>
            <p>
              Astrologer Hanish Bagga, founder & director of “Acharya Ganesh” is
              a distinguished figure in the field of Astrology, known for
              transforming the domains of astrology, vastu, and other
              disciplines. He has worked in the astrological field for more than
              a decade and is well-known and respected for his unique methods
              and profound insights…
            </p>
            <button className="cta-button" onClick={() => navigate("/contact")}>
              Book Appointment <FaArrowRightLong />
            </button>
          </div>
          <div className="right-content">
            <form className="astrology-form" onSubmit={handleSubmit}>
              <h2>Get In Touch</h2>
              <label htmlFor="name">
                Name<span className="star">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
              />
              <label htmlFor="email">
                Email<span className="star">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
              />
              <label htmlFor="number">
                Phone No<span className="star">*</span>
              </label>
              <PhoneInput
                className="phoneinput"
                defaultCountry="in"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="image-container">
          <img src="./astrology.avif" alt="Astrology" />
        </div>
      </div>
      <div className="second-image-container">
        <img src="./second.avif" alt="Second_Image" />
      </div>

      {/* Box containing the images */}
      <div className="image-box">
        <div className="image-box-item">
          <img src="calendar.png" alt="Calender_Logo" />
          <p className="statistic-number">15+</p>
          <p className="statistic-label">YEARS OF EXPERIENCE</p>
        </div>
        <div className="image-box-item">
          <img src="tv.png" alt="Tv_Logo" />
          <p className="statistic-number">3 Lac+</p>
          <p className="statistic-label">LIVES TOUCHED</p>
        </div>
        <div className="image-box-item">
          <img src="video.png" alt="Video_Logo" />
          <p className="statistic-number">700+</p>
          <p className="statistic-label">VIDEOS</p>
        </div>
      </div>

      <div className="black">
        <h1>Our Services</h1>
        <div className="grid-container">
          <div className="service-item">
            <img src="./pic1.webp" alt="Astrology" />
            <p>Astrology- Understanding Your True Potential</p>
          </div>
          <div className="service-item">
            <img src="./pic2.webp" alt="Birth Chart" />
            <p>Birth Chart Astrology– Unlocking the Secrets of Your Birth</p>
          </div>
          <div className="service-item">
            <img src="./pic3.webp" alt="Love Astrology" />
            <p>Love Astrology– Navigating the Path of Romance</p>
          </div>
          <div className="service-item">
            <img src="./pic4.webp" alt="Career Prediction" />
            <p>Career Prediction– Unlocking Your Professional Success</p>
          </div>
          <div className="service-item">
            <img src="./pic5.webp" alt="Health Astrology" />
            <p>Health Astrology– Achieving Wellness Through Cosmic Insights</p>
          </div>
          <div className="service-item">
            <img src="./pic6.webp" alt="Matchmaking" />
            <p>Matchmaking– Harmonizing Relationships Through Astrology</p>
          </div>
          <div className="service-item">
            <img src="./pic7.webp" alt="Wealth and Prosperity" />
            <p>Wealth and Prosperity Astrology– Attracting Abundance</p>
          </div>
          <div className="service-item">
            <img src="./pic1.webp" alt="Astro Vastu" />
            <p>Astro Vastu– Aligning Your Space with Cosmic Energies</p>
          </div>
        </div>

        <h1 class="carousel-heading">Explore Our Upcoming & Live Courses</h1>
        <div class="carousel-container">
          <div class="carousel-wrapper">
            <div class="carousel-item">
              <img src="./pic1.webp" alt="Course 1" class="carousel-image" />
              <p class="carousel-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                tenetur.
              </p>
            </div>
            <div class="carousel-item">
              <img src="./pic2.webp" alt="Course 2" class="carousel-image" />
              <p class="carousel-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                tenetur.
              </p>
            </div>
            <div class="carousel-item">
              <img src="./pic3.webp" alt="Course 3" class="carousel-image" />
              <p class="carousel-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                tenetur.
              </p>
            </div>
            <div class="carousel-item">
              <img src="./pic4.webp" alt="Course 4" class="carousel-image" />
              <p class="carousel-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                tenetur.
              </p>
            </div>
            <div class="carousel-item">
              <img src="./pic5.webp" alt="Course 5" class="carousel-image" />
              <p class="carousel-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                tenetur.
              </p>
            </div>
            <div class="carousel-item">
              <img src="./pic6.webp" alt="Course 6" class="carousel-image" />
              <p class="carousel-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                tenetur.
              </p>
            </div>
            <div class="carousel-item">
              <img src="./pic7.webp" alt="Course 7" class="carousel-image" />
              <p class="carousel-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                tenetur.
              </p>
            </div>
            <div class="carousel-item">
              <img src="./pic8.webp" alt="Course 8" class="carousel-image" />
              <p class="carousel-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                tenetur.
              </p>
            </div>
          </div>
        </div>
        <button class="carousel-btn prev-btn">Prev</button>
        <button class="carousel-btn next-btn">Next</button>
      </div>
    </>
  );
};

export default Home;
