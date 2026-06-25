import React from 'react';
import { Cpu, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Cpu className="text-amber-500 w-6 h-6" />
              <span className="text-xl font-bold font-display tracking-tight text-white uppercase">
                Смарт<span className="text-amber-500">Зона</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
              Ремонт цифрової техніки будь-якої складності. Тільки перевірені майстри, професійне обладнання та повна прозорість для клієнта.
            </p>
            <div className="flex space-x-4">
              <a href="https://maps.app.goo.gl/RqwuvJsDcmcJKPsF9" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors group">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="tel:+380993652643" className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Контакти</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                <span className="leading-relaxed">м. Мукачево, Закарпатська область, Україна</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+380993652643" className="hover:text-amber-500 transition-colors">+38 (099) 365-26-43</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:maksmasenditch@gmail.com" className="hover:text-amber-500 transition-colors">maksmasenditch@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Графік роботи</h4>
            <ul className="space-y-3 text-sm font-mono text-zinc-400">
              <li className="flex justify-between border-b border-white/5 pb-3">
                <span>Пн - Пт</span>
                <span className="text-white">09:00 - 19:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-3">
                <span>Субота</span>
                <span className="text-white">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between pb-3 text-zinc-500">
                <span>Неділя</span>
                <span>Вихідний</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-xs text-zinc-500 font-mono">
          <p>&copy; {new Date().getFullYear()} СмартЗона. Всі права захищені.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300 transition-colors">Політика конфіденційності</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Умови використання</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
