
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap } from "lucide-react";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-0 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-6">
          <Card className="border-l-4 border-l-tech-blue overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 bg-tech-blue/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-md p-2 mb-4">
                      <img 
                        src="/lovable-uploads/4c773247-20fc-40a1-8c67-3d3cd49c1a31.png" 
                        alt="MMMUT" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Madan Mohan Malaviya University of Technology</h3>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      <span>2021 - 2024</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Bachelor of Technology (B.Tech)
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Electrical, Electronics and Communications Engineering
                  </p>
                  <p className="text-gray-700 mb-4">
                    Currently pursuing B.Tech degree with focus on electronics engineering and web development technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">JavaScript</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">HTML</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">Electronics</Badge>
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
                      <div className="text-tech-blue font-bold">
                        <GraduationCap size={32} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Mahamaya Polytechnic of Information Technology</h3>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      <span>Diploma</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Diploma in Electronics Engineering
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Grade: Honours
                  </p>
                  <p className="text-gray-700 mb-4">
                    Completed diploma in Electronics Engineering with honours from Mahamaya Polytechnic of Information Technology, Gorakhpur.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
