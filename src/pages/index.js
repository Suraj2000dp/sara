import React, { useState, useEffect } from 'react';
import './styles.css'
import { Camera, Instagram, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

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

  // Sample photo data
  const photos = Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    src: `/api/placeholder/${800 + (index % 3) * 100}/${600 + (index % 2) * 100}`,
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1000);
  };

  // Auto-scrolling effect for photos
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 1) % (photos.length * 300));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <header className="fixed w-full z-50 bg-black/80 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="w-8 h-8" />
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
            src="/api/placeholder/1920/1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative text-white text-center px-4 max-w-4xl">
          <Camera className="mx-auto mb-8 w-16 h-16" />
          <h1 className="text-5xl font-bold mb-4">SARA CREATIONS & EVENTS</h1>
          <p className="text-xl mb-8">
          Matches are made in heaven. Those heavenly moments live in us. Never let those beautiful moments slip away; 
          simple moments are memories that not only stay with us but for generations. At Sara Creations and Event Management, we take the responsibility to preserve these memories for ages and showcase them to others.
          </p>
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full 
            hover:bg-gray-200 transition-colors inline-block">
            Book a Session
          </a>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-8">
          we offer services all over India, operating from Karnataka. We provide the best experience through our lenses,
           always focusing on quality to keep our customers satisfied and happy. Just a call away, no matter where you are, we reach all the way to your doorstep. We incorporate advanced technology to make your events special.
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
                      duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 
                    flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-2 rounded-full 
                      hover:bg-gray-200 transition-colors">
                      View Photo
                    </button>
                  </div>
                </div>
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
                    Sara Creations Mohan Bunglow<br />
                    out house behind FGC college<br />
                    oorgaum, Kolar Gold Fields PIN: 563120 
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
                Sara Creations Mohan Bunglow<br />
                    out house behind FGC college<br />
                    oorgaum, Kolar Gold Fields PIN: 563120 
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
                <p>9008837262 , 9740573489</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <p>rajkumar.sarala530@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5" />
                <p>@SaraCreations</p>
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