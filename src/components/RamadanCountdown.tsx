import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { Moon, Star } from 'lucide-react';

export const RamadanCountdown: React.FC = () => {
  // Ramadan 1447 H started around Feb 18, 2026
  const ramadanDate = new Date('2026-02-18T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now < ramadanDate) {
        setTimeLeft({
          days: differenceInDays(ramadanDate, now),
          hours: differenceInHours(ramadanDate, now) % 24,
          minutes: differenceInMinutes(ramadanDate, now) % 60,
          seconds: differenceInSeconds(ramadanDate, now) % 60
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isRamadan = new Date() >= ramadanDate;

  if (isRamadan) {
    return (
      <div className="bg-emerald-900 dark:bg-emerald-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center">
          <Moon className="w-12 h-12 text-emerald-400 mb-4" />
          <h2 className="text-3xl font-bold mb-2">Ramadan Mubarak!</h2>
          <p className="text-emerald-100 dark:text-emerald-300">Selamat menunaikan ibadah puasa 1447 H.</p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <Star className="w-24 h-24" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-emerald-900 dark:bg-emerald-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-800 dark:bg-emerald-900 rounded-lg">
            <Moon className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-xl font-bold">Menuju Ramadan</h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Hari', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Menit', value: timeLeft.minutes },
            { label: 'Detik', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="bg-emerald-800/50 dark:bg-emerald-900/50 backdrop-blur-sm p-4 rounded-2xl text-center">
              <div className="text-3xl font-bold mb-1">{item.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-emerald-300 dark:text-emerald-400 font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-800 dark:bg-emerald-900 rounded-full blur-3xl opacity-50" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-700 dark:bg-emerald-800 rounded-full blur-3xl opacity-30" />
    </div>
  );
};
