import React from 'react';
import HeroPic from '../assets/hero-pic.jpg';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img 
        src={HeroPic} 
        alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className="text-6xl font-bold">
        I am{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500'>
          Auma Otambo
        </span>
        , Software Engineer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        A spearheaded Engineer who specializes in building websites, web applications, and software implementations.
      </p>
      <div className='mt-8 space-x-4'>
        <a 
          href="https://www.linkedin.com/in/auma-otambo-6342952a7/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-pink-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Connect with me
        </a>
        <a 
          href="https://drive.google.com/file/d/1IVCw_At934d8SiMlOx6GDZSo9Z1AqxCR/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-blue-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
