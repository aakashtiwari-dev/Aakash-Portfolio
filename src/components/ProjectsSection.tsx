
import React, { useState } from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with shopping cart, user authentication, and payment processing.",
    image: "https://placehold.co/600x400/1A1F2C/9b87f5?text=E-Commerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoLink: "#",
    githubLink: "#",
    category: "all"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.",
    image: "https://placehold.co/600x400/1A1F2C/9b87f5?text=Task+Manager",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
    category: "all"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for monitoring social media performance across multiple platforms.",
    image: "https://placehold.co/600x400/1A1F2C/9b87f5?text=Social+Dashboard",
    tags: ["React", "Chart.js", "Express", "PostgreSQL"],
    demoLink: "#",
    githubLink: "#",
    category: "all"
  },
  {
    id: 4,
    title: "Corporate Website",
    description: "Modern landing page for a tech startup with animations and interactive elements.",
    image: "https://placehold.co/600x400/1A1F2C/9b87f5?text=Corporate+Site",
    tags: ["Next.js", "Tailwind CSS", "GSAP", "Contentful"],
    demoLink: "#",
    githubLink: "#",
    category: "landing"
  },
  {
    id: 5,
    title: "Portfolio Template",
    description: "Customizable portfolio template for creative professionals with theme options.",
    image: "https://placehold.co/600x400/1A1F2C/9b87f5?text=Portfolio",
    tags: ["React", "Styled Components", "Framer Motion"],
    demoLink: "#",
    githubLink: "#",
    category: "landing"
  },
  {
    id: 6,
    title: "Food Delivery Website",
    description: "Restaurant website with online ordering system and delivery tracking.",
    image: "https://placehold.co/600x400/1A1F2C/9b87f5?text=Food+Delivery",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "#",
    githubLink: "#",
    category: "website"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1A1F2C] to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-pixel-purple/20 px-4 py-2 rounded-lg mb-4">
            <h2 className="font-pixel text-pixel-purple text-sm">PORTFOLIO</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-pixel-purple">Projects</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work. Each project includes a live demo and links to the
            code repository.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "landing", "website", "webapp"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-md font-pixel text-xs ${
                activeFilter === filter
                  ? "bg-pixel-purple text-white"
                  : "bg-secondary hover:bg-pixel-darkPurple text-gray-300"
              } transition-all duration-300`}
            >
              {filter === "all" ? "All Projects" : 
               filter === "landing" ? "Landing Pages" : 
               filter === "website" ? "Websites" : "Web Apps"}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="pixel-card group">
              <div className="relative overflow-hidden mb-4 pixel-border">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-pixel-darkPurple/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoLink} 
                      className="bg-pixel-purple px-3 py-2 rounded-md font-pixel text-xs hover:bg-pixel-neonPurple"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="bg-secondary px-3 py-2 rounded-md font-pixel text-xs hover:bg-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 inline mr-1" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-secondary px-2 py-1 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between mt-6">
                <a 
                  href={project.githubLink}
                  className="font-pixel text-xs flex items-center text-pixel-purple hover:text-pixel-neonPurple"
                >
                  <Github className="h-4 w-4 mr-1" />
                  GitHub
                </a>
                <a 
                  href={project.demoLink}
                  className="font-pixel text-xs flex items-center text-pixel-purple hover:text-pixel-neonPurple"
                >
                  Live Demo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="pixel-button font-pixel text-sm py-3 px-6">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
