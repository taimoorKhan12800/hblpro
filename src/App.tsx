import './App.css';
import { useState, useEffect } from 'react';
import s1 from './assets/s1.webp';
import s2 from './assets/s2.webp';
import s3 from './assets/s3.webp';
import s4 from './assets/s4.webp';
import s5 from './assets/s5.webp';
import mainImage from '../public/main-image.png';
import logo from '../public/hbl-logo.png';
import { FaDownload, FaShieldAlt, FaLock, FaSync, FaUserFriends, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (menuOpen && !target.closest('.nav-links') && !target.closest('.mobile-menu-button')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDownload = () => {
    // Use Vercel's public directory path for the APK
    const apkUrl = '/HBL.apk'; // Assuming HBL.apk is in the public/ folder
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'HBL-Mobile.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadStarted(true);
    setTimeout(() => setDownloadStarted(false), 3000);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="site-header">
        <div className="container header-container">
          <div className="logo-container">
            <img src={logo} alt="HBL Mobile Logo" className="logo-img" />
            <span className="logo-text">HBL Mobile</span>
          </div>
          <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#download">Download</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowContactPopup(true); }} className="nav-button">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="text-center mb-8 w-full">
              <h1 className="mb-6">HBL Mobile Banking</h1>
              <p className="mb-8">
                Experience seamless banking on the go with HBL Mobile - your complete banking solution in your pocket.
              </p>
              <button className="btn btn-primary btn-large" onClick={handleDownload}>
                <FaDownload /> Download Now
              </button>
              {downloadStarted && <p className="text-success mt-4">Download started! Check your downloads folder.</p>}
            </div>
            <div className="w-full flex justify-center">
              <img src={mainImage} alt="HBL Mobile App Preview" className="main-app-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Key Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon"><FaShieldAlt /></div>
            <h3 className="feature-title">Secure Banking</h3>
            <p className="feature-description">Bank with confidence knowing your data is protected with advanced security measures.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaSync /></div>
            <h3 className="feature-title">Real-time Updates</h3>
            <p className="feature-description">Get instant notifications for all your account activities and transactions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaLock /></div>
            <h3 className="feature-title">Biometric Login</h3>
            <p className="feature-description">Quick and secure access with fingerprint or face recognition authentication.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaUserFriends /></div>
            <h3 className="feature-title">Easy Transfers</h3>
            <p className="feature-description">Send money to friends and family with just a few taps on your screen.</p>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-dot active"></span>
          <span className="scroll-dot"></span>
          <span className="scroll-dot"></span>
          <span className="scroll-dot"></span>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="screenshots">
        <div className="screenshots-header">
          <h2>App Screenshots</h2>
        </div>
        <div className="screenshots-container">
          <div className="screenshot-item">
            <img src={s1} alt="Login Screen" />
          </div>
          <div className="screenshot-item">
            <img src={s2} alt="Dashboard" />
          </div>
          <div className="screenshot-item">
            <img src={s3} alt="Transfer Money" />
          </div>
          <div className="screenshot-item">
            <img src={s4} alt="Account Details" />
          </div>
          <div className="screenshot-item">
            <img src={s5} alt="Bill Payment" />
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-dot active"></span>
          <span className="scroll-dot"></span>
          <span className="scroll-dot"></span>
          <span className="scroll-dot"></span>
          <span className="scroll-dot"></span>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download-section">
        <div className="container">
          <h2>Get HBL Mobile App Now</h2>
          <p>Download our app and experience the future of banking right in your hands. It's free, secure, and constantly updated with new features.</p>
          <button className="btn-lg" onClick={handleDownload}>
            <FaDownload /> Download APK
          </button>
          <p className="text-muted">Compatible with Android 5.0 and above</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-column">
              <img src={logo} alt="HBL Mobile Logo" className="footer-logo" />
              <p className="footer-about">
                HBL Mobile Banking app provides secure and convenient banking services on your smartphone. 
                Access your accounts, transfer funds, pay bills, and manage your finances anytime, anywhere.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#screenshots">Screenshots</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon"><FaEnvelope /></span>
                  <span>support@hbl.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon"><FaPhone /></span>
                  <span>+92 21 111 111 425</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon"><FaMapMarkerAlt /></span>
                  <span>123 Banking Street, Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p className="copyright">{new Date().getFullYear()} HBL Mobile. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      {showContactPopup && (
        <div className="contact-popup-overlay" onClick={() => setShowContactPopup(false)}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <h3>Contact HBL Support</h3>
            <p>
              For any queries or assistance with the HBL Mobile Banking App, please reach out to our customer support team:
            </p>
            <p>
              <strong>Email:</strong> support@hbl.com<br />
              <strong>Phone:</strong> +92 21 111 111 425<br />
              <strong>Hours:</strong> 24/7 Customer Support
            </p>
            <div className="popup-buttons">
              <button className="download-button" onClick={handleDownload}>Download App</button>
              <button className="close-button" onClick={() => setShowContactPopup(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;