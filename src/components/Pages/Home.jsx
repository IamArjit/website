import React, { useState } from "react";
import "./Home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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

    // if (!name || !email || !phone) {
    //   alert("All fields are required.");
    //   return;
    // }

    // const formData = { name, email, phone };

    // try {
    //   setIsSubmitting(true);
    //   await axios.post(
    //     "https://script.google.com/macros/s/AKfycby1vzCdkObkDgmeYeWxp5ijxCn8pAJL92z0whVLMDG7geEISeK79zVhcRsXu71QE6iN/exec",
    //     formData
    //   );
    //   setName("");
    //   setEmail("");
    //   setPhone("");
    //   alert("Form data submitted successfully!");
    // } catch (error) {
    //   console.error(error);
    //   alert("There was an error submitting your form. Please try again.");
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="left-content">
          <h1>INDIA’S BEST ASTROLOGER HANISH BAGGA</h1>
          <p>
            Astrologer Hanish Bagga, founder & director of “Acharya Ganesh” is a
            distinguished figure in the field of Astrology, known for
            transforming the domains of astrology, vastu, and other disciplines.
            He has worked in the astrological field for more than a decade and
            is well-known and respected for his unique methods and profound
            insights…
          </p>
          <button className="cta-button">
            Book Appointment <FaArrowRightLong />
          </button>
        </div>
        <div className="right-content">
          <form className="astrology-form" onSubmit={handleSubmit} action={""}>
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
  );
};

export default Home;
