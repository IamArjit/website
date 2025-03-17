import React, { useState } from "react";
import "./Home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "./pic1.webp",
      alt: "Course 1",
      description: "25 Golden Rules of Astrovastu",
      oldPrice: "₹10,000",
      price: "₹8,000",
    },
    {
      src: "./pic2.webp",
      alt: "Course 2",
      description: "Two Days Master Class on Remedies",
      oldPrice: "₹1,54,000",
      price: "₹1,50,000",
    },
    {
      src: "./pic3.webp",
      alt: "Course 3",
      description: "Master Class on Gemstones (Rashi Ratna)",
      oldPrice: "₹50,000",
      price: "₹48,000",
    },
    {
      src: "./pic4.webp",
      alt: "Course 4",
      description: "Impact of Rahu on Your Health & Finance – Astro Vastu",
      oldPrice: "₹78,000",
      price: "₹75,000",
    },
    {
      src: "./pic5.webp",
      alt: "Course 5",
      description: "Master Course on Ashtakvarga",
      oldPrice: "₹66,000",
      price: "₹60,000",
    },
    {
      src: "./pic6.webp",
      alt: "Course 6",
      description:
        "Mastering the Art of Astrology – A Mentorship Program by Hanish Bagga Become a Professional Astrologer",
      oldPrice: "₹2,20,000",
      price: "₹2,15,000",
    },
    {
      src: "./pic7.webp",
      alt: "Course 7",
      description:
        "25 Golden Rules Impact of Rahu on Your Health & Finance – Astro Vastu Astrovastu",
      oldPrice: "₹55,000",
      price: "₹52,000",
    },
    {
      src: "./pic1.webp",
      alt: "Course 8",
      description: "Property Yoga in Birth Chart",
      oldPrice: "₹98,000",
      price: "₹96,000",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (images.length - 2)) % (images.length - 2)
    );
  };

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

        <div className="carousel-container">
          <h1 className="carousel-heading">
            Explore Our Upcoming & Live Courses
          </h1>
          <div className="carousel-wrapper">
            {/* Display 3 images at a time */}
            {images
              .slice(currentIndex, currentIndex + 3)
              .map((image, index) => (
                <div className="carousel-item" key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="carousel-image"
                  />
                  <p className="carousel-description">{image.description}</p>
                  <p className="carousel-price">
                    <span className="old-price">{image.oldPrice}</span>
                    <span className="new-price">{image.price}</span>
                  </p>
                </div>
              ))}
          </div>
          <button className="carousel-btn prev-btn" onClick={goToPrev}>
            <IoIosArrowBack style={{ paddingRight: "4px" }} />
          </button>
          <button className="carousel-btn next-btn" onClick={goToNext}>
            <IoIosArrowForward />
          </button>
        </div>

        <h1 className="media">Media For Interactions</h1>
        <div className="video-grid">
          <div className="video-item">
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/uJuCg9c91NQ/maxresdefault.jpg')",
              }}
            >
              <img
                className="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
              />
              <iframe
                src="https://www.youtube.com/embed/uJuCg9c91NQ?si=7d_mlOsR9cuXsnjW"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/h-9U23__dxk/maxresdefault.jpg')",
              }}
            >
              <img
                className="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
              />
              <iframe
                src="https://www.youtube.com/embed/h-9U23__dxk?si=DjOKC0HHjTVNPViv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/WnGSdOS3w7I/maxresdefault.jpg')",
              }}
            >
              <img
                className="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
              />
              <iframe
                src="https://www.youtube.com/embed/WnGSdOS3w7I?si=qfSdZnT2CxChugNu"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <div
              class="thumbnail"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/8u7pp-RzdNw/maxresdefault.jpg')",
              }}
            >
              <img
                className="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
              />
              <iframe
                src="https://www.youtube.com/embed/8u7pp-RzdNw?si=bDaA_cZr6xNPKIQ6"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/Bji_sPBhPe4/maxresdefault.jpg')",
              }}
            >
              <img
                className="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
              />
              <iframe
                src="https://www.youtube.com/embed/Bji_sPBhPe4?si=0mvzDQGMJhtHJl9Q"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/LgDNQ0H27L0/maxresdefault.jpg')",
              }}
            >
              <img
                className="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
              />
              <iframe
                src="https://www.youtube.com/embed/LgDNQ0H27L0?si=_FjZ51KarKQTg6Qz"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/6yximacpOQk/maxresdefault.jpg')",
              }}
            >
              <img
                className="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
              />
              <iframe
                src="https://www.youtube.com/embed/6yximacpOQk?si=lcnXSqXXyyP3jxAq"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/Gt6e9P97vvg/maxresdefault.jpg')",
              }}
            >
              <img
                className="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
              />
              <iframe
                src="https://www.youtube.com/embed/Gt6e9P97vvg?si=easm1BZwvXGPtYgp"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-item">
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/Gt6e9P97vvg/maxresdefault.jpg')",
              }}
            >
              <img
                className="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
              />
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Rcv6AQz_tSQ?si=16xXyzQcTgjNHUJF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* Can you make me a card in which first there should be an image then a nold heading then its description and the card's height should be longer and the card also in a carousal and there should also be logic to move it left to right or right to left make it attractive */}
        <h1>Our Blogs</h1>
      </div>
    </>
  );
};

export default Home;
