import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';
import { Trophy, Medal, Award, Star, Users, Mic, Plane } from 'lucide-react';

const ExperienceEducation = () => {
  const achievementsRef = useRef(null);
  const timelineRef = useRef(null);
  const hasAnimatedAchievements = useRef(false);
  const hasAnimatedTimeline = useRef(false);

  useEffect(() => {
    // Achievements stagger-in animation
    const achievementsEl = achievementsRef.current;
    if (achievementsEl) {
      const achievementsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimatedAchievements.current) {
            hasAnimatedAchievements.current = true;
            anime({
              targets: achievementsEl.querySelectorAll('li'),
              translateX: [-30, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 800,
              delay: anime.stagger(100),
            });
          }
        },
        { threshold: 0.2 }
      );
      achievementsObserver.observe(achievementsEl);
      return () => achievementsObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    // Timeline dot pulse animation
    const timelineEl = timelineRef.current;
    if (timelineEl) {
      const timelineObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimatedTimeline.current) {
            hasAnimatedTimeline.current = true;
            anime({
              targets: '.timeline-dot',
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.8],
              easing: 'easeInOutQuad',
              duration: 1500,
              loop: true,
              delay: anime.stagger(300),
            });
          }
        },
        { threshold: 0.2 }
      );
      timelineObserver.observe(timelineEl);
      return () => timelineObserver.disconnect();
    }
  }, []);

  return (
    <section id="timeline" className="py-20 lg:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-16 text-white">
          <span className="text-white/40 font-light mr-4">My</span>
          Timeline
        </h2>

        {/* CSS Bento grid matching reference site architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Experience Timeline Span 3 */}
          <motion.div 
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            className="glass border border-white/10 rounded-[2rem] p-10 lg:col-span-3 relative overflow-hidden transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-10">Experience</h3>
            <div ref={timelineRef} className="relative border-l border-white/10 ml-4 pl-8 space-y-12">
              
              <div className="relative">
                <div className="timeline-dot absolute w-3 h-3 bg-accent-purple rounded-full -left-[38.5px] top-2 shadow-[0_0_15px_var(--accent-purple)]" />
                <span className="text-accent-purple font-medium text-sm tracking-widest uppercase mb-2 block">Jan 2024 - Aug 2024</span>
                <h4 className="text-xl font-bold mb-3">Patent: Automatic Train Sorting System In Railway Station | 35/2024</h4>
                <ul className="text-white/60 leading-relaxed text-sm lg:text-base space-y-2 list-disc list-inside">
                  <li>Utilized IIoT for seamless data exchange between trains and station systems.</li>
                  <li>Optimized track allocation based on passenger load and capacity.</li>
                  <li>Enabled automated switching of loop/main lines with loco pilot communication.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="timeline-dot absolute w-3 h-3 bg-accent-purple rounded-full -left-[38.5px] top-2 shadow-[0_0_15px_var(--accent-purple)]" />
                <span className="text-accent-purple font-medium text-sm tracking-widest uppercase mb-2 block">Feb 2026</span>
                <h4 className="text-xl font-bold mb-3">Deloitte Australia Data Analytics Job Simulation</h4>
                <ul className="text-white/60 leading-relaxed text-sm lg:text-base space-y-2 list-disc list-inside">
                  <li>Completed a job simulation involving data analysis and forensic technology.</li>
                  <li>Created a data dashboard using Tableau and used Excel to classify data and draw business conclusions.</li>
                </ul>
              </div>

            </div>
          </motion.div>

          {/* Education 1 Image Card (UEMJ) */}
          <motion.div 
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            className="rounded-[2rem] min-h-[400px] border border-white/10 relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[url('/UEMJ.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-bold mb-2">University Of Engineering and Management</h3>
              <p className="text-accent-purple font-medium mb-1">B.Tech Computer Science | CGPA: 8.19</p>
              <span className="text-white/50 text-sm">Jaipur, Rajasthan (2023 - 2027)</span>
            </div>
          </motion.div>

          {/* Education 2 Image Card (AGPN) */}
          <motion.div 
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            className="rounded-[2rem] min-h-[400px] border border-white/10 relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[url('/AGPN.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-bold mb-2">AGPN Convent & ER School</h3>
              <p className="text-accent-purple font-medium mb-1">AISSCE (PCM, I.P.) | CGPA: 7.26</p>
              <span className="text-white/50 text-sm">Purulia, West Bengal (2021 - 2023)</span>
            </div>
          </motion.div>

          {/* Education 3 Image Card (SHS) */}
          <motion.div 
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            className="rounded-[2rem] min-h-[400px] border border-white/10 relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[url('/SHS.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-bold mb-2">Sacred Heart School</h3>
              <p className="text-accent-purple font-medium mb-1">ICSE | CGPA: 7.89</p>
              <span className="text-white/50 text-sm">Purulia, West Bengal (2010 - 2021)</span>
            </div>
          </motion.div>

          {/* Achievements Span 3 */}
          <motion.div 
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            className="glass border border-white/10 rounded-[2rem] p-10 lg:col-span-3 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-8">Achievements</h3>
            <ul ref={achievementsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-center gap-4 text-white/70" style={{ opacity: 0 }}>
                <Trophy className="text-accent-purple shrink-0" />
                <span>3rd in Hack UEM 3.0 (in-house hackathon, UEM Jaipur)</span>
              </li>
              <li className="flex items-center gap-4 text-white/70" style={{ opacity: 0 }}>
                <Medal className="text-accent-purple shrink-0" />
                <span>26th in AceHack 4.0 (National Level Hackathon, UEM Jaipur)</span>
              </li>
              <li className="flex items-center gap-4 text-white/70" style={{ opacity: 0 }}>
                <Award className="text-accent-purple shrink-0" />
                <span>3rd in MOOD I 2025 Multicity Jaipur</span>
              </li>
              <li className="flex items-center gap-4 text-white/70" style={{ opacity: 0 }}>
                <Star className="text-accent-purple shrink-0" />
                <span>Semi Finalist in MOOD I 2025 Mantra (Battle of Bands)</span>
              </li>
              <li className="flex items-center gap-4 text-white/70" style={{ opacity: 0 }}>
                <Users className="text-accent-purple shrink-0" />
                <span>Co-Founder of Vectorix Community</span>
              </li>
              <li className="flex items-center gap-4 text-white/70" style={{ opacity: 0 }}>
                <Mic className="text-accent-purple shrink-0" />
                <span>Part of The Speech Society (TSS)</span>
              </li>
              <li className="flex items-center gap-4 text-white/70" style={{ opacity: 0 }}>
                <Plane className="text-accent-purple shrink-0" />
                <span>Part of Aero-modelling Club</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceEducation;
