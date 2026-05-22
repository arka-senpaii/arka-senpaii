import React, { useRef } from 'react';
import { Terminal, Lightbulb, Database, Monitor, Cpu, Users } from 'lucide-react';
import GithubStats from './GithubStats';
import { projects } from './Projects';
import useScrollReveal from '../hooks/useScrollReveal';

const cvData = [
  {
    category: "Programming Languages",
    icon: <Terminal className="text-accent-purple mb-4" size={32} />,
    items: ["Java", "SQL", "Python", "JavaScript", "HTML", "CSS", "Kotlin"]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Lightbulb className="text-accent-blue mb-4" size={32} />,
    items: ["Pandas", "Matplotlib", "NumPy", "Scikit-Learn", "Seaborn"]
  },
  {
    category: "Tools & Databases",
    icon: <Database className="text-pink-400 mb-4" size={32} />,
    items: ["Excel", "PowerPoint", "Word", "MySQL", "Firebase", "Tableau"]
  },
  {
    category: "Platforms & IDEs",
    icon: <Monitor className="text-green-400 mb-4" size={32} />,
    items: ["Jupyter Notebook", "VS Code", "Blue J", "Arduino IDE"]
  },
  {
    category: "Hardware & Systems",
    icon: <Cpu className="text-yellow-400 mb-4" size={32} />,
    items: ["Ubuntu", "Windows", "Pi OS", "Arduino UNO", "Node MCU", "ESP32", "ESP82", "Raspberry Pi"]
  },
  {
    category: "Soft Skills & Extras",
    icon: <Users className="text-orange-400 mb-4" size={32} />,
    items: ["Strong Voice", "People Management", "Music"]
  }
];

const stats = [
  { label: "Projects", value: 6, suffix: "+" }, // 6 projects now
  { label: "Patent", value: 1 },
  { label: "CGPA", value: 8.09 } // Updated from CV: 8.09
];

const About = () => {
  // Main section reveal
  const sectionRef = useScrollReveal((el, anime) => {
    anime({
      targets: el.querySelectorAll('.reveal-intro'),
      translateY: [40, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(120),
    });
  }, { threshold: 0.1 });

  // Stats reveal and counting animation
  const statsContainerRef = useScrollReveal((el, anime) => {
    // Reveal stats boxes
    anime({
      targets: el.querySelectorAll('.stat-box'),
      scale: [0.95, 1],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(100),
    });

    // Run counting animation
    const counters = el.querySelectorAll('.counter');
    counters.forEach(counterEl => {
      const target = parseFloat(counterEl.getAttribute('data-value'));
      const isDecimal = target % 1 !== 0;
      anime({
        targets: counterEl,
        innerHTML: [0, target],
        easing: 'easeInOutExpo',
        round: isDecimal ? 100 : 1,
        duration: 2000,
        update: function() {
          if (isDecimal) {
            counterEl.innerHTML = parseFloat(counterEl.innerHTML).toFixed(2);
          }
        }
      });
    });
  }, { threshold: 0.15 });

  // Stagger reveal for skill cards
  const skillGridRef = useScrollReveal((el, anime) => {
    anime({
      targets: el.querySelectorAll('.skill-card'),
      translateY: [40, 0],
      opacity: [0, 1],
      scale: [0.97, 1],
      easing: 'easeOutExpo',
      duration: 900,
      delay: anime.stagger(100),
    });
  }, { threshold: 0.1 });

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative">
      <div className="reveal-intro opacity-0">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-16 text-white text-center lg:text-left">
          <span className="text-white/40 font-light mr-4">My</span>
          Arsenal
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: Avatar, Text, and Stats */}
        <div className="flex-1 text-lg text-white/60 leading-relaxed max-w-2xl">
          <div className="reveal-intro opacity-0 relative w-48 h-48 lg:w-56 lg:h-56 mb-8 rounded-3xl overflow-hidden glass border border-white/10 group shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:shadow-[0_0_50px_rgba(167,139,250,0.3)] transition-all duration-500">
            <div className="absolute inset-0 bg-accent-purple/20 group-hover:bg-accent-purple/0 transition-all z-10 duration-500 pointer-events-none" />
            <img 
              src="/profile.jpeg" 
              alt="Arka Mahajan" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
          </div>

          <p className="reveal-intro opacity-0 mb-6">
            I am Arka Mahajan, an IoT specialist with frontend knowledge and a strong interest in AI/ML. 
            Currently pursuing my Bachelor of Technology in Computer Science at the University of Engineering 
            and Management (Jaipur), I love building systems that connect the physical and digital worlds.
          </p>
          
          <p className="reveal-intro opacity-0 mb-12">
            I am currently working on the Railway project and actively expanding my knowledge in Data Structures, 
            Algorithms, and Android development using modern architectures.
          </p>

          {/* Stats Strip */}
          <div ref={statsContainerRef} className="grid grid-cols-3 gap-4 mb-8">
            {stats.map(stat => (
              <div 
                key={stat.label} 
                className="stat-box opacity-0 text-center glass border border-white/10 rounded-2xl py-5 px-3 hover:border-accent-purple/30 transition-all duration-300"
              >
                <span className="text-3xl font-bold text-accent-purple block mb-1">
                  {stat.prefix || ''}<span className="counter" data-value={stat.value}>0</span>{stat.suffix || ''}
                </span>
                <span className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="reveal-intro opacity-0 grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
            <div>
              <h3 className="text-xl font-medium mb-6 text-white/90">Spoken Languages</h3>
              <ul className="space-y-3 text-white/60">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Bengali</span><span className="text-accent-purple/80">Native</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>English</span><span className="text-accent-purple/80">Professional</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Hindi</span><span className="text-accent-purple/80">Intermediate</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6 text-white/90">Hobbies</h3>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent-blue/50" /> Reading Books</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent-blue/50" /> Learning New Skills</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent-blue/50" /> Playing Music</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Skill Cards */}
        <div ref={skillGridRef} className="flex-[1.5] w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-purple/10 blur-[120px] -z-10 pointer-events-none" />
          
          {cvData.map((section) => (
            <div 
              key={section.category}
              className="skill-card opacity-0 glass border border-white/10 rounded-3xl p-6 lg:p-8 hover:border-accent-purple/50 cursor-default hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300 origin-left">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white/90 group-hover:text-white transition-colors">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.items.map((skill) => {
                  const matched = projects.filter(p => p.tools.split(', ').includes(skill));
                  return (
                    <div key={skill} className="relative group/skill">
                      <span 
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-sm text-white/70 group-hover:border-white/20 group-hover:text-white/90 transition-colors block cursor-help"
                      >
                        {skill}
                      </span>
                      {matched.length > 0 && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] p-3 rounded-xl bg-black/95 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(167,139,250,0.15)] opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all duration-300 z-50 pointer-events-none translate-y-2 group-hover/skill:translate-y-0 text-left">
                          <p className="text-[10px] text-accent-purple uppercase tracking-widest mb-1.5 font-bold">Applied In</p>
                          <div className="flex flex-col gap-1.5">
                            {matched.map(p => (
                              <span key={p.id} className="text-xs border-l-2 border-white/20 pl-2 text-white/80">{p.title}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <GithubStats />
    </section>
  );
};

export default About;
