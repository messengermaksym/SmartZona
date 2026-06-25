import React from 'react';
import { Cpu, Phone } from 'lucide-react';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <Cpu className="text-amber-500 w-8 h-8 group-hover:animate-pulse" />
          <span className="text-2xl font-bold font-display tracking-tight text-white uppercase">
            Смарт<span className="text-amber-500">Зона</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
          <a href="#services" className="hover:text-amber-500 transition-colors">Прайс</a>
          <a href="#advantages" className="hover:text-amber-500 transition-colors">Переваги</a>
          <a href="#reviews" className="hover:text-amber-500 transition-colors">Відгуки</a>
        </div>

        <div className="flex items-center space-x-6">
          <a href="tel:+380993652643" className="hidden sm:flex items-center space-x-2 text-white font-mono hover:text-amber-500 transition-colors">
            <Phone className="w-4 h-4 text-amber-500" />
            <span>+38 (099) 365-26-43</span>
          </a>
          <a href="#cta" className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wide text-xs px-6 py-3 rounded-full transition-all hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]">
            Викликати майстра
          </a>
        </div>
      </div>
    </nav>
  );
}
