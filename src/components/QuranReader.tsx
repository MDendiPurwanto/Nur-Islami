import React, { useState, useEffect, useRef } from 'react';
import { quranService } from '../services/api';
import { QuranSurah, SurahDetail } from '../types';
import { Book, ChevronLeft, Loader2, Search, Play, Pause, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const QuranReader: React.FC = () => {
  const [surahs, setSurahs] = useState<QuranSurah[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<SurahDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const data = await quranService.getSurahList();
        setSurahs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurahs();
  }, []);

  // Reset audio when surah changes or component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setIsPlaying(false);
    };
  }, [selectedSurah]);

  const handleSurahClick = async (nomor: number) => {
    setLoadingDetail(true);
    try {
      const detail = await quranService.getSurahDetail(nomor);
      setSelectedSurah(detail);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingDetail(false);
    }
  };

  const toggleAudio = () => {
    if (!selectedSurah || !selectedSurah.audioFull) return;

    if (!audioRef.current) {
      // Prioritize Misyari Rasyid (05) or fallback to first available
      const audioUrl = selectedSurah.audioFull['05'] || Object.values(selectedSurah.audioFull)[0];
      if (audioUrl) {
        audioRef.current = new Audio(audioUrl);
        audioRef.current.addEventListener('ended', () => setIsPlaying(false));
      }
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const filteredSurahs = surahs.filter(s => 
    s.namaLatin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.arti.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-10 h-10 text-emerald-600 animate-spin mb-4" />
        <p className="text-stone-500 dark:text-stone-400">Memuat Al-Quran...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!selectedSurah ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-3">
                <Book className="text-emerald-600" /> Al-Quran Digital
              </h2>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 dark:text-stone-500" />
                <input
                  type="text"
                  placeholder="Cari Surah..."
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSurahs.map((surah) => (
                <motion.button
                  key={surah.nomor}
                  whileHover={{ y: -4 }}
                  onClick={() => handleSurahClick(surah.nomor)}
                  className="bg-white dark:bg-stone-900 p-5 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-all text-left flex flex-col gap-4 group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      {surah.nomor}
                    </div>
                    <div className="arabic-text text-2xl text-emerald-700 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                      {surah.nama}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {surah.namaLatin}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold px-2 py-1 bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 rounded-md uppercase tracking-wider">
                        {surah.tempatTurun}
                      </span>
                      <span className="text-xs text-stone-400 dark:text-stone-500 font-medium">
                        {surah.jumlahAyat} Ayat
                      </span>
                    </div>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 line-clamp-1 italic">
                      {surah.arti}
                    </p>
                  </div>

                  {/* Decorative background element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-50 dark:bg-emerald-900/20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-2xl" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm overflow-hidden"
          >
            <div className="p-6 border-b border-stone-100 dark:border-stone-800 bg-emerald-50/50 dark:bg-emerald-950/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button
                  onClick={() => setSelectedSurah(null)}
                  className="p-2 hover:bg-white dark:hover:bg-stone-800 rounded-full transition-colors text-stone-600 dark:text-stone-400"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">{selectedSurah.namaLatin}</h2>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{selectedSurah.arti} • {selectedSurah.tempatTurun}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <button
                  onClick={toggleAudio}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                    isPlaying 
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400' 
                      : 'bg-emerald-600 text-white hover:bg-emerald-700 dark:hover:bg-emerald-500'
                  }`}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isPlaying ? 'Jeda Murottal' : 'Putar Murottal'}
                </button>
                <div className="arabic-text text-3xl text-emerald-700 dark:text-emerald-400">
                  {selectedSurah.nama}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 space-y-10">
              {selectedSurah.nomor !== 1 && selectedSurah.nomor !== 9 && (
                <div className="text-center py-8 border-b border-stone-50 dark:border-stone-800">
                  <p className="arabic-text text-4xl text-stone-800 dark:text-stone-200 mb-4">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
                  <p className="text-stone-500 dark:text-stone-400 italic text-sm">Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang</p>
                </div>
              )}
              
              {selectedSurah.ayat.map((ayat) => (
                <div key={ayat.nomorAyat} className="group">
                  <div className="flex flex-col items-end gap-6 mb-4">
                    <div className="flex items-start gap-4 w-full">
                       <div className="w-8 h-8 rounded-full border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-xs font-bold text-emerald-700 dark:text-emerald-400 shrink-0 mt-1">
                        {ayat.nomorAyat}
                      </div>
                      <p className="arabic-text text-3xl md:text-4xl leading-[2.5] text-stone-800 dark:text-stone-200 text-right flex-1">
                        {ayat.teksArab}
                      </p>
                    </div>
                  </div>
                  <div className="pl-12">
                    <p className="text-emerald-700 dark:text-emerald-400 text-sm mb-2 font-medium">{ayat.teksLatin}</p>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{ayat.teksIndonesia}</p>
                  </div>
                  <div className="h-px bg-stone-50 dark:bg-stone-800 w-full mt-10" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {loadingDetail && (
        <div className="fixed inset-0 bg-black/10 dark:bg-black/40 backdrop-blur-[2px] z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-stone-100 dark:border-stone-800">
            <Loader2 className="w-6 h-6 text-emerald-600 animate-spin" />
            <p className="font-medium text-stone-700 dark:text-stone-200">Memuat Surah...</p>
          </div>
        </div>
      )}
    </div>
  );
};
