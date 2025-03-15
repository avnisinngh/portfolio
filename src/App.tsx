import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Youtube, Instagram, ExternalLink, Code, Zap, Star, BookOpen, Trophy, Briefcase } from 'lucide-react';
import profileImage from './image.jpeg';
import week1Image from './week1.png';
import week2Image from './WEEK2.png';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "PORT SCANNER",
      description: " Python-based Port Scanner that scans a range of ports on a given target IP to check for open ports",
      tech: ["Python", "Socket.IO", "Threading"],
      link: "https://github.com/avnisinngh/Port-Scanner",
      color: "bg-[#ffcbf2]"
    },
    {
      title: "OMNI AI",
      description: "Centralized AI platform",
      tech: ["AI/ML","TypeScript","MERN Stack"],
      link: "https://github.com/avnisinngh/HACKWITHINDIA",
      color: "bg-[#ffcbf2]"
    },
    {
      title: "Nourish Connect",
      description: "A digital platform to eliminate food wastage and hunger in underserved communities",
      tech: ["MERN Stack"],
      link: "https://github.com/avnisinngh/CODE_KSHETRA/tree/main",
      color: "bg-[#ffcbf2]"
    },
    {
      title: "Recognition-and-Detection-of-Modulated-Waveforms",
      description: "automatic recognition and classification of modulated waveforms using machine learning",
      tech: ["Python", "Rainforest"],
      link: "https://github.com/avnisinngh/Recognition-and-Detection-of-Modulated-Waveforms",
      color: "bg-[#ffcbf2]"
    },
    {
      title: "Voting_Application",
      description: "A secure and simple voting system where users can cast votes, and administrators can manage candidates and view voting results.",
      tech: ["MERN Stack"],
      link: "https://github.com/avnisinngh/Voting_Application",
      color: "bg-[#ffcbf2]"
    }
  ];

  const experience = [
    {
      role: "CYBER SECURITY INTERN",
      company: "OMNITRIX BUISNESS SERVICES PVT. LTD",
      period: "JAN 2025 - PRESENT",
      description: "Researching emerging threats, vulnerabilities, and cybersecurity trends. ",
      color: "bg-[#f3c4fb]"
    }
  ];

  const hackathons = [
    {
      name: "SMART INDIA HACKATHON 2025",
      position: "GRAND-FINALISTS",
      description: "Build Recognition and Detection of Modulated Waveforms System",
      color: "bg-[#ecbcfd]"
    },
    {
      name: "CODE-KSHETRA 2.0",
      position: "FINALIST",
      description: "Developed a digital platform to eliminate food wastage and hunger in underserved communities ",
      color: "bg-[#ecbcfd]"
    },
    {
      name: "BUILD WITH INDIA",
      position: "SEMI-FINALIST",
      description: "Developed a centralized AI platform  ",
      color: "bg-[#ecbcfd]"
    },
    {
      name: "SOCIAL WINTER OF CODE 2025",
      position: "6TH RANK",
      description: "OPEN SOURCE Contributer",
      color: "bg-[#ecbcfd]"
    },
    {
      name: "GURU TECH PRESENTATIONS",
      position: "RUNNER UP",
      description: "Presented a presentaion of digitalization",
      color: "bg-[#ecbcfd]"
    },
    {
      name: "CODE-O-GEEKS 2.0",
      position: "SECOND RUNNER UP",
      description: "Coding competion",
      color: "bg-[#ecbcfd]"
    }
    
  ];

  const skills = [
    {
      category: "Programming",
      items: ["Java", "C", "Python", "JavaScript", "Tailwind CSS", "Solidity"]
    },
    {
      category: "Web Technologies",
      items: ["Node.js", "Reacts.js", "MongoDB", "Mongoose", "HTML", "CS"]
    },
    {
      category: "Tools and Framework",
      items: ["Express.js", "JWT Authentication", "Git"]
    }
  ];

  const socialLinks = {
    github: "https://github.com/avnisinngh",
    linkedin: "https://www.linkedin.com/in/avni-singh-49a44a289/",
    youtube: "https://www.youtube.com/@avnisinngh",
    instagram: "https://www.instagram.com/codecademia/",
    email: "mailto:avni.dns@gmail.com"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">AVNI SINGH</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-[#DAF5F0] font-bold">ABOUT</a>
            <a href="#coding" className="hover:text-[#FFB2AF] font-bold">CODING</a>
              <a href="#work" className="hover:text-[#FF6B6B] font-bold">PROJECT</a>
              <a href="#experience" className="hover:text-[#4ECDC4] font-bold">EXPERIENCE</a>
              <a href="#achi" className="hover:text-[#4ECDC4] font-bold">ACHIEVEMENTS</a>
              <a href="#skills" className="hover:text-[#FFE66D] font-bold">SKILLS</a>
              <a href="#contact" className="neo-brutalist-sm px-4 py-2 bg-black text-white hover:bg-[#FF6B6B] transition-colors">
                CONTACT
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-base font-bold">ABOUT</a>
              <a href="#coding" className="block px-3 py-2 text-base font-bold">CODING</a>
              <a href="#work" className="block px-3 py-2 text-base font-bold">PROJECT</a>
              <a href="#experience" className="block px-3 py-2 text-base font-bold">EXPERIENCE</a>
              <a href="#achi" className="block px-3 py-2 text-base font-bold">ACHIEVEMENTS</a>
              <a href="#skills" className="block px-3 py-2 text-base font-bold">SKILLS</a>
              <a href="#contact" className="block px-3 py-2 text-base font-bold">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="neo-brutalist bg-[#c8e7ff] p-8 md:p-16 mb-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                
                  <span className="text-[#a20ebb]">Multidimensional Creator & Developer</span>
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mb-8">
                Crafting Digital Experiences with Code, Content,Open Source and Cybersecurity Curiosity.
                </p>
                <div className="flex gap-4">
                  <a href={"https://github.com/avnisinngh"} className="neo-brutalist-sm p-4 bg-black text-white hover:bg-[#FF6B6B] transition-colors">
                    <Github size={24} />
                  </a>
                  <a href={"https://www.linkedin.com/in/avni-singh-49a44a289/"} className="neo-brutalist-sm p-4 bg-black text-white hover:bg-[#4ECDC4] transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href={"https://www.youtube.com/@avnisinngh"} className="neo-brutalist-sm p-4 bg-black text-white hover:bg-[#FFE66D] transition-colors">
                    <Youtube size={24} />
                  </a>
                  <a href={"https://www.instagram.com/codecademia/"} className="neo-brutalist-sm p-4 bg-black text-white hover:bg-[#FF6B6B] transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              <div className='display-flex justify-center'>
                <div className="neo-brutalist overflow-hidden justify-center">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-[300px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden py-4 bg-black text-white">
            <p className="marquee text-xl font-bold whitespace-nowrap">
              FULL STACK DEVELOPMENT • CYBERSECURITY • CODING 
            </p>
          </div>
        </div>
      </section>

      {/* Coding profiles Section */}
      <section id="coding" className="py-20 px-4 ">
      <div className="neo-brutalist bg-[#e2afff] p-8 md:p-16 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">CODING PROFILES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href={"https://leetcode.com/u/avnisinngh/"} className="neo-brutalist bg-[#ffcbf2] p-8 hover:transform hover:-translate-y-2 transition-transform">
              <h3 className="text-2xl font-bold mb-2">LEETCODE</h3>
              <p>solved +250 questions</p>
            </a>
            <a href={"https://codeforces.com/profile/avnidns"} className="neo-brutalist bg-[#ffcbf2] p-8 hover:transform hover:-translate-y-2 transition-transform">
              <h3 className="text-2xl font-bold mb-2">CODEFORCES</h3>
              <p>solved +70 questions</p>
            </a>
            <a href={"https://www.codechef.com/users/avnisinngh"} className="neo-brutalist bg-[#ffcbf2] p-8 hover:transform hover:-translate-y-2 transition-transform">
              <h3 className="text-2xl font-bold mb-2">CODECHEF</h3>
              <p>2 star, solved +100 questions</p>
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-4">
      <div className="neo-brutalist bg-[#c0fdff] p-8 md:p-16 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">PROJECSTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`neo-brutalist neo-brutalist-hover ${project.color} p-8 transition-all`}
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="neo-brutalist-sm px-3 py-1 bg-black text-white text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 neo-brutalist-sm bg-black text-white px-4 py-2"
                >
                  VIEW PROJECT <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 ">
      <div className="neo-brutalist bg-[#c8e7ff] p-8 md:p-16 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">EXPERIENCE</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`neo-brutalist neo-brutalist-hover ${exp.color} p-8bg-[#98c1d9] p-6 neo-brutalist-card group animate-scale transition-all`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase size={24} className="text-black" />
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                </div>
                <p className="text-lg font-bold mb-2">{exp.company}</p>
                <p className="text-sm mb-4">{exp.period}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
          </div>

          <h2 id="achi" className="text-4xl font-bold mb-12">HACKATHONS & ACHIEVEMENTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hackathons.map((hack, index) => (
              <div
                key={index}
                className={`neo-brutalist neo-brutalist-hover ${hack.color}  p-8bg-[#98c1d9] p-6 neo-brutalist-card group animate-scale transition-all`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Trophy size={24} className="text-black" />
                  <h3 className="text-2xl font-bold">{hack.name}</h3>
                </div>
                <p className="text-lg font-bold mb-2">{hack.position}</p>
                <p>{hack.description}</p>
              </div>
            ))}
          </div>
        </div>
        
      </section>

      {/* Google cloud arcade */}
      <section id="arcade" className="py-20 px-4">
      <div className="neo-brutalist bg-[#d0d1ff] p-8 md:p-16 mb-8">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">GOOGLE CLOUD ARCADE</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <a href="https://www.cloudskillsboost.google/public_profiles/572bcc60-dd81-465a-b173-09599f1427c4/badges/14304764" target="_blank" rel="noopener noreferrer" className="neo-brutalist bg-[#e5b3fe] p-8 hover:transform hover:-translate-y-2 transition-transform flex justify-center">
            <img src={week1Image} alt="Google Cloud Badge 1" className="w-32 h-32" />
           </a>
          <a href="https://www.cloudskillsboost.google/public_profiles/572bcc60-dd81-465a-b173-09599f1427c4/badges/14310172" target="_blank" rel="noopener noreferrer" className="neo-brutalist bg-[#e5b3fe] p-8 hover:transform hover:-translate-y-2 transition-transform flex justify-center">
            <img src={week2Image} alt="Google Cloud Badge 2" className="w-32 h-32" />
          </a>
          
        </div>
        </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
      <div className="neo-brutalist bg-[#deaaff] p-8 md:p-16 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">SKILLS & EXPERTISE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="neo-brutalist bg-white p-8 neo-brutalist-hover p-8bg-[#98c1d9] p-6 neo-brutalist-card group animate-scale transition-all">
                <h3 className="text-2xl font-bold mb-6 ">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="neo-brutalist-sm px-3 py-1 bg-[#FFE66D] text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      

      {/* Content Creation Section */}
      <section id="content" className="py-20 px-4 ">
      <div className="neo-brutalist bg-[#ffcbf2] p-8 md:p-16 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">CONTENT CREATION</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href={socialLinks.youtube} className="neo-brutalist bg-[#c0fdff] p-8 hover:transform hover:-translate-y-2 transition-transform">
              <Youtube size={32} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">YouTube</h3>
              <p>Tech tutorials & coding tips</p>
            </a>
            <a href={socialLinks.instagram} className="neo-brutalist bg-[#c0fdff] p-8 hover:transform hover:-translate-y-2 transition-transform">
              <Instagram size={32} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Instagram</h3>
              <p>Behind the scenes & tech life</p>
            </a>
            <a href="#" className="neo-brutalist bg-[#c0fdff] p-8 hover:transform hover:-translate-y-2 transition-transform">
              <BookOpen size={32} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Blog</h3>
              <p>In-depth technical articles</p>
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="neo-brutalist bg-[#249fff] p-8 md:p-16">
            <h2 className="text-4xl font-bold mb-8">LET'S WORK TOGETHER</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl mb-6">
                  Have a project in mind? Let's create something amazing together.
                </p>
                <a
                  href={"avni.dns@gmail.com"}
                  className="neo-brutalist-sm inline-block bg-black text-white px-8 py-4 text-lg font-bold hover:bg-[#d32cef] transition-colors"
                >
                  SAY HELLO
                </a>
              </div>
              <div className="flex gap-4">
                <a href={"https://github.com/avnisinngh"} className="neo-brutalist-sm p-4 bg-white hover:bg-[#deaaff] transition-colors neo-brutalist-hover p-6 neo-brutalist-card group animate-scale transition-all">
                  <Github size={24} />
                </a>
                <a href={"https://www.linkedin.com/in/avni-singh-49a44a289/"} className="neo-brutalist-sm p-4 bg-white hover:bg-[#deaaff] transition-colors neo-brutalist-hover p-6 neo-brutalist-card group animate-scale transition-all">
                  <Linkedin size={24} />
                </a>
                <a href={"https://www.youtube.com/@avnisinngh"} className="neo-brutalist-sm p-4 bg-white hover:bg-[#deaaff] transition-colors neo-brutalist-hover p-6 neo-brutalist-card group animate-scale transition-all">
                  <Youtube size={24} />
                </a>
                <a href={"https://www.instagram.com/codecademia/"} className="neo-brutalist-sm p-4 bg-white hover:bg-[#deaaff] transition-colors neo-brutalist-hover p-6 neo-brutalist-card group animate-scale transition-all">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold">
            © {new Date().getFullYear()} •   MADE BY AVNI SINGH
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
