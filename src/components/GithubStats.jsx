import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

// Data for the 6-point Hexagon Skill Analysis
const skillData = [
  { subject: 'IoT & Hardware', score: 95, fullMark: 100 },
  { subject: 'Machine Learning', score: 85, fullMark: 100 },
  { subject: 'Data Analysis', score: 80, fullMark: 100 },
  { subject: 'Programming', score: 90, fullMark: 100 },
  { subject: 'Tools & DBs', score: 85, fullMark: 100 },
  { subject: 'Soft Skills', score: 75, fullMark: 100 },
];

const GithubStats = () => {
  return (
    <div className="w-full mt-24">
      <h3 className="text-2xl font-bold mb-8 text-white">Analytics & Skills Overview</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Live GitHub Stats (Guaranteed Accurate Commits & Repos) */}
        <div className="glass border border-white/10 rounded-3xl p-6 lg:p-10 flex flex-col justify-center items-center hover:border-white/20 transition-all duration-300">
          <h4 className="text-white/80 mb-6 font-medium w-full text-left">Live GitHub Statistics</h4>
          <img 
            src="https://github-readme-stats-sigma-five.vercel.app/api?username=arka-senpaii&show_icons=true&theme=transparent&hide_border=true&title_color=A78BFA&text_color=ffffff&icon_color=A78BFA&bg_color=00000000&include_all_commits=true" 
            alt="Arka's GitHub Stats" 
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Radar/Hexagon Skill Chart */}
        <div className="glass border border-white/10 rounded-3xl p-6 lg:p-10 flex flex-col items-center justify-center hover:border-white/20 transition-all duration-300 min-h-[400px]">
          <h4 className="text-white/80 mb-6 font-medium w-full text-left">Core Capabilities</h4>
          <div className="w-full h-full flex-1 min-h-[300px] relative">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid stroke="rgba(255,255,255,0.2)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 13 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#A78BFA' }}
                />
                <Radar name="Proficiency" dataKey="score" stroke="#A78BFA" strokeWidth={2} fill="#A78BFA" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
