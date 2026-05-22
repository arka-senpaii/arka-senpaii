import React, { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

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
    description: "An Agro-Tech project based on mobile Soil Statistics. ML trained up to accuracy of 92.90%. Helps farmers predict the best yield and take precautions.",
    tools: "Python, Machine Learning, Soil Statistics, NumPy, Firebase",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800", // Soil analysis feel
    reverse: false,
    github: "https://github.com/arka-senpaii/Krishi_Mitra",
    date: "January 2025 - May 2025"
  },
  {
    id: "04",
    title: "Automatic Barrier Closing",
    category: "IoT / Hardware Security",
    description: "Railway accident precaution system. The barrier comes down automatically when the train passes from a certain signal. Added Manual Override, SMS system, Login and Security.",
    tools: "Hardware, IoT Sensors, Arduino UNO, ESP32, C++",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800", // Railway feel
    reverse: true,
    github: "https://github.com/arka-senpaii/Railway",
    date: "July 2025 - December 2025"
  },
  {
    id: "05",
    title: "Autonomous Ground Vehicle for Precision Agriculture",
    category: "IoT & ML / Automation",
    description: "Utilized NPK, DHT22, Rain, Moisture, and LDR sensors with ESP32 for the mobile car. Optimized Python code on Raspberry Pi 3B+ for crop prediction ML integration. Used PLC automation and Firebase Cloud database.",
    tools: "ESP32, Python, Raspberry Pi, Machine Learning, Firebase, PLC, NPK Sensor",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800", // Smart Agriculture feel
    reverse: false,
    date: "January 2024 - Ongoing"
  },
  {
    id: "06",
    title: "SmartRailway App",
    category: "Android / Mobile App",
    description: "Modern Android application integrated with Firebase to track railway data, security alerts, and manual system overrides for safety controls.",
    tools: "Kotlin, Java, Mobile Development, Firebase",
    image: "https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?auto=format&fit=crop&q=80&w=800",
    reverse: true,
    github: "https://github.com/arka-senpaii/SmartRailway_App"
  }
];

const ProjectCard = ({ project }) => {
  const cardRef = useScrollReveal((el, anime) => {
    // Reveal text block
    anime({
      targets: el.querySelector('.project-info'),
      translateX: project.reverse ? [50, 0] : [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
    });

    // Reveal visual block
    anime({
      targets: el.querySelector('.project-visual'),
      scale: [0.95, 1],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: 100,
    });

    // Stagger badges
    anime({
      targets: el.querySelectorAll('.skill-badge'),
      scale: [0.5, 1],
      opacity: [0, 1],
      easing: 'spring(1, 80, 12, 0)',
      delay: anime.stagger(40, { start: 400 }),
    });

    // Large background number slide-in
    anime({
      targets: el.querySelector('.project-number'),
      opacity: [0, 0.03],
      translateY: [-30, 0],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: 200,
    });
  }, { threshold: 0.15 });

  return (
    <div 
      ref={cardRef} 
      className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center relative min-h-[450px]`}
    >
      {/* Info Column */}
      <div className="project-info flex-1 w-full relative opacity-0">
        <div className="project-number text-[6rem] lg:text-[10rem] font-black text-white/5 leading-none absolute -top-12 lg:-top-24 -left-6 -z-10 select-none opacity-0">
          {project.id}
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-3xl lg:text-4xl font-bold text-white/90">{project.title}</h3>
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent-purple transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <Github size={24} />
            </a>
          )}
        </div>
        
        <p className="text-accent-blue dark:text-accent-purple text-lg font-medium tracking-wide mb-3">{project.category}</p>
        
        {project.date && (
          <p className="text-white/40 text-xs tracking-widest uppercase mb-4">{project.date}</p>
        )}

        {project.description && (
          <p className="text-white/60 text-sm leading-relaxed mb-6">{project.description}</p>
        )}
        
        <div className="space-y-3">
          <h4 className="text-white/80 uppercase tracking-widest text-xs font-semibold">Technologies applied</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.split(', ').map((skill, i) => (
              <span 
                key={i}
                className="skill-badge px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-[11px] text-accent-purple font-medium tracking-wide hover:bg-accent-purple/20 hover:border-accent-purple/40 hover:text-white transition-all cursor-default opacity-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Column */}
      <div className="project-visual flex-[1.2] w-full relative group opacity-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-accent-purple/20 blur-[100px] -z-10 opacity-30 group-hover:opacity-65 transition-opacity duration-500" />
        <div className="rounded-3xl overflow-hidden border border-white/10 glass bg-white/5 shadow-2xl relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-[320px] object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 mix-blend-screen"
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const headingRef = useScrollReveal((el, anime) => {
    anime({
      targets: el,
      translateY: [30, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
    });
  }, { threshold: 0.1 });

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative">
      <div ref={headingRef} className="opacity-0">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-24 text-white">
          <span className="text-white/40 font-light mr-4">My</span>
          Work
        </h2>
      </div>

      <div className="flex flex-col gap-40">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
