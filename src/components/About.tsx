
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  FileBadge, 
  Laptop, 
  Layers, 
  MonitorSmartphone,
  Sparkles, 
  Target, 
  Users
} from "lucide-react";

const About: React.FC = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React JS", 
    "Tailwind CSS", "MongoDB", "C/C++", "Robotics",
    "Electronics", "IoT", "UI Design", "Digital Marketing"
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-0 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-700 mb-6">
              My biggest strength is ADAPTABILITY as the situation is always changing. 
              I am ready to ADAPT to new changes. I'm a goal-oriented person with a "never-give-up" attitude.
            </p>
            
            <p className="text-gray-700 mb-6">
              I'm a self-motivated personality who is sociable with all. 
              Currently working as a "Web Developer" and polishing my skills to become a "Full Stack Web Developer".
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-tech-blue">Personal Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:critik127@gmail.com" className="text-tech-blue hover:underline">
                    critik127@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">University Email:</span>
                  <span>2021042018@mmmut.ac.in</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">GitHub:</span>
                  <a 
                    href="https://github.com/prisoner79" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tech-blue hover:underline"
                  >
                    github.com/prisoner79
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Location:</span>
                  <span>Gorakhpur, Uttar Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-tech-blue">My Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-tech-blue">
                <CardContent className="p-4 flex items-start gap-3">
                  <Target className="text-tech-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Goal Oriented</h4>
                    <p className="text-sm text-gray-600">Focused on achieving results</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-tech-blue">
                <CardContent className="p-4 flex items-start gap-3">
                  <Sparkles className="text-tech-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Adaptable</h4>
                    <p className="text-sm text-gray-600">Ready for new challenges</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-tech-blue">
                <CardContent className="p-4 flex items-start gap-3">
                  <Users className="text-tech-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Sociable</h4>
                    <p className="text-sm text-gray-600">Effective team player</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-tech-blue">
                <CardContent className="p-4 flex items-start gap-3">
                  <Laptop className="text-tech-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Self-motivated</h4>
                    <p className="text-sm text-gray-600">Driven to learn and improve</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <h3 className="text-xl font-semibold my-6 text-tech-blue">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
