import { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import './styles/App.css';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon at ${formData.email}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <h1>Modern Web Solutions</h1>
          <p>Building exceptional digital experiences with cutting-edge React technology</p>
          <button className="hero-btn" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Discover More
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2>About Our Services</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Expertise</h3>
              <p>
                We specialize in developing high-performance web applications using modern React technologies.
                Our team is committed to delivering scalable, maintainable, and user-centric solutions.
              </p>
              <p>
                With a focus on clean code and best practices, we ensure your digital presence stands out
                in today's competitive landscape.
              </p>
              <h3 style={{ marginTop: '2rem' }}>Why Partner With Us</h3>
              <ul className="features">
                <li>Advanced React Development</li>
                <li>Fully Responsive Design</li>
                <li>Optimized Performance</li>
                <li>Professional Code Standards</li>
                <li>Continuous Support</li>
              </ul>
            </div>
            <div className="about-image">
              🚀
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2>Contact Us</h2>
          <div className="contact-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

