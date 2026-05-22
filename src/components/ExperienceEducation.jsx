import React, { useRef } from 'react';
import { Trophy, Medal, Award, Star, Users, Mic, Plane, Briefcase, GraduationCap } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const ExperienceEducation = () => {
  const containerRef = useScrollReveal((el, anime) => {
    // Cinematic stagger reveal of the columns and cards
    anime({
      targets: el.querySelectorAll('.reveal-item'),
      translateY: [60, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: anime.stagger(150),
    });

    // Animate timeline entries stagger
    anime({
      targets: el.querySelectorAll('.timeline-entry'),
      translateX: [-40, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(150, { start: 300 }),
    });

    // Pulsing timeline dots animation
    anime({
      targets: el.querySelectorAll('.timeline-dot'),
      scale: [1, 1.3, 1],
      opacity: [0.6, 1, 0.6],
      easing: 'easeInOutQuad',
      duration: 2000,
      loop: true,
      delay: anime.stagger(250),
    });

    // Stagger slide-in achievements
    anime({
      targets: el.querySelectorAll('.achievement-item'),
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(80, { start: 600 }),
    });
  }, { threshold: 0.1 });

  return (
    <section id="timeline" ref={containerRef} className="py-20 lg:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative">
      <div className="reveal-item opacity-0">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-16 text-white">
          <span className="text-white/40 font-light mr-4">My</span>
          Timeline
        </h2>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Experience Timeline */}
          <div className="reveal-item opacity-0 glass border border-white/10 rounded-[2rem] p-10 lg:col-span-3 relative overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="text-accent-purple" size={28} />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="relative border-l border-white/10 ml-4 pl-8 space-y-12">
              {/* Techvein IT Solutions */}
              <div className="timeline-entry relative opacity-0">
                <div className="timeline-dot absolute w-3 h-3 bg-accent-purple rounded-full -left-[38.5px] top-2 shadow-[0_0_15px_var(--accent-purple)]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold">Robotics Instructor</h4>
                  <span className="text-accent-purple font-semibold text-xs tracking-widest uppercase">March 2026 - Ongoing</span>
                </div>
                <p className="text-white/80 font-medium text-base mb-3">Techvein IT Solutions Pvt. Ltd. | SRN International School, Jagatpura, Jaipur</p>
                <ul className="text-white/60 leading-relaxed text-sm lg:text-base space-y-2 list-disc list-inside">
                  <li>Instructed students about Industrial Sensors and Actuator systems.</li>
                  <li>Created RFID based Attendance System and Drone using Pixhawk flight controller.</li>
                </ul>
              </div>

              {/* Deloitte Simulation */}
              <div className="timeline-entry relative opacity-0">
                <div className="timeline-dot absolute w-3 h-3 bg-accent-purple rounded-full -left-[38.5px] top-2 shadow-[0_0_15px_var(--accent-purple)]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold">Data Analytics Job Simulation</h4>
                  <span className="text-accent-purple font-semibold text-xs tracking-widest uppercase">February 2026</span>
                </div>
                <p className="text-white/80 font-medium text-base mb-3">Deloitte Australia (via Forage)</p>
                <ul className="text-white/60 leading-relaxed text-sm lg:text-base space-y-2 list-disc list-inside">
                  <li>Completed a job simulation involving data analysis and forensic technology.</li>
                  <li>Created a data dashboard using Tableau and used Excel to classify data and draw business conclusions.</li>
                </ul>
              </div>

              {/* Patent */}
              <div className="timeline-entry relative opacity-0">
                <div className="timeline-dot absolute w-3 h-3 bg-accent-purple rounded-full -left-[38.5px] top-2 shadow-[0_0_15px_var(--accent-purple)]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold">Patent: Automatic Train Sorting System In Railway Station | 35/2024</h4>
                  <span className="text-accent-purple font-semibold text-xs tracking-widest uppercase">Jan 2024 - Aug 2024</span>
                </div>
                <ul className="text-white/60 leading-relaxed text-sm lg:text-base space-y-2 list-disc list-inside">
                  <li>Utilized IIoT for seamless data exchange between trains and station systems.</li>
                  <li>Optimized track allocation based on passenger load and platform capacity.</li>
                  <li>Enabled automated switching of loop/main lines with loco pilot communication.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education 1 Image Card (UEMJ) */}
          <div className="education-card reveal-item opacity-0 rounded-[2rem] min-h-[400px] border border-white/10 relative overflow-hidden group hover:border-white/20 hover:-translate-y-1 transition-all duration-500">
            <div className="absolute inset-0 bg-[url('/UEMJ.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="text-accent-purple" size={20} />
                <span className="text-accent-purple font-semibold text-xs tracking-widest uppercase">2023 - 2027</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">University Of Engineering and Management</h3>
              <p className="text-white/80 font-medium mb-1">B.Tech Computer Science | CGPA: 8.09</p>
              <span className="text-white/50 text-sm">Jaipur, Rajasthan</span>
            </div>
          </div>

          {/* Education 2 Image Card (AGPN) */}
          <div className="education-card reveal-item opacity-0 rounded-[2rem] min-h-[400px] border border-white/10 relative overflow-hidden group hover:border-white/20 hover:-translate-y-1 transition-all duration-500">
            <div className="absolute inset-0 bg-[url('/AGPN.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="text-accent-purple" size={20} />
                <span className="text-accent-purple font-semibold text-xs tracking-widest uppercase">2021 - 2023</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">AGPN Convent & ER School</h3>
              <p className="text-white/80 font-medium mb-1">AISSCE (PCM, I.P.) | CGPA: 7.26</p>
              <span className="text-white/50 text-sm">Purulia, West Bengal</span>
            </div>
          </div>

          {/* Education 3 Image Card (SHS) */}
          <div className="education-card reveal-item opacity-0 rounded-[2rem] min-h-[400px] border border-white/10 relative overflow-hidden group hover:border-white/20 hover:-translate-y-1 transition-all duration-500">
            <div className="absolute inset-0 bg-[url('/SHS.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="text-accent-purple" size={20} />
                <span className="text-accent-purple font-semibold text-xs tracking-widest uppercase">2010 - 2021</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Sacred Heart School</h3>
              <p className="text-white/80 font-medium mb-1">ICSE | CGPA: 7.89</p>
              <span className="text-white/50 text-sm">Purulia, West Bengal</span>
            </div>
          </div>

          {/* Achievements */}
          <div className="reveal-item opacity-0 glass border border-white/10 rounded-[2rem] p-10 lg:col-span-3 hover:border-white/20 hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-8">Achievements</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="achievement-item flex items-center gap-4 text-white/70 opacity-0">
                <Trophy className="text-accent-purple shrink-0" size={20} />
                <span>2nd in Hack UEM 3.0 (in-house hackathon, UEM Jaipur)</span>
              </li>
              <li className="achievement-item flex items-center gap-4 text-white/70 opacity-0">
                <Medal className="text-accent-purple shrink-0" size={20} />
                <span>26th in AceHack 4.0 (National Level Hackathon, UEM Jaipur)</span>
              </li>
              <li className="achievement-item flex items-center gap-4 text-white/70 opacity-0">
                <Award className="text-accent-purple shrink-0" size={20} />
                <span>3rd in MOOD I 2025 Multicity Jaipur</span>
              </li>
              <li className="achievement-item flex items-center gap-4 text-white/70 opacity-0">
                <Star className="text-accent-purple shrink-0" size={20} />
                <span>Semi Finalist in MOOD I 2025 Mantra (Battle of Bands)</span>
              </li>
              <li className="achievement-item flex items-center gap-4 text-white/70 opacity-0">
                <Users className="text-accent-purple shrink-0" size={20} />
                <span>Co-Founder of Vectorix Community</span>
              </li>
              <li className="achievement-item flex items-center gap-4 text-white/70 opacity-0">
                <Mic className="text-accent-purple shrink-0" size={20} />
                <span>Part of The Speech Society (TSS)</span>
              </li>
              <li className="achievement-item flex items-center gap-4 text-white/70 opacity-0">
                <Plane className="text-accent-purple shrink-0" size={20} />
                <span>Part of Aero-modelling Club</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
