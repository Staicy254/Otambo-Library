import React from 'react';

const projects = [
  {
    id: 1,
    title: "ProsperMinds Live",
    goal: "To implememnt a learning management system that will help children learn coding, entrepreneurship & AI",
    description: "An Online Learning Management system.",
    role: "Full Stack Developer",
    tech: "HTML5,CSS3,React,PHP",
    url: "https://www.prospermindslive.com",
  },
  {
    id: 2,
    title: "Zendawa Website",
    description: "A website for ordering medicine and products.",
    url: "https://staicy254.github.io/Zendawa_Africa/",
  },
  {
    id: 3,
    title: "Dayax Water Company",
    description: "An informational website for a Somali water company.",
    tech: "wordpress",
    url: "http://www.dayaxwater.so/",
  },
  {
    id: 4,
    title: "Crescent Shop",
    description: "an e-commerce website for shopping accessories, shoes and clothes",
    url: "yet to be uploaded - still building ",
  },
  {
    id: 5,
    title: "Foundation-shade-match",
    description: "A site that works to match foundation shades to your specific complexion",
    url: "https://github.com/Staicy254/Foundation-match"
  }
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                {project.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 inline-block"
              >
                Visit {project.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
