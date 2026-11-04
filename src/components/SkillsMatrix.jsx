import React, { useState } from 'react';
import { Cpu, Terminal, Sparkles, Check, Copy } from 'lucide-react';
import { skillsInventory } from '../data';

export default function SkillsMatrix() {
  const [copiedSkill, setCopiedSkill] = useState(null);

  const handleCopy = (skill) => {
    navigator.clipboard?.writeText(skill);
    setCopiedSkill(skill);
    setTimeout(() => setCopiedSkill(null), 1500);
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-wide uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Multiverse Arsenal • Tech Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Weapons of Choice
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Tools, languages, enterprise agent platforms, and cloud ecosystems powering the Rohanverse.
          </p>
        </div>

        {/* Matrix Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsInventory.map((block) => (
            <div
              key={block.category}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group hover:shadow-xl hover:shadow-purple-950/30"
            >
              <div>
                <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-white/10">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {block.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {block.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => handleCopy(skill)}
                      title="Click to copy skill"
                      className="group/item relative px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-xs font-mono text-slate-300 hover:text-white border border-white/5 hover:border-cyan-400/50 transition-all duration-200 flex items-center space-x-1.5"
                    >
                      <span>{skill}</span>
                      {copiedSkill === skill ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 group-hover/item:bg-cyan-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>{block.skills.length} Capabilities</span>
                <span className="text-cyan-400/80">Active In Production</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

