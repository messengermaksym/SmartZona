import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      initial: "K",
      text: "\"Ремонтував у цьому сервісі свій MacBook — потрібно було замінити батарею та SSD. Роботу виконали швидко, якісно і без зайвих затримок. Майстри все пояснили, порадили оптимальні комплектуючі та зробили ремонт у домовлений термін.\"",
      date: "3 міс. тому"
    },
    {
      initial: "G",
      text: "\"Дуже задоволений сервісом СмартЗона - ремонт/сервіс телефонів 👍 Майстри реально знають свою справу — швидко знайшли проблему та якісно все полагодили. Приємно здивували ціни та ставлення до клієнта.\"",
      date: "1 міс. тому"
    },
    {
      initial: "A",
      text: "\"Звернулась в даний сервіс щоб замінити батарею на телефон, була приємно здивована швидкістю виконання та якістю. Ще й на додачу придбала новенький чохол для телефону. Ще не раз за потреби звернусь!\"",
      date: "1 рік тому"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-zinc-950 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900/20 via-zinc-950 to-zinc-950 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Відгуки клієнтів</h2>
            <p className="text-zinc-400 font-mono text-sm uppercase tracking-wider">Реальні історії з Google Maps</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-2 bg-zinc-900 border border-white/10 px-4 py-2 rounded-full">
            <div className="flex space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-white font-bold text-sm ml-2">5.0</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6">
          {reviews.map((review, index) => (
            <div key={index} className="snap-center w-[85vw] md:w-[400px] shrink-0 bg-zinc-900 border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all">
              <div className="mb-8">
                <div className="flex space-x-1 text-amber-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-amber-500 font-bold font-display">{review.initial}</div>
                  <span className="text-white text-sm font-medium">Клієнт Google</span>
                </div>
                <span className="text-zinc-500 text-xs font-mono">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
