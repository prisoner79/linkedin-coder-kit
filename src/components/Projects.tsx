
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-0 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/18d2f8d6-2d95-4b2a-8b49-4de0f3b634f9.png" 
                alt="Password Generator" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Password Generator</h3>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <CalendarDays size={14} />
                  <span>Jul 2023</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">
                Associated with Madan Mohan Malaviya University of Technology
              </p>
              
              <p className="text-gray-700 mb-4">
                Password Generator - Responsive HTML/CSS/JavaScript Project that generates secure random passwords based on user preferences.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">CSS</Badge>
                <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">HTML</Badge>
                <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">JavaScript</Badge>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github size={14} />
                  Source Code
                </Button>
                <Button size="sm" className="flex items-center gap-2 bg-tech-blue hover:bg-tech-light-blue">
                  <ExternalLink size={14} />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden grid grid-cols-2">
              <img 
                src="/placeholder.svg" 
                alt="QR Code Generator Left" 
                className="w-full h-full object-cover border-r"
              />
              <img 
                src="/placeholder.svg" 
                alt="QR Code Generator Right" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">QR Code Generator</h3>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <CalendarDays size={14} />
                  <span>Jun 2023</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">
                Associated with Madan Mohan Malaviya University of Technology
              </p>
              
              <p className="text-gray-700 mb-4">
                QR Code Generator: HTML/CSS/JavaScript application with responsive design that generates QR codes from user input.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">CSS</Badge>
                <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">HTML</Badge>
                <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">JavaScript</Badge>
                <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">API</Badge>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github size={14} />
                  Source Code
                </Button>
                <Button size="sm" className="flex items-center gap-2 bg-tech-blue hover:bg-tech-light-blue">
                  <ExternalLink size={14} />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
