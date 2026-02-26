import React, { useState, useEffect } from 'react';
import { prayerService } from '../services/api';
import { City, PrayerTime } from '../types';
import { Calendar, Loader2, ChevronLeft, ChevronRight, BarChart3, Table } from 'lucide-react';
import { ImsakiyahChart } from './ImsakiyahChart';

interface Props {
  city: City;
}

export const MonthlySchedule: React.FC<Props> = ({ city }) => {
  const [schedule, setSchedule] = useState<PrayerTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'table' | 'chart'>('table');

  useEffect(() => {
    const fetchMonthly = async () => {
      setLoading(true);
      try {
        const data = await prayerService.getMonthlySchedule(
          city.id,
          date.getFullYear(),
          date.getMonth() + 1
        );
        setSchedule(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMonthly();
  }, [city, date]);

  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const changeMonth = (offset: number) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + offset);
    setDate(newDate);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
          <Calendar className="text-emerald-600" /> Jadwal Bulanan
        </h2>
        
        <div className="flex items-center gap-2">
          <div className="flex bg-stone-100 dark:bg-stone-800 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'table' ? 'bg-white dark:bg-stone-700 shadow-sm text-emerald-600 dark:text-emerald-400' : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'}`}
              title="Tampilan Tabel"
            >
              <Table className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('chart')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'chart' ? 'bg-white dark:bg-stone-700 shadow-sm text-emerald-600 dark:text-emerald-400' : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'}`}
              title="Tampilan Grafik"
            >
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-xl px-3 py-1 shadow-sm">
            <button onClick={() => changeMonth(-1)} className="p-1 hover:text-emerald-600 transition-colors text-stone-600 dark:text-stone-400">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-bold text-stone-700 dark:text-stone-200 min-w-[120px] text-center">
              {monthNames[date.getMonth()]} {date.getFullYear()}
            </span>
            <button onClick={() => changeMonth(1)} className="p-1 hover:text-emerald-600 transition-colors text-stone-600 dark:text-stone-400">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm p-20 text-center">
          <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mx-auto mb-2" />
          <p className="text-stone-500 dark:text-stone-400">Memuat jadwal bulanan...</p>
        </div>
      ) : viewMode === 'chart' ? (
        <ImsakiyahChart schedule={schedule} />
      ) : (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 text-xs font-bold uppercase tracking-wider">
                  <th className="px-4 py-3 border-b border-emerald-100 dark:border-emerald-900/50">Tanggal</th>
                  <th className="px-4 py-3 border-b border-emerald-100 dark:border-emerald-900/50">Imsak</th>
                  <th className="px-4 py-3 border-b border-emerald-100 dark:border-emerald-900/50">Subuh</th>
                  <th className="px-4 py-3 border-b border-emerald-100 dark:border-emerald-900/50">Dzuhur</th>
                  <th className="px-4 py-3 border-b border-emerald-100 dark:border-emerald-900/50">Ashar</th>
                  <th className="px-4 py-3 border-b border-emerald-100 dark:border-emerald-900/50">Maghrib</th>
                  <th className="px-4 py-3 border-b border-emerald-100 dark:border-emerald-900/50">Isya</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {schedule.map((day, idx) => {
                  const isToday = new Date().getDate() === idx + 1 && 
                                  new Date().getMonth() === date.getMonth() && 
                                  new Date().getFullYear() === date.getFullYear();
                  return (
                    <tr key={idx} className={`${isToday ? 'bg-emerald-50/50 dark:bg-emerald-950/20 font-bold' : 'hover:bg-stone-50 dark:hover:bg-stone-800/50'} transition-colors border-b border-stone-50 dark:border-stone-800 last:border-0`}>
                      <td className="px-4 py-3 text-stone-600 dark:text-stone-400">{day.tanggal.split(',')[0]}</td>
                      <td className="px-4 py-3 text-stone-800 dark:text-stone-200">{day.imsak}</td>
                      <td className="px-4 py-3 text-stone-800 dark:text-stone-200">{day.subuh}</td>
                      <td className="px-4 py-3 text-stone-800 dark:text-stone-200">{day.dzuhur}</td>
                      <td className="px-4 py-3 text-stone-800 dark:text-stone-200">{day.ashar}</td>
                      <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400 font-semibold">{day.maghrib}</td>
                      <td className="px-4 py-3 text-stone-800 dark:text-stone-200">{day.isya}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
