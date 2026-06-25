import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Cta from './components/Cta';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <Cta />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

export default App;
