import ProjectCard from "./ProjectCard";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";

const projectData = [
  {
    title: "Online LMS",
    image: Project1,
    description: "A modern LMS that is built using React, HTML,CSS and JavaScript",
    link: "https://prospermindslive.com/",
  },
  {
    title: "Parental Block Chrome Extension",
    image: Project2,
    description: "A chrome extension that limits social media tiem use for children",
    link: "chrome://extensions/?id=ogoemopmcbmmfmfcackahaohnjhlknmh",
  },
];

const Projects = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
