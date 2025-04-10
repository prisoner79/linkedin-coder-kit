import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, SendHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-700 mb-6">
              I'm currently looking for new opportunities, especially Frontend Internships. 
              Feel free to reach out if you have any questions or just want to say hi!
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-tech-blue/10 p-3 rounded-full">
                  <Mail className="text-tech-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:critik127@gmail.com" className="text-tech-blue hover:underline">
                    critik127@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-tech-blue/10 p-3 rounded-full">
                  <MapPin className="text-tech-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-700">Gorakhpur, Uttar Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-tech-blue/10 p-3 rounded-full">
                  <Github className="text-tech-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/prisoner79" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tech-blue hover:underline"
                  >
                    github.com/prisoner79
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-tech-blue/10 p-3 rounded-full">
                  <Linkedin className="text-tech-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tech-blue hover:underline"
                  >
                    Ritik Kumar Chaudhary
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your Email" required />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your Message" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full bg-tech-blue hover:bg-tech-light-blue flex items-center gap-2 justify-center">
                  Send Message <SendHorizontal size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
