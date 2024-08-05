// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import landingPageData from './content/webdata';
import Button from './component/Button';
import Header from './component/Header';
import Hero from './component/Hero';
import Features from './component/Features';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';

function App() {
  const { header, hero, features, testimonials, callToAction } = landingPageData;
  
  return (
    <div>      
<Header header={ header } />
<Hero hero = { hero} />
<Features features={ features } header={ header } hero={ hero } />
<Testimonials testimonials={ testimonials } />
<callToAction callToAction={ callToAction } />
<Footer header={ header } />
    </div>
  )
}

export default App
