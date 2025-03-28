import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaShieldAlt, FaLock, FaSync, FaUserFriends, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/HBL.apk";
    link.download = "HBL-Mobile.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadStarted(true);
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3000);
  };

  const s1 = "/main-image.png";
  const s2 = "/main-image.png";
  const s3 = "/main-image.png";
  const s4 = "/main-image.png";
  const s5 = "/main-image.png";

  return (
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-gray-800 w-screen max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8 box-border">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/hbl-logo.png" alt="HBL Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-semibold ml-2 text-green-700">HBL Mobile</span>
          </div>
          <button 
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-green-700 text-xl" /> : <FaBars className="text-green-700 text-xl" />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-green-700 transition-colors duration-200">Features</a>
            <a href="#screenshots" className="text-gray-700 hover:text-green-700 transition-colors duration-200">Screenshots</a>
            <a href="#download" className="text-gray-700 hover:text-green-700 transition-colors duration-200">Download</a>
            <button 
              className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
              onClick={() => setIsContactOpen(true)}
            >
              Contact
            </button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-2 px-4 shadow-lg">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#features" 
                className="py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#screenshots" 
                className="py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Screenshots
              </a>
              <a 
                href="#download" 
                className="py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
              <button 
                className="py-2 px-3 text-left bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors duration-200"
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
              HBL Mobile Banking
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
              Experience seamless banking on the go with HBL Mobile - your complete banking solution in your pocket.
            </p>
            <motion.button 
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg flex items-center justify-center mx-auto md:mx-0 w-full md:w-auto"
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={downloadStarted}
            >
              <FaDownload className="mr-2" /> 
              {downloadStarted ? 'Downloading...' : 'Download Now'}
            </motion.button>
            {downloadStarted && (
              <motion.p 
                className="text-green-600 mt-3 font-medium text-sm md:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Download started! Check your downloads folder.
              </motion.p>
            )}
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <motion.img 
              src="/main-image.png" 
              alt="HBL Mobile App Preview" 
              className="w-full md:w-3/4 max-h-[300px] md:max-h-96 object-contain shadow-xl rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Discover the powerful features that make HBL Mobile the perfect banking companion for your daily financial needs.</p>
          </div>
          
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x scrollbar-hide">
            <motion.div 
              className="flex-shrink-0 w-64 md:w-72 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl shadow-md overflow-hidden">
                <div className="text-green-700 text-2xl md:text-3xl p-4 bg-green-50">
                  <FaShieldAlt />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Secure Banking</h3>
                  <p className="text-gray-600">Bank with confidence knowing your data is protected with advanced security measures.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0 w-64 md:w-72 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl shadow-md overflow-hidden">
                <div className="text-green-700 text-2xl md:text-3xl p-4 bg-green-50">
                  <FaSync />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
                  <p className="text-gray-600">Get instant notifications for all your account activities and transactions.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0 w-64 md:w-72 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl shadow-md overflow-hidden">
                <div className="text-green-700 text-2xl md:text-3xl p-4 bg-green-50">
                  <FaLock />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Biometric Login</h3>
                  <p className="text-gray-600">Quick and secure access with fingerprint or face recognition authentication.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0 w-64 md:w-72 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl shadow-md overflow-hidden">
                <div className="text-green-700 text-2xl md:text-3xl p-4 bg-green-50">
                  <FaUserFriends />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Easy Transfers</h3>
                  <p className="text-gray-600">Send money to friends and family with just a few taps on your screen.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">App Screenshots</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Take a look at the sleek and intuitive interface of the HBL Mobile Banking app.</p>
          </div>
          
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x scrollbar-hide">
            <motion.div 
              className="flex-shrink-0 w-64 md:w-72 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl shadow-md overflow-hidden">
                <img src={s1} alt="Login Screen" className="w-full h-auto object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Login Screen</h3>
                  <p className="text-gray-600">Secure and easy login with biometric authentication</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0 w-64 md:w-72 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl shadow-md overflow-hidden">
                <img src={s2} alt="Dashboard" className="w-full h-auto object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
                  <p className="text-gray-600">Overview of your accounts and transactions</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0 w-64 md:w-72 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl shadow-md overflow-hidden">
                <img src={s3} alt="Transfer Money" className="w-full h-auto object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Transfer Money</h3>
                  <p className="text-gray-600">Quick and secure money transfers</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0 w-64 md:w-72 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl shadow-md overflow-hidden">
                <img src={s4} alt="Transactions" className="w-full h-auto object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Transactions</h3>
                  <p className="text-gray-600">View and manage your transaction history</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0 w-64 md:w-72 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-xl shadow-md overflow-hidden">
                <img src={s5} alt="Settings" className="w-full h-auto object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Settings</h3>
                  <p className="text-gray-600">Customize your app preferences</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Get HBL Mobile App Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Download our app and experience the future of banking right in your hands. It's free, secure, and constantly updated with new features.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <img src="/images/screenshot1.svg" alt="QR Code" className="w-40 h-40 mx-auto" />
                <p className="text-sm text-gray-500 mt-2">Scan to download</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">Direct Download</h3>
                <ul className="text-left mb-6 text-gray-600 text-sm md:text-base">
                  <li className="flex items-center mb-2">
                    <FaChevronDown className="text-green-700 mr-2" /> Latest version
                  </li>
                  <li className="flex items-center mb-2">
                    <FaChevronDown className="text-green-700 mr-2" /> Android 5.0+
                  </li>
                  <li className="flex items-center">
                    <FaChevronDown className="text-green-700 mr-2" /> Size: 15MB
                  </li>
                </ul>
                
                <motion.button 
                  className="bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg flex items-center justify-center"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={downloadStarted}
                >
                  <FaDownload className="mr-2" /> 
                  {downloadStarted ? 'Downloading...' : 'Download APK'}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/hbl-logo.png" alt="HBL Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-semibold ml-2 text-green-400">HBL Mobile</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                HBL Mobile Banking app provides secure and convenient banking services on your smartphone. 
                Access your accounts, transfer funds, pay bills, and manage your finances anytime, anywhere.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">Features</a>
                </li>
                <li>
                  <a href="#screenshots" className="text-gray-400 hover:text-white transition-colors duration-200">Screenshots</a>
                </li>
                <li>
                  <a href="#download" className="text-gray-400 hover:text-white transition-colors duration-200">Download</a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => {e.preventDefault(); setIsContactOpen(true);}} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h3>
              <div className="space-y-3 text-sm md:text-base">
                <div className="flex items-start">
                  <FaEnvelope className="text-green-400 mt-1 mr-3" />
                  <span className="font-medium">support@hbl.com</span>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-green-400 mt-1 mr-3" />
                  <span className="font-medium">+92 21 111 111 425</span>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-green-400 mt-1 mr-3" />
                  <span className="font-medium">123 Banking Street, Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 text-sm md:text-base"> {new Date().getFullYear()} HBL Mobile. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-green-800">Contact HBL Support</h3>
              <button 
                onClick={() => setIsContactOpen(false)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              For any queries or assistance with the HBL Mobile Banking App, please reach out to our customer support team:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-3">
                <FaEnvelope className="text-green-700 mr-3" />
                <span className="font-medium">support@hbl.com</span>
              </div>
              <div className="flex items-center mb-3">
                <FaPhone className="text-green-700 mr-3" />
                <span className="font-medium">+92 21 111 111 425</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-green-700 mr-3" />
                <span className="font-medium">24/7 Customer Support</span>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <motion.button 
                className="bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 px-6 rounded-lg shadow transition-colors duration-200 flex items-center"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2" /> Download App
              </motion.button>
              <motion.button 
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2.5 px-6 rounded-lg shadow transition-colors duration-200"
                onClick={() => setIsContactOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;
