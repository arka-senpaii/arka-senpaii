import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="py-32 text-center border-t border-white/5 mt-20 relative">
      <div className="absolute left-1/2 -top-[1px] -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent-purple to-transparent opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold mb-16 tracking-tighter">Let's connect</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-24">
          <a href="mailto:arkamahajan@gmail.com" className="group flex items-center gap-4 text-xl md:text-2xl text-white/80 hover:text-white transition-colors">
            <Mail className="group-hover:text-accent-purple transition-colors" />
            <span className="relative overflow-hidden">
              arkamahajan@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full" />
            </span>
          </a>

          <a href="tel:+917047387377" className="group flex items-center gap-4 text-xl md:text-2xl text-white/80 hover:text-white transition-colors">
            <Phone className="group-hover:text-accent-purple transition-colors" />
            <span className="relative overflow-hidden">
              +91 7047387377
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        </div>

        <p className="text-white/40 text-sm tracking-widest uppercase">
          © 2026 Arka Mahajan. Built with React & Three.js.
        </p>
      </motion.div>
    </footer>
  );
};

export default Contact;
