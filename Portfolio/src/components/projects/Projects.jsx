import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image from '../../assets/image.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.png'

export default function Projects() {
    const listProjects = [
        {id:1, image:image, title:'ProsperMinds Limited - Online LMS', description:'An online Learning Management System.', link:'https://prospermindslive.com/'},
        {id:2, image:image2, title: 'Beauty by Revere - Bath and Body care products', description: 'A shopping platform for bath essentials.', link:'https://www.beautybyrevere.com/'},
        {id:3, image:image3, title:'Zendawa Africa - E-commerce Store', description:'An e-commerce store for African products.', link:'https://staicy254.github.io/Zendawa_Africa/'},
        {id:4, image:image4, title:'Clario - Eye wear Shop', description:'A shop selling various eyewear.', link:'https://diligent-architecture-358933.framer.app/'},
        {id:5, image:image5, title:'Cucus Eatery - Restaurant Menu', description:'A restaurant menu.', link:'https://staicy254.github.io/Cucu-s_Eatery/'},
        {id:6, image:image6, title:'Sunrays Cosmetics', description: 'A cosmetics shop', link: 'https://sunrays.ke/?v=a2e1f137298d'},
        {id:7, image:image7, title: 'Jipange Budget App', description: 'A budgeting site', link: 'https://staicy254.github.io/Jipange-Budget-App/'},
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    };
  
    return (
        <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <Slider {...settings}>
                    {
                        listProjects.map((project)=>{
                            return(
                                <div key={project.id} className='p-4'>
                                    <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                        <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' />
                                        <div className='p-6'>
                                            <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                            <p className='leading-relaxed mb-3'>{project.description}</p>
                                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-orange-400 hover:underline'>View Project</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}
