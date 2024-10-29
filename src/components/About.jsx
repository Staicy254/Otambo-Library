import React from 'react'
import AboutPic from '../assets/about-pic.jpg';
const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'> 
        <h2 className="text-5xl font-bold text-center mb-12">About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutPic} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                <div className='flex-1'>
                    <p className='text-lg mb-8'>I am a dedicated software engineer with a strong background 
                in front-end and full-stack development. My professional 
                experience spans building enterprise-level applications, leveraging Angular, 
                TypeScript, and modern UI patterns, with a focus on performance, responsiveness, 
                and scalability. As a Front-end Software Engineer and Acting CEO at ProsperMinds,
                I apply my technical skills to lead architecture development and deliver user-focused,
                secure solutions. I am passionate about creating impactful web applications and continuously 
                enhancing my expertise in modern technologies.</p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>HTML5 & CSS3</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-pink-400 to-blue-400 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-12/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>JavaScript, React & TypeScript</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-pink-400 to-blue-400 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>MEAN Stack (Mongo DB, Express js, Angular js, Node js) </label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-pink-400 to-blue-400 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>PHP & Python</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-pink-400 to-blue-400 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>Git & GitHub</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-pink-400 to-blue-400 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-12/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>WordPress</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-pink-400 to-blue-400 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>APIs</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-pink-400 to-blue-400 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                        </div>
                    </div>
                </div>

                <div className='mt-12 flex justify-between text-center'>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-pink-400 to-purple-400'>
                            1+</h3>
                        <p>Years of Experience</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-pink-400 to-purple-400'>
                            4</h3>
                        <p>Projects Ongoing</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-pink-400 to-purple-400'>
                            10+</h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About