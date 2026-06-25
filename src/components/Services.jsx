import React from 'react';
import { Smartphone, Laptop, Info } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-mono text-sm tracking-wider uppercase mb-2 block">Diagnostic_Data</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Прайс-лист на послуги</h2>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-zinc-950 px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="font-mono text-xs text-zinc-500">services_list.sh</div>
            <div className="w-9"></div> {/* Spacer for balance */}
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 grid md:grid-cols-2 gap-12 font-mono text-sm">
            
            {/* Phones */}
            <div>
              <div className="flex items-center space-x-2 text-amber-500 mb-6 border-b border-white/10 pb-4">
                <Smartphone className="w-5 h-5" />
                <h3 className="text-lg font-bold font-display uppercase tracking-wider text-white">Смартфони</h3>
              </div>
              
              <div className="space-y-1">
                {[
                  { name: "Заміна дисплея", price: "від 800 ₴" },
                  { name: "Заміна АКБ", price: "від 450 ₴" },
                  { name: "Ремонт гнізда зарядки", price: "від 400 ₴" },
                  { name: "Відновлення після вологи", price: "від 600 ₴" },
                  { name: "Пайка мікросхем", price: "від 900 ₴" }
                ].map((item, idx) => (
                  <div key={idx} className="group flex justify-between items-end border-b border-white/5 py-3 hover:bg-white/5 transition-colors px-3 -mx-3 rounded-lg">
                    <span className="text-zinc-300 pr-4">{item.name}</span>
                    <span className="text-amber-500 whitespace-nowrap font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Laptops */}
            <div>
              <div className="flex items-center space-x-2 text-amber-500 mb-6 border-b border-white/10 pb-4">
                <Laptop className="w-5 h-5" />
                <h3 className="text-lg font-bold font-display uppercase tracking-wider text-white">Ноутбуки (Mac/PC)</h3>
              </div>
              
              <div className="space-y-1">
                {[
                  { name: "Заміна батареї", price: "від 950 ₴" },
                  { name: "Встановлення SSD", price: "від 500 ₴" },
                  { name: "Чистка + термопаста", price: "450 ₴" },
                  { name: "Заміна матриці", price: "від 1200 ₴" },
                  { name: "Відновлення корпусу", price: "від 700 ₴" }
                ].map((item, idx) => (
                  <div key={idx} className="group flex justify-between items-end border-b border-white/5 py-3 hover:bg-white/5 transition-colors px-3 -mx-3 rounded-lg">
                    <span className="text-zinc-300 pr-4">{item.name}</span>
                    <span className="text-amber-500 whitespace-nowrap font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        
        <div className="mt-8 flex justify-center items-center text-zinc-500 text-sm font-mono">
          <Info className="w-4 h-4 mr-2" />
          Точна вартість встановлюється майстром після безкоштовної діагностики.
        </div>
      </div>
    </section>
  );
}
