import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import About from './components/About';
import Menu from './components/Menu';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Strengths />
      <About />
      <Menu />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 