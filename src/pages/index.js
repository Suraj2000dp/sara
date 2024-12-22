import React, { useState, useEffect } from 'react';
import './styles.css'
import { Camera, Instagram, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import background from '../assets/background.jpeg'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
import img8 from '../assets/img8.jpeg'
import img9 from '../assets/img9.jpeg'
import img10 from '../assets/img10.jpeg'
import img11 from '../assets/img11.jpeg'
import img12 from '../assets/img12.jpeg'
import logo from '../assets/logo.jpeg'


// import background from '../assets/background.jpeg'
// import background from '../assets/background.jpeg'
// import background from '../assets/background.jpeg'
// import background from '../assets/background.jpeg'
// import background from '../assets/background.jpeg'


const PhotographyWebsite = () => {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const photoArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
  // Sample photo data
  const photos = Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    src: photoArr[index],
    alt: `Sample photo ${index + 1}`
  }));

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitForm = async (succcallback) => {
    const message = `${formData.name} || ${formData?.email} || ${formData?.phone} || ${formData?.message}`
    const TELEGRAM_BOT_TOKEN = '7902360180:AAGqVwOH0Zw6jvCkBCpAzC2tRhcy6npkNXA';
    const CHAT_ID = '1064998528'; // Replace with your chat ID

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      succcallback()
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    handleSubmitForm(() => {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1000);
    })

  };

  const services = [
    {
      title: "Event Management",
      description: "Seamlessly organizing and capturing all your special events with a professional touch.",
      price: ""
    },
    {
      title: "Wedding and Pre-wedding Shoots",
      description: "Creating timeless memories for your big day and magical pre-wedding moments.",
      price: "Starts from ₹30,000"
    },
    {
      title: "Baby Photoshoots",
      description: "Adorable captures that celebrate your baby's precious milestones.",
      price: "Starts from ₹10,000"
    },
    {
      title: "Maternity Photoshoots",
      description: "Beautifully portraying the joy and grace of motherhood.",
      price: "Starts from ₹12,000"
    },
    {
      title: "Candid Photography",
      description: "Capturing authentic emotions and unposed moments of life.",
      price: "Starts from ₹8,000"
    },
    {
      title: "Travel and Living Shoots",
      description: "Showcasing your journeys and lifestyle through stunning visuals.",
      price: "Custom pricing available"
    },
    {
      title: "Commercial Photography",
      description: "Delivering high-quality visuals to elevate your brand and business.",
      price: "Starts from ₹20,000"
    },
    {
      title: "Portraits and Model Photoshoots",
      description: "Highlighting personalities with artistic and professional portraits.",
      price: "Starts from ₹15,000"
    },
    {
      title: "Wedding Photography and Videography",
      description: "Crafting a cinematic story of your wedding day.",
      price: "Starts from ₹50,000"
    },
    {
      title: "Advertising and Commercial Photography",
      description: "Creating impactful imagery to enhance your marketing campaigns.",
      price: "Custom pricing available"
    }
  ];

  // Auto-scrolling effect for photos
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 1) % (photos.length * 90));
    }, 20);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <header className="fixed w-full z-50 bg-black/80 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-5">
              <img src={logo} style={{ height: "35px", width: "85px" }} />
              <span className="font-bold text-xl">Capture Moments</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link hover:text-gray-300">Home</a>
              <a href="#about" className="nav-link hover:text-gray-300">About</a>
              <a href="#gallery" className="nav-link hover:text-gray-300">Gallery</a>
              <a href="#contact" className="nav-link hover:text-gray-300">Contact</a>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4">
              <a href="#home" className="block py-2">Home</a>
              <a href="#about" className="block py-2">About</a>
              <a href="#gallery" className="block py-2">Gallery</a>
              <a href="#contact" className="block py-2">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={background}
            alt="Hero background"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative text-white text-center px-4 max-w-4xl">
          <Camera className="mx-auto mb-8 w-16 h-16" />
          <h1 className="text-5xl font-bold mb-4">SARA CREATIONS & EVENTS</h1>
          <p className="text-xl mb-8">
            Matches are made in heaven, and we make sure to capture those heavenly moments for you to cherish forever.
            Sara Creations, we believe in freezing time and turning your memories into treasures that last for generations.
          </p>
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full 
            hover:bg-gray-200 transition-colors inline-block">
            Book a Session
          </a>
        </div>
      </div>
      <div id="about" className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Based in Karnataka, we offer photography and videography services across India, ensuring that every moment is captured with love, precision, and the latest technology. We strive to provide the best experience, always focusing on quality and customer satisfaction. No matter where you are, we are just a call away to bring our services directly to your doorstep.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="gallery-item relative h-full group overflow-hidden rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-linear"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              width: `${photos.length * 300}px`
            }}
          >
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="w-72 h-72 flex-shrink-0 p-2"
              >
                <div className="relative h-full group overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform 
                      duration-300 group-hover:scale-120"
                  />

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <div className="w-12 h-1 bg-black mx-auto"></div>
                </div>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>


              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div id="contact" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-3 rounded-lg
                      hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {submitSuccess && (
                    <p className="text-green-600 text-center">
                      Message sent successfully!
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Visit Our Studio</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1" />
                    <p>
                      Sara Creations, #5 ARL Building,<br />
                      BEML Nagar P.O M V Nagar,<br />
                      Kolar Gold Fields PIN: 563120.
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <p>9008837262 , 9740573489</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <p>rajkumar.sarala530@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p>Monday - 10:00 am to 8:00 pm</p>
                  <p>Saturday: 10:00 am to 8:00 pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Studio</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />

                <p>
                  Sara Creations, #5 ARL Building,<br />
                  BEML Nagar P.O M V Nagar,<br />
                  Kolar Gold Fields PIN: 563120.
                </p>
              </div>
              <p className="text-gray-400">
                Located in the heart of the Creative District, our studio
                provides the perfect setting for portrait sessions and
                client meetings.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <p>
                  <a href='tel:9008837262'>9008837262 </a>
                  <a href='tel:9740573489'>9740573489 </a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href='mailto:rajkumar.sarala530@gmail.com'>rajkumar.sarala530@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5" />
                <a href='https://www.instagram.com/saracreationsevents?igsh=dXR1NHMyNmw4dTJl'>@SaraCreations </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Capture Life's Moments. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default PhotographyWebsite;
