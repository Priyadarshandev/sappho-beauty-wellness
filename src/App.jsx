import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Scissors, 
  Sparkles, 
  Wind, 
  Quote, 
  Calendar,
  Menu,
  X,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Assets --- (Using generated images)
const IMAGES = {
  hero: '/hero_salon_interior_1774000209865.png',
  hair_spa: '/korean_hair_spa_treatment_1774000226841.png',
  facial: '/hydrafacial_skin_treatment_1774000244880.png',
  interior_1: '/hero_salon_interior_1774000209865.png', // Reusing interior shot
};

// --- Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sappho-gold rounded-full flex items-center justify-center text-white shadow-lg">
            <Sparkles size={20} />
          </div>
          <span className={`text-2xl font-playfair font-bold tracking-tight ${isScrolled ? 'text-charcoal' : 'text-charcoal'}`}>SAPPHO</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-sappho-gold transition-colors tracking-wide uppercase">
              {link.name}
            </a>
          ))}
          <a href="#booking" className="btn-primary py-2 px-6 text-sm">Book Now</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{link.name}</a>
              ))}
              <a href="#booking" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Book Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-sappho-charcoal text-white pt-20 pb-10">
    <div className="section-container !py-0 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <h3 className="text-2xl font-playfair font-bold">SAPPHO</h3>
        <p className="text-white/60 text-sm leading-relaxed"> Patna's premier destination for Korean Hair Spa and luxury beauty wellness. We provide top-tier care in a relaxing, women-led environment. </p>
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-sappho-gold transition-all"><Instagram size={20} /></a>
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-sappho-gold transition-all"><Phone size={20} /></a>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-6 text-sappho-gold uppercase tracking-wider text-xs">Quick Links</h4>
        <ul className="space-y-4 text-sm text-white/60">
          <li><a href="#home" className="hover:text-white transition-all">Home</a></li>
          <li><a href="#services" className="hover:text-white transition-all">Services</a></li>
          <li><a href="#about" className="hover:text-white transition-all">About Us</a></li>
          <li><a href="#gallery" className="hover:text-white transition-all">Gallery</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 text-sappho-gold uppercase tracking-wider text-xs">Opening Hours</h4>
        <ul className="space-y-4 text-sm text-white/60">
          <li className="flex justify-between"><span>Mon - Sun</span> <span>10:00 AM - 8:00 PM</span></li>
          <li className="text-sappho-gold/80 italic">We are open 7 days a week</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 text-sappho-gold uppercase tracking-wider text-xs">Location</h4>
        <p className="text-sm text-white/60 flex items-start gap-2">
          <MapPin size={16} className="text-sappho-gold shrink-0 mt-1" />
          Boring Road, Patna, Bihar, India
        </p>
      </div>
    </div>
    <div className="border-t border-white/5 text-center pt-10 text-xs text-white/40">
      &copy; {new Date().getFullYear()} Sappho Beauty & Wellness. All rights reserved. Premium demo by Antigravity AI.
    </div>
  </footer>
);

// --- Sections ---

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Parallax effect if we add it, for now simple blur overlay */}
    <div className="absolute inset-0 z-0">
      <img src={IMAGES.hero} alt="Salon Interior" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white"></div>
    </div>
    
    <div className="relative z-10 text-center max-w-4xl px-6">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block px-4 py-1.5 bg-sappho-gold/10 text-sappho-gold rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-sappho-gold/20"
      >
        Since 2023 • Patna's Premium Choice
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-sappho-charcoal mb-8 leading-[1.1]"
      >
        Experience <span className="text-gradient">Premium</span> Beauty in Patna
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-sappho-charcoal/70 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Relax, refresh, and glow with expert care. Discover our signature Korean Hair Spa and advanced HydraFacial treatments.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="#booking" className="btn-primary flex items-center justify-center gap-2 group">
          Book Appointment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#services" className="btn-secondary">Explore Services</a>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sappho-gold"
    >
      <div className="w-6 h-10 border-2 border-sappho-gold/30 rounded-full flex justify-center p-1">
        <div className="w-1.5 h-1.5 bg-sappho-gold rounded-full" />
      </div>
    </motion.div>
  </section>
);

const Services = () => {
  const categories = [
    {
      title: 'Hair Rituals',
      icon: <Scissors size={24} className="text-sappho-gold" />,
      image: IMAGES.hair_spa,
      services: [
        { name: 'Korean Hair Spa', price: '₹1499', desc: 'Deep hydration & scalp rejuvenation surgery' },
        { name: 'Designer Haircut', price: '₹599', desc: 'Expert styling to suit your personality' },
        { name: 'Luxury Coloring', price: '₹1999', desc: 'International shades with protective care' },
      ]
    },
    {
      title: 'Skin Care',
      icon: <Sparkles size={24} className="text-sappho-gold" />,
      image: IMAGES.facial,
      services: [
        { name: 'Signature HydraFacial', price: '₹2999', desc: 'Instant glow with vacuum extraction' },
        { name: 'Luxury Facial', price: '₹1299', desc: 'Traditional techniques meet modern results' },
        { name: 'Skin Brightening', price: '₹999', desc: 'Revitalize and even your skin tone' },
      ]
    },
    {
      title: 'Spa & Relaxation',
      icon: <Wind size={24} className="text-sappho-gold" />,
      image: IMAGES.interior_1, // Placeholder image for Spa
      services: [
        { name: 'Body Polishing', price: '₹2499', desc: 'Full body exfoliation & hydration' },
        { name: 'Massage Therapy', price: '₹1499', desc: 'Relieve stress with deep tissue care' },
        { name: 'Bridal Packages', price: 'Custom', desc: 'Turn heads with our premium bridal care' },
      ]
    }
  ];

  return (
    <section id="services" className="bg-sappho-pink relative overflow-hidden">
      <div className="bg-pattern absolute inset-0 opacity-40"></div>
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <span className="text-sappho-gold font-bold tracking-[0.2em] text-xs uppercase block mb-4">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sappho-charcoal mb-6">World-Class Services</h2>
          <div className="w-20 h-1 bg-sappho-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-sappho-rose/30"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                  {cat.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold mb-6">{cat.title}</h3>
                <div className="space-y-6">
                  {cat.services.map((svc, sidx) => (
                    <div key={sidx} className="flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sappho-charcoal">{svc.name}</span>
                        <span className="text-sappho-gold font-bold">{svc.price}</span>
                      </div>
                      <p className="text-xs text-sappho-charcoal/50">{svc.desc}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-3 border border-sappho-gold/30 rounded-xl text-sappho-gold font-bold text-sm group-hover:bg-sappho-gold group-hover:text-white transition-all">
                  Book This Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10 shadow-2xl">
            <img src={IMAGES.hero} alt="Sappho Salon" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-sappho-pink rounded-full -z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-sappho-beige rounded-3xl -z-0 rotate-12"></div>
          
          <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 border border-sappho-gold/20 max-w-[200px]">
            <div className="text-3xl font-bold text-sappho-gold mb-1">4.9 ★</div>
            <div className="text-xs text-sappho-charcoal/60 leading-tight">100+ Positive Reviews on Google</div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div>
            <span className="text-sappho-gold font-bold tracking-[0.2em] text-xs uppercase block mb-4">The Sappho Story</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sappho-charcoal mb-6 leading-tight">Elevating Beauty with a Personal Touch</h2>
            <p className="text-lg text-sappho-charcoal/70 leading-relaxed">
              Founded with the vision to bring world-class beauty services to Patna, Sappho is more than just a salon. We are a women-led sanctuary of wellness where luxury meets comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-sappho-pink rounded-xl flex items-center justify-center text-sappho-gold">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Premium Products</h4>
                <p className="text-sm text-sappho-charcoal/60">Using global brands for hair and skin.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-sappho-pink rounded-xl flex items-center justify-center text-sappho-gold">
                <Wind size={20} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Hygienic Lounge</h4>
                <p className="text-sm text-sappho-charcoal/60">Fully sanitized and relaxing space.</p>
              </div>
            </div>
          </div>

          <p className="p-6 bg-sappho-beige/50 rounded-2xl border-l-4 border-sappho-gold italic text-sappho-charcoal/80">
            "Our mission is to help every woman find her unique glow. We believe beauty is about feeling empowered and relaxed."
          </p>

          <button className="btn-primary">Learn More About Us</button>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [IMAGES.hero, IMAGES.hair_spa, IMAGES.facial, IMAGES.interior_1, IMAGES.hero, IMAGES.hair_spa];
  return (
    <section id="gallery" className="bg-sappho-charcoal py-24">
      <div className="section-container !py-0">
        <div className="text-center mb-16">
          <span className="text-sappho-gold font-bold tracking-[0.2em] text-xs uppercase block mb-4">Our Gallery</span>
          <h2 className="text-4xl font-playfair font-bold text-white">Moments of Transformation</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`group relative rounded-2xl overflow-hidden cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-sappho-gold/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", text: "The Korean Hair Spa is amazing! My hair has never felt softer. Definitely the best salon in Patna.", role: "Regular Customer" },
    { name: "Anjali Verma", text: "Highly recommend their HydraFacial. Professional staff and very hygienic environment. Five stars!", role: "Monthly Client" },
    { name: "Sonal Gupta", text: "A truly relaxing experience. The mood and decor are just perfect for some self-care time.", role: "Weekend Visitor" }
  ];

  return (
    <section className="bg-white py-24 relative">
       <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
             <span className="text-sappho-gold font-bold tracking-[0.2em] text-xs uppercase block mb-4">Client Feedback</span>
             <h2 className="text-4xl font-playfair font-bold text-sappho-charcoal">What our wonderful clients say about us</h2>
          </div>
          <div className="flex gap-4">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-sappho-pink flex items-center justify-center text-[10px] font-bold">U{i}</div>
                ))}
             </div>
             <div>
                <p className="font-bold">4.9/5.0</p>
                <p className="text-xs text-sappho-charcoal/50">Based on 100+ reviews</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -5 }}
               className="p-10 rounded-3xl bg-sappho-pink/30 border border-sappho-rose/20 relative"
            >
              <Quote className="absolute top-8 right-8 text-sappho-gold/20" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#C5A059" className="text-sappho-gold" />)}
              </div>
              <p className="text-lg text-sappho-charcoal/80 mb-8 leading-relaxed italic">"{rev.text}"</p>
              <div>
                <h5 className="font-bold text-sappho-charcoal">{rev.name}</h5>
                <p className="text-xs text-sappho-gold uppercase font-bold tracking-widest">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="booking" className="section-container !py-32">
      <div className="bg-sappho-charcoal rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-sappho-charcoal to-[#1a1a1a]">
          <span className="text-sappho-gold font-bold tracking-[0.2em] text-xs uppercase block mb-6">Reservation</span>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">Secure Your Sparkle</h2>
          <p className="text-white/60 mb-10 text-lg">Book your premium beauty ritual today. Our consultants will get back to you immediately to confirm your slot.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sappho-gold transition-colors duration-500">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Call Us Directly</p>
                <p className="text-xl font-bold text-white">+91 91555 XXXXX</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white p-12 lg:p-20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-sappho-charcoal/40 uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-sappho-pink/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-sappho-gold outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-sappho-charcoal/40 uppercase tracking-widest">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-sappho-pink/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-sappho-gold outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-sappho-charcoal/40 uppercase tracking-widest">Preferred Service</label>
              <select className="w-full bg-sappho-pink/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-sappho-gold outline-none transition-all appearance-none">
                <option>Korean Hair Spa</option>
                <option>HydraFacial</option>
                <option>Luxury Styling</option>
                <option>Bridal Consultation</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-sappho-charcoal/40 uppercase tracking-widest">Date</label>
                <input type="date" className="w-full bg-sappho-pink/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-sappho-gold outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-sappho-charcoal/40 uppercase tracking-widest">Time Slot</label>
                <input type="time" className="w-full bg-sappho-pink/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-sappho-gold outline-none transition-all" />
              </div>
            </div>
            <button type="submit" className="w-full btn-primary !py-5 shadow-xl shadow-sappho-gold/20">Send Booking Request</button>
            <button className="w-full flex items-center justify-center gap-3 py-4 rounded-full border border-[#25D366] text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition-all">
               <MessageCircle size={20} /> Book via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-sappho-beige/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-sappho-gold font-bold tracking-[0.2em] text-xs uppercase block mb-4">Visit Us</span>
            <h2 className="text-4xl font-playfair font-bold text-sappho-charcoal mb-8">Located in the heart of Boring Road, Patna</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-sappho-gold">
                  <MapPin size={24} />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Our Address</h4>
                   <p className="text-sappho-charcoal/60 leading-relaxed">
                     Opp. G.D. Goenka School, Boring Road, <br />
                     Patna, Bihar 800001
                   </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-sappho-gold">
                  <Clock size={24} />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Business Hours</h4>
                   <p className="text-sappho-charcoal/60">Open Daily: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3597.5843452668383!2d85.1185831!3d25.6135716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5900de4121fb%3A0xaa976252a7820e72!2sSappho%20Beauty%20%26%20Wellness!5e0!3m2!1sen!2sin!4v1710928000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---
function App() {
  return (
    <div className="relative font-outfit">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/9191555XXXXX" 
        target="_blank" 
        className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 animate-bounce"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
