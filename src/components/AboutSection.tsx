
import React from 'react';
import { GraduationCap, Medal, Trophy } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-[#1A1F2C]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-pixel-purple/20 px-4 py-2 rounded-lg mb-4">
            <h2 className="font-pixel text-pixel-purple text-sm">ABOUT</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-pixel-purple">Me</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I help businesses create outstanding online presences.
            I live in Udhna, Surat city.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="pixel-card group">
            <div className="text-pixel-purple mb-4 flex items-center justify-between">
              <div className="bg-pixel-darkPurple p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex space-x-1">
                <span className="led green"></span>
                <span className="led yellow"></span>
                <span className="led red"></span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="terminal-title text-xs ml-4">experience.sh</span>
              </div>
              
              <div className="font-mono text-sm">
                <p className="mb-2"><span className="text-pixel-purple">$</span> Over 3+ years of software development experience.</p>
                <p className="mb-2"><span className="text-pixel-purple">$</span> Started my career at Sridix Technology in Udhna (Surat).</p>
                <p className="mb-2"><span className="text-pixel-purple">$</span> Gained foundational experience in development and project execution.</p>
                <p><span className="text-pixel-purple">$</span> Joined Dive Infocuses for one year, focusing on building scalable web applications.</p>
              </div>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="pixel-card group">
            <div className="text-pixel-purple mb-4 flex items-center justify-between">
              <div className="bg-pixel-darkPurple p-3 rounded-md">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex space-x-1">
                <span className="led cyan"></span>
                <span className="led yellow"></span>
                <span className="led green"></span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Education</h3>
            
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="terminal-title text-xs ml-4">education.sh</span>
              </div>
              
              <div className="font-mono text-sm">
                <p className="mb-4"><span className="text-pixel-purple">$</span> Bachelor's degree (BCA) from Bhagwan Mahavir University.</p>
                <p className="text-pixel-purple mb-2">$ cat achievements.txt</p>
                <div className="pl-4 border-l-2 border-pixel-purple mb-2">
                  <p className="mb-2 flex items-center">
                    <span className="pixel-bullet"></span>
                    <Trophy className="h-4 w-4 mr-2 text-yellow-500 inline" /> 
                    Mind Spark Contest – Winner at Bhagwan Mahavir College
                  </p>
                  <p className="mb-2 flex items-center">
                    <span className="pixel-bullet"></span>
                    <Medal className="h-4 w-4 mr-2 text-yellow-500 inline" /> 
                    Clash of Code – 3rd Position
                  </p>
                  <p className="flex items-center">
                    <span className="pixel-bullet"></span>
                    <Medal className="h-4 w-4 mr-2 text-yellow-500 inline" /> 
                    Gooler – 2nd Position
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="pixel-card group">
            <div className="text-pixel-purple mb-4 flex items-center justify-between">
              <div className="bg-pixel-darkPurple p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex space-x-1">
                <span className="led red"></span>
                <span className="led green"></span>
                <span className="led cyan"></span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="terminal-title text-xs ml-4">skills.sh</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div>
                  <p className="text-pixel-purple mb-1">$ Frontend</p>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">Next.js</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">Tailwind</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">JavaScript</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">TypeScript</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">HTML/CSS</span>
                  </div>
                </div>
                <div>
                  <p className="text-pixel-purple mb-1">$ Backend</p>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">Node.js</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">Express</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">MongoDB</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">Firebase</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">MySQL</span>
                    <span className="bg-[#2A2D3E] px-2 py-1 rounded text-xs">REST APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
