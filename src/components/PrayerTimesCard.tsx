import React from 'react';
import { Clock, Sun, Moon, Sunrise, Sunset } from 'lucide-react';
import { PrayerTime } from '../types';
import { motion } from 'motion/react';

interface Props {
  times: PrayerTime;
  cityName: string;
}

export const PrayerTimesCard: React.FC<Props> = ({ times, cityName }) => {
  const schedule = [
    { name: 'Imsak', time: times.imsak, icon: Clock, color: 'text-stone-500' },
    { name: 'Subuh', time: times.subuh, icon: Sunrise, color: 'text-blue-600' },
    { name: 'Terbit', time: times.terbit, icon: Sun, color: 'text-orange-400' },
    { name: 'Dzuhur', time: times.dzuhur, icon: Sun, color: 'text-yellow-600' },
    { name: 'Ashar', time: times.ashar, icon: Sun, color: 'text-amber-700' },
    { name: 'Maghrib', time: times.maghrib, icon: Sunset, color: 'text-orange-600' },
    { name: 'Isya', time: times.isya, icon: Moon, color: 'text-indigo-800' },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100">Jadwal Sholat</h2>
          <p className="text-stone-500 dark:text-stone-400 flex items-center gap-1 mt-1">
            <Clock className="w-4 h-4" /> {times.tanggal} • {cityName}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {schedule.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white dark:bg-stone-800 p-4 rounded-2xl border border-stone-100 dark:border-stone-700 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <item.icon className={`w-6 h-6 mb-2 ${item.color}`} />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
              {item.name}
            </span>
            <span className="text-xl font-bold text-stone-800 dark:text-stone-100">
              {item.time}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
