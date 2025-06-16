import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StrengthsSquare from './components/StrengthsSquare';
import About from './components/About';
import Menu from './components/Menu';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppSquare() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StrengthsSquare />
      <About />
      <Menu />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default AppSquare; 