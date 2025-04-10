
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-6">
          <Card className="border-l-4 border-l-tech-blue overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 bg-tech-blue/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-md p-2 mb-4">
                      <img 
                        src="/lovable-uploads/eb0ebb13-8e7d-4253-90ea-210a6553efa9.png" 
                        alt="Learnshala" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Learnshala</h3>
                    <p className="text-sm text-gray-600 mb-4">Full-time</p>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-1 mb-1">
                      <CalendarDays size={14} />
                      <span>Apr 2025 - Present (1 month)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>Siddharthnagar, Uttar Pradesh</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 p-6">
                  <h4 className="text-xl font-semibold mb-2">Robotics & Innovation Trainer</h4>
                  <p className="text-gray-700 mb-4">
                    Working as a Robotics & Innovation Trainer, teaching students about robotics, electronics, coding, IoT, AI, and related technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">Robotics</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">LMS</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">TestLab</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-tech-blue overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 bg-tech-blue/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-md p-2 mb-4 flex items-center justify-center">
                      <div className="text-tech-blue font-bold">NE</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">NE Railway</h3>
                    <p className="text-sm text-gray-600 mb-4">Internship</p>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-1 mb-1">
                      <CalendarDays size={14} />
                      <span>Jun 2023 - Jul 2023 (2 months)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>Gorakhpur, Uttar Pradesh</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 p-6">
                  <h4 className="text-xl font-semibold mb-2">Intern</h4>
                  <p className="text-gray-700 mb-4">
                    Completed an internship at North Eastern Railway, focusing on digital switching and engineering applications in the railway industry.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">Digital Switching</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">Engineering</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
