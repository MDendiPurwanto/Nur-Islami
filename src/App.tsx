import React, { useState, useEffect } from 'react';
import { LocationSelector } from './components/LocationSelector';
import { PrayerTimesCard } from './components/PrayerTimesCard';
import { QuranReader } from './components/QuranReader';
import { RamadanCountdown } from './components/RamadanCountdown';
import { MonthlySchedule } from './components/MonthlySchedule';
import { TahlilPage } from './components/TahlilPage';
import { QiblaCompass } from './components/QiblaCompass';
import { prayerService } from './services/api';
import { City, PrayerTime } from './types';
import { Moon, Book, Clock, Calendar, Info, Loader2, BookOpen, Navigation, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });
  const [selectedCity, setSelectedCity] = useState<City>(() => {
    const saved = localStorage.getItem('selectedCity');
    return saved ? JSON.parse(saved) : { id: '1301', lokasi: 'KOTA JAKARTA' };
  });
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'quran' | 'imsakiyah' | 'tahlil' | 'compass'>('home');

  useEffect(() => {
    localStorage.setItem('selectedCity', JSON.stringify(selectedCity));
  }, [selectedCity]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      setLoading(true);
      try {
        const now = new Date();
        const data = await prayerService.getPrayerTimes(
          selectedCity.id,
          now.getFullYear(),
          now.getMonth() + 1,
          now.getDate()
        );
        setPrayerTimes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, [selectedCity]);

  return (
    <div className="min-h-screen bg-stone-50 pb-24 md:pb-8">
      {/* Header */}
      <header className="bg-white dark:bg-stone-900 border-b border-stone-100 dark:border-stone-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Moon className="text-white w-5 h-5" />
            </div>
            <h1 className="font-bold text-xl tracking-tight text-stone-800 hidden sm:block">Nur Islami</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-4">
            <LocationSelector onSelect={setSelectedCity} currentCity={selectedCity} />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="h-6 w-px bg-stone-200 dark:bg-stone-700 mx-2" />
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 font-medium transition-colors ${activeTab === 'home' ? 'text-emerald-600' : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'}`}
            >
              <Clock className="w-4 h-4" /> Beranda
            </button>
            <button 
              onClick={() => setActiveTab('quran')}
              className={`flex items-center gap-2 font-medium transition-colors ${activeTab === 'quran' ? 'text-emerald-600' : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'}`}
            >
              <Book className="w-4 h-4" /> Al-Quran
            </button>
            <button 
              onClick={() => setActiveTab('imsakiyah')}
              className={`flex items-center gap-2 font-medium transition-colors ${activeTab === 'imsakiyah' ? 'text-emerald-600' : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'}`}
            >
              <Calendar className="w-4 h-4" /> Jadwal Sholat
            </button>
            <button 
              onClick={() => setActiveTab('tahlil')}
              className={`flex items-center gap-2 font-medium transition-colors ${activeTab === 'tahlil' ? 'text-emerald-600' : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'}`}
            >
              <BookOpen className="w-4 h-4" /> Tahlil
            </button>
            <button 
              onClick={() => setActiveTab('compass')}
              className={`flex items-center gap-2 font-medium transition-colors ${activeTab === 'compass' ? 'text-emerald-600' : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'}`}
            >
              <Navigation className="w-4 h-4" /> Kiblat
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <RamadanCountdown />
                  
                  <div className="bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm">
                    {loading ? (
                      <div className="flex flex-col items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mb-4" />
                        <p className="text-stone-500 dark:text-stone-400">Memperbarui jadwal...</p>
                      </div>
                    ) : prayerTimes ? (
                      <PrayerTimesCard times={prayerTimes} cityName={selectedCity.lokasi} />
                    ) : (
                      <div className="text-center py-12 text-stone-500 dark:text-stone-400">
                        Gagal memuat jadwal sholat. Silakan coba lagi.
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm">
                    <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
                      <Info className="w-4 h-4 text-emerald-600" /> Mutiara Hikmah
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Perbanyak sedekah dan berbuat baik.",
                        "Jaga sholat lima waktu tepat pada waktunya.",
                        "Luangkan waktu untuk membaca Al-Quran setiap hari.",
                        "Berdoa dan berdzikir di waktu pagi dan petang."
                      ].map((tip, i) => (
                        <div key={i} className="flex gap-3 text-sm text-stone-600 dark:text-stone-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <p>{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-3xl border border-emerald-100 dark:border-emerald-900/50">
                    <h3 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Al-Quran Digital</h3>
                    <p className="text-emerald-700 dark:text-emerald-400 text-sm mb-4">Baca dan pelajari Al-Quran kapan saja, di mana saja.</p>
                    <button 
                      onClick={() => setActiveTab('quran')}
                      className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 dark:shadow-none"
                    >
                      Buka Al-Quran
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'quran' && (
            <motion.div
              key="quran"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <QuranReader />
            </motion.div>
          )}

          {activeTab === 'imsakiyah' && (
            <motion.div
              key="imsakiyah"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <MonthlySchedule city={selectedCity} />
            </motion.div>
          )}

          {activeTab === 'tahlil' && (
            <motion.div
              key="tahlil"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <TahlilPage />
            </motion.div>
          )}

          {activeTab === 'compass' && (
            <motion.div
              key="compass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <QiblaCompass />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 md:hidden z-50">
        <div className="flex justify-around items-center h-16">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-emerald-600' : 'text-stone-400 dark:text-stone-500'}`}
          >
            <Clock className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase">Beranda</span>
          </button>
          <button 
            onClick={() => setActiveTab('quran')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'quran' ? 'text-emerald-600' : 'text-stone-400 dark:text-stone-500'}`}
          >
            <Book className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase">Al-Quran</span>
          </button>
          <button 
            onClick={() => setActiveTab('imsakiyah')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'imsakiyah' ? 'text-emerald-600' : 'text-stone-400 dark:text-stone-500'}`}
          >
            <Calendar className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase">Jadwal</span>
          </button>
          <button 
            onClick={() => setActiveTab('tahlil')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'tahlil' ? 'text-emerald-600' : 'text-stone-400 dark:text-stone-500'}`}
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase">Tahlil</span>
          </button>
          <button 
            onClick={() => setActiveTab('compass')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'compass' ? 'text-emerald-600' : 'text-stone-400 dark:text-stone-500'}`}
          >
            <Navigation className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase">Kiblat</span>
          </button>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="flex flex-col items-center gap-1 text-stone-400 dark:text-stone-500"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            <span className="text-[10px] font-bold uppercase">Mode</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
