import React from 'react';
import { ArrowRight, Terminal, CheckCircle2, Zap, Cpu, BatteryCharging, MemoryStick } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center mt-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Професійний сервісний центр</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.1] mb-6">
            Відновлюємо <br />
            <span className="text-amber-500 relative inline-block">
              техніку
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C60.5 -1.5 145.5 -1.5 198 6" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> 
            {' '}до ідеалу.
          </h1>
          
          <p className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed">
            Преміальний ремонт смартфонів, MacBook та ноутбуків у Мукачеві. 
            Точна діагностика, оригінальні запчастини та безумовна гарантія на кожну послугу.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#cta" className="inline-flex justify-center items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <span>Залишити заявку</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="inline-flex justify-center items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white font-display font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-full transition-colors">
              <Terminal className="w-4 h-4 text-zinc-400" />
              <span>Дивитись прайс</span>
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 text-sm font-mono text-zinc-500">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              <span>Гарантія якості</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Ремонт від 30 хв</span>
            </div>
          </div>
        </div>
        
        {/* Abstract Tech Illustration */}
        <div className="hidden lg:flex justify-end relative perspective-[1000px]">
          <div className="w-[500px] h-[600px] relative transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/80 to-zinc-800/20 backdrop-blur-xl border border-white/10 rounded-[40px] transform -rotate-12 p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="font-mono text-xs text-zinc-500">diag_sys_v2.4.1</span>
              </div>
              
              <div className="flex-1 py-8 relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-500 shadow-[0_0_15px_#F59E0B] animate-[scan_3s_ease-in-out_infinite] z-20"></div>
                
                <div className="space-y-4">
                  <div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
                  <div className="h-2 w-1/2 bg-zinc-800 rounded"></div>
                  <div className="h-2 w-5/6 bg-zinc-800 rounded"></div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <Cpu className="w-8 h-8 text-amber-500/50 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <BatteryCharging className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group col-span-2">
                      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <MemoryStick className="w-8 h-8 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="font-mono text-xs text-amber-500">
                &gt; SYSTEM OPTIMIZED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
