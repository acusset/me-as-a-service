import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function About() {
  const techStack = ['Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Docker', 'Kubernetes'];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground">
          Senior Software Engineer passionate about building scalable solutions and sharing knowledge
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <div>
            <p className="text-lg mb-6">
              Hello! I&apos;m Antoine CUSSET, a Senior Software Engineer at Palo IT in Singapore. With over 8 years of experience
              in software development, I specialize in building robust, scalable applications using modern technologies
              and best practices.
            </p>

            <p className="text-lg mb-6">
              This website serves as my personal platform to showcase my work, share my knowledge, and connect with
              the tech community. It&apos;s built using modern web technologies that Im passionate about, including Next.js,
              React, and TypeScript.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
            <p className="text-lg">
              At Palo IT, I lead development teams, conduct knowledge-sharing sessions, and work on cutting-edge
              projects in wealth management and carbon credit marketplaces. I&apos;m particularly interested in Domain-Driven
              Design, microservices architecture, and building efficient developer experiences.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
            <div className="space-y-2">
              <a href="mailto:a.cusset@gmail.com" className="block text-primary hover:underline">
                a.cusset@gmail.com
              </a>
              <a href="https://github.com/acusset" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                GitHub
              </a>
              <a href="https://linkedin.com/in/antoine-cusset" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                LinkedIn
              </a>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Certifications</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>ICT Assessment Certification for Software Developer (2024)</li>
              <li>GitHub Actions Certification (2024)</li>
              <li>Stripe Certified Professional Developer (2024)</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
