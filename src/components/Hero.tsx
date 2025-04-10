
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 pb-10 px-4 md:px-0 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-tech-blue/5 rounded-bl-full"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 md:order-1 animate-slide-right">
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="bg-tech-blue/10 text-tech-blue px-4 py-1 rounded-full text-sm font-medium">
              Web Developer
            </span>
            <span className="bg-tech-blue/10 text-tech-blue px-4 py-1 rounded-full text-sm font-medium">
              UI Designer
            </span>
            <span className="bg-tech-blue/10 text-tech-blue px-4 py-1 rounded-full text-sm font-medium">
              Robotics Trainer
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-tech-blue">Ritik Kumar Chaudhary</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A passionate Web Developer and UI Designer with expertise in React.js, HTML, CSS, and JavaScript. 
            Currently working as a Robotics & Innovation Trainer while pursuing B.Tech in Electronics Engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-tech-blue hover:bg-tech-light-blue flex items-center gap-2">
              Contact Me <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/5 flex items-center gap-2">
              Download CV <Download size={16} />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://github.com/prisoner79"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-tech-blue transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-tech-blue transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:critik127@gmail.com"
              className="text-gray-600 hover:text-tech-blue transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-slide-up">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/lovable-uploads/716d930d-2dad-44c0-8f2a-949703239e84.png" 
                alt="Ritik Kumar Chaudhary" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/21f0f27c-fac0-44af-8e20-13eb2cb0b9b9.png" 
                alt="Web Developer Icon" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-tech-blue"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
