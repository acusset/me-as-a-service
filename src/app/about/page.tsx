import React from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function About() {
  const techStack = ['Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Docker', 'Kubernetes'];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="mb-12 flex items-center gap-8">
        <div className="w-32 h-32 rounded-full bg-zinc-800 flex-shrink-0 overflow-hidden relative shadow-[0_0_15px_rgba(255,183,75,0.15)]">
          <Image
            src="https://placecats.com/200/200"
            alt="Profile picture placeholder"
            fill
            sizes="128px"
            priority
            className="object-cover"
            style={{
              borderRadius: '50%',
            }}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4 text-xanthous">About Me</h1>
          <p className="text-xl text-alabaster">
            Senior Software Engineer passionate about building scalable solutions and sharing knowledge
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <div>
            <p className="text-lg mb-6 text-alabaster/90">
              Hello! I&apos;m Antoine CUSSET, a Senior Software Engineer at <span className="text-xanthous">Palo IT</span> in Singapore. With over 8 years of experience
              in software development, I specialize in building robust, scalable applications using modern technologies
              and best practices.
            </p>

            <p className="text-lg mb-6 text-alabaster/90">
              This website serves as my personal platform to showcase my work, share my knowledge, and connect with
              the tech community. It&apos;s built using modern web technologies that Im passionate about, including <span className="text-xanthous">Next.js</span>,
              <span className="text-xanthous"> React</span>, and <span className="text-xanthous">TypeScript</span>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-xanthous">Technical Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm text-alabaster hover:text-xanthous transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-xanthous">Current Focus</h2>
            <p className="text-lg text-alabaster/90">
              At <span className="text-xanthous">Palo IT</span>, I lead development teams, conduct knowledge-sharing sessions, and work on cutting-edge
              projects in wealth management and carbon credit marketplaces. I&apos;m particularly interested in Domain-Driven
              Design, microservices architecture, and building efficient developer experiences.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-xanthous">Connect With Me</h2>
            <div className="space-y-2">
              <a href="mailto:a.cusset@gmail.com" className="block text-alabaster/90 hover:text-xanthous transition-colors">
                a.cusset@gmail.com
              </a>
              <a href="https://github.com/acusset" target="_blank" rel="noopener noreferrer" className="block text-alabaster/90 hover:text-xanthous transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/antoine-cusset" target="_blank" rel="noopener noreferrer" className="block text-alabaster/90 hover:text-xanthous transition-colors">
                LinkedIn
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
