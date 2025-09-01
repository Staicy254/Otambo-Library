import React from 'react'
import javascript from '../../assets/javascript.png'
import html from '../../assets/html.png'
import react from '../../assets/react.png'
import css from '../../assets/css3.png'
import api from '../../assets/api.png'
import figma from '../../assets/figma.png'
import github from '../../assets/github.png'
import node from '../../assets/node.png'
import postgresql from '../../assets/postgresql.png'
import typescript from '../../assets/typescript.png'



export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400 h-[100px] md:h-[150px]'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Skills</h1>
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
                I excel in building responsive, user-focused
solutions using HTML5, CSS3, JavaScript, Firebase, TypeScript, React,PostgreSQL, Vue.js, Node.js, Next.js, and,
APIs. I am also experienced in AI Integration and working with CMS Platforms.
                </p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={javascript} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={html} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={css} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={api} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={figma} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={github} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={node} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={postgresql} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={typescript} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
            </nav>
            </div>
        </div>
    </section>
  )
}
