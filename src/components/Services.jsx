import React from "react";

const services = [
  {
    id: 1,
    title: "WordPress Site Development",
    description:
      "Building a responsive, SEO-optimized WordPress site with custom themes and a user-friendly CMS.",
  },
  {
    id: 2,
    title: "FrontEnd Development",
    description:
      "Building a responsive, SEO-optimized site with custom themes to enhance user experience.",
  },
  {
    id: 3,
    title: "Laravel Systems and PHP",
    description:
      "Create a responsive, SEO-friendly WordPress site with custom themes and a user-friendly CMS for easy updates",
  },
  {
    id: 4,
    title: "Web Development & Web Application Development",
    description:
      "Create responsive, SEO-optimized websites with custom themes and user-friendly content management systems for easy updates.",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-pink-400 to-blue-400">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
