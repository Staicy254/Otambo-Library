import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Education from './components/education/education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-[#013220]'>
    <Hero /> 
    <Skills />
    <Experience />
    <Education />
    <Projects />
    <Contact />
    <Footer />
   </main>
  )
}

