import React from 'react';
import { Zap, Clock, Cpu, Search, ShieldCheck } from 'lucide-react';

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <span className="text-amber-500 font-mono text-sm tracking-wider uppercase mb-2 block">Інженерний підхід</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Не просто ремонт.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto md:mx-0">Ми відмовились від компромісів. Використовуємо краще обладнання та деталі, щоб ваша техніка працювала як нова.</p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          
          {/* Speed (Large) */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl bg-zinc-900 border border-white/5 p-8 flex flex-col justify-between overflow-hidden group hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <Zap className="w-48 h-48 text-amber-500" />
            </div>
            <div>
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:bg-amber-500/10 transition-colors">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-3">Максимальна швидкість</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm">
                Більшість ремонтів виконуємо в день звернення. Заміна АКБ чи дисплея займає від 30 хвилин. Ви не залишитесь без зв'язку надовго.
              </p>
            </div>
            <div className="mt-8 z-10">
              <span className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span>Експрес-сервіс</span>
              </span>
            </div>
          </div>

          {/* Quality (Small) */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-3xl bg-zinc-900 border border-white/5 p-6 flex flex-col justify-between group hover:border-amber-500/30 transition-all hover:shadow-xl hover:shadow-amber-500/5">
            <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center border border-white/5 group-hover:bg-amber-500/10 transition-colors">
              <Cpu className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-2">Оригінальні деталі</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Встановлюємо лише перевірені комплектуючі вищого класу.</p>
            </div>
          </div>

          {/* Transparency (Small) */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-3xl bg-zinc-900 border border-white/5 p-6 flex flex-col justify-between group hover:border-amber-500/30 transition-all hover:shadow-xl hover:shadow-amber-500/5">
            <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center border border-white/5 group-hover:bg-amber-500/10 transition-colors">
              <Search className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-2">Прозора ціна</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Вартість фіксується після діагностики та не змінюється.</p>
            </div>
          </div>

          {/* Guarantee (Medium Horizontal) */}
          <div className="md:col-span-2 md:row-span-1 relative rounded-3xl bg-amber-500 p-8 flex flex-col justify-center overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:16px_16px] opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-zinc-950 mb-1">Реальна Гарантія</h3>
                <p className="text-zinc-800 text-sm font-medium leading-relaxed">Ми відповідаємо за свою роботу. На кожну послугу надається офіційна гарантія сервісного центру.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
