import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Database, Monitor, Cpu, Users } from 'lucide-react';
import GithubStats from './GithubStats';
import { projects } from './Projects';

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

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-16 text-white text-center lg:text-left">
          <span className="text-white/40 font-light mr-4">My</span>
          Arsenal
        </h2>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 text-lg text-white/60 leading-relaxed max-w-2xl">
            <p className="mb-6">
              I am Arka Mahajan, an IoT specialist with frontend knowledge and a strong interest in AI/ML. 
              Currently pursuing my Bachelor of Technology in Computer Science at the University of Engineering 
              and Management (Jaipur), I love building systems that connect the physical and digital worlds.
            </p>
            <p className="mb-12">
              I am currently working on the Railway project and actively expanding my knowledge in Data Structures, 
              Algorithms, and Android development using modern architectures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
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

          <div className="flex-[1.5] w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-purple/20 blur-[120px] -z-10 pointer-events-none" />
            
            {cvData.map((section, idx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="glass border border-white/10 rounded-3xl p-6 lg:p-8 hover:border-accent-purple/50 cursor-default hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] transition-all duration-300 group"
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
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] p-3 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(167,139,250,0.15)] opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all duration-300 z-50 pointer-events-none translate-y-2 group-hover/skill:translate-y-0 text-left">
                          <p className="text-[10px] text-accent-purple uppercase tracking-widest mb-1.5 font-bold">Applied In</p>
                          <div className="flex flex-col gap-1.5">
                            {matched.map(p => (
                              <span key={p.id} className="text-xs border-l-2 border-white/20 pl-2 text-white/80">{p.title}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )})}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <GithubStats />
      </motion.div>
    </section>
  );
};

export default About;
