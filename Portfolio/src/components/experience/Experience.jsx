import React from 'react';
import img_experience from '../../assets/img_experience.png';

export default function Experience() {
  return (
    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
      <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
        <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
        <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
      </div>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
          <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
          <img src={img_experience} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt='Experience' />
        </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500'>Experience</h1>
          
          <h2 className='title-font font-bold text-white sm:text-2xl'>Software Engineer | IT Manager</h2>
          <p className='text-white'>ProsperMinds Limited • Nairobi, Kenya (03/2022 - 02/2025)</p>
          <ul className='mb-8 text-white list-disc pl-5'>
            <li>Engineered and launched an online LMS.</li>
            <li>Collaborated with clients to gather requirements and deliver custom web solutions.</li>
            <li>Implemented media queries and breakpoints for responsive design.</li>
            <li>Performed tests and stress testing to optimize performance.</li>
            <li>Regularly monitored website responsiveness and client outreach.</li>
          </ul>
          
          <h2 className='title-font font-bold text-white sm:text-2xl'>Full-Stack Developer Intern</h2>
          <p className='text-white'>Zendawa Africa • Nairobi, Kenya (04/2024 - 07/2024)</p>
          <ul className='mb-8 text-white list-disc pl-5'>
            <li>Developed and maintained the Zendawa web app and website.</li>
            <li>Used Google Analytics to track user interactions, improving bounce rate by 15%.</li>
          </ul>
          
          <h2 className='title-font font-bold text-white sm:text-2xl'>Web Developer Intern</h2>
          <p className='text-white'>Oasis Infobyte • New Delhi, India (02/2024 - 03/2024)</p>
          <ul className='mb-8 text-white list-disc pl-5'>
            <li>Created various projects using HTML, CSS, and JavaScript.</li>
            <li>Implemented SEO techniques, improving website visibility by 20%.</li>
          </ul>
          
          <h2 className='title-font font-bold text-white sm:text-2xl'>Freelance Web Developer</h2>
          <p className='text-white'>Upwork • Nairobi, Kenya (01/2023 - 01/2024)</p>
          <ul className='mb-8 text-white list-disc pl-5'>
            <li>Developed and deployed websites for various clients.</li>
          </ul>
          
          <h2 className='title-font font-bold text-white sm:text-2xl'>IT Technician</h2>
          <p className='text-white'>Pivot Networks • Nairobi, Kenya (06/2023 - 12/2023)</p>
          <ul className='mb-8 text-white list-disc pl-5'>
            <li>Managed hardware and software inventory for company servers, laptops, and mobile devices.</li>
            <li>Maintained an up-to-date security alert database for all company sites and servers.</li>
            <li>Provided tech support for various customers in the IT department.</li>
            <li>Managed and maintained the ticketing system.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
