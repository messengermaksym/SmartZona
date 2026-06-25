import React from 'react';
import { Lock } from 'lucide-react';

export default function Cta() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-zinc-950 border-t border-white/5">
      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Потрібна <span className="text-amber-500">експрес-діагностика?</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
          Залиште заявку, і майстер зв'яжеться з вами за 5 хвилин для попередньої оцінки вартості та термінів ремонту.
        </p>

        <form className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-end">
          
          <div className="relative w-full text-left">
            <input type="text" id="name" required placeholder=" " 
              className="input-floating peer w-full bg-transparent border-b border-zinc-700 text-white pb-2 pt-5 focus:outline-none focus:border-amber-500 transition-colors" />
            <label htmlFor="name" className="absolute left-0 top-5 text-zinc-500 text-base transition-all pointer-events-none origin-left">Ваше ім'я</label>
          </div>
          
          <div className="relative w-full text-left">
            <input type="tel" id="phone" required placeholder=" " 
              className="input-floating peer w-full bg-transparent border-b border-zinc-700 text-white pb-2 pt-5 focus:outline-none focus:border-amber-500 transition-colors" />
            <label htmlFor="phone" className="absolute left-0 top-5 text-zinc-500 text-base transition-all pointer-events-none origin-left">Номер телефону</label>
          </div>

          <button type="submit" 
            className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wide px-8 py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] shrink-0 mt-4 md:mt-0">
            Надіслати
          </button>
        </form>
        
        <div className="mt-8 flex justify-center items-center text-zinc-500 text-xs font-mono">
          <Lock className="w-3 h-3 mr-2" />
          Ваші дані захищені. Ми не надсилаємо спам.
        </div>
      </div>
    </section>
  );
}
