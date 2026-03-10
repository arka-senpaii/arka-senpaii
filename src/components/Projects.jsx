import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export const projects = [
  {
    id: "01",
    title: "IPL Predictor",
    category: "Machine Learning / Sports Analytics",
    tools: "Python, Scikit-Learn, Deep Learning, Chart.js, Pandas, NumPy",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800",
    reverse: false,
    github: "https://github.com/arka-senpaii/IPL_Predictor"
  },
  {
    id: "02",
    title: "T20 Cricket Predictor",
    category: "Data Analysis / Prediction",
    tools: "Python, Static Data Architecture, JSON Precomputation, Pandas",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
    reverse: true,
    github: "https://github.com/arka-senpaii/Cricket_Predictor"
  },
  {
    id: "03",
    title: "Krishi Mitra",
    category: "Agro-Tech / Machine Learning",
    tools: "Python, Machine Learning, Soil Statistics, NumPy, Firebase",
    image: "/Krishi_Mitra.jpg",
    reverse: false,
    github: "https://github.com/arka-senpaii/Krishi_Mitra"
  },
  {
    id: "04",
    title: "Automatic Barrier Closing",
    category: "IoT / Hardware Security",
    tools: "Hardware, IoT Sensors, Arduino UNO, ESP32, C++",
    image: "/Railway.jpeg",
    reverse: true,
    github: "https://github.com/arka-senpaii/Railway"
  },
  {
    id: "05",
    title: "SmartRailway App",
    category: "Android / Mobile App",
    tools: "Kotlin, Java, Mobile Development, Firebase",
    image: "https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?auto=format&fit=crop&q=80&w=800",
    reverse: false,
    github: "https://github.com/arka-senpaii/SmartRailway_App"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-24 text-white">
          <span className="text-white/40 font-light mr-4">My</span>
          Work
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Info Column */}
              <div className="flex-1 w-full relative">
                <div className="text-[5rem] lg:text-[8rem] font-black text-white/5 leading-none absolute -top-10 lg:-top-20 -left-5 -z-10 select-none">
                  {project.id}
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl lg:text-4xl font-bold">{project.title}</h3>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-accent-purple transition-colors p-2 rounded-full hover:bg-white/5"
                    >
                      <Github size={28} />
                    </a>
                  )}
                </div>
                
                <p className="text-white/50 text-xl mb-12">{project.category}</p>
                
                <div className="space-y-4">
                  <strong className="text-white uppercase tracking-[2px] text-sm">Skills & Technologies applied</strong>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.split(', ').map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs text-accent-purple/90 font-medium tracking-wide hover:bg-accent-purple/20 hover:border-accent-purple/40 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="flex-[1.5] w-full relative group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-accent-purple/30 blur-[80px] -z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="rounded-2xl overflow-hidden border border-white/10 glass">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 mix-blend-screen"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
