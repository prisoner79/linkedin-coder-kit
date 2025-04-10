
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CalendarDays, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="section-title">Licenses & Certifications</h2>
        
        <div className="space-y-6">
          <Card className="border-l-4 border-l-tech-blue overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 bg-tech-blue/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-md p-2 mb-4 flex items-center justify-center">
                      <div className="text-tech-blue font-bold">PW</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Physics Wallah</h3>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-1 mb-1">
                      <CalendarDays size={14} />
                      <span>Issued Nov 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span>Credential ID 5b1f102e5-10b8-4e5a-9ef4-e36ea3183368</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 p-6">
                  <h4 className="text-xl font-semibold mb-2">FULL STACK WEB DEVELOPMENT - 1.0</h4>
                  <p className="text-gray-700 mb-4">
                    Completed comprehensive Full Stack Web Development certification, covering frontend and backend technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">Tailwind CSS</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">MongoDB</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">React</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">Node.js</Badge>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink size={14} />
                      Show Credential
                    </Button>
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
                      <img 
                        src="/lovable-uploads/5a3c39e0-f02b-47e8-ad1c-7b5dc6148848.png" 
                        alt="Google" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Google Digital Garage</h3>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-1 mb-1">
                      <CalendarDays size={14} />
                      <span>Issued Jun 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span>Credential ID S8W L4H T4Q</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 p-6">
                  <h4 className="text-xl font-semibold mb-2">Fundamentals of Digital Marketing</h4>
                  <p className="text-gray-700 mb-4">
                    Completed Google's certification in Digital Marketing fundamentals, covering SEO, SEM, social media marketing, and business planning strategies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">Social Media Marketing</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">Business Planning</Badge>
                    <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20">SEO</Badge>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink size={14} />
                      Show Credential
                    </Button>
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

export default Certifications;
