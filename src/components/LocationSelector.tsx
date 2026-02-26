import React, { useState, useEffect } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';
import { prayerService } from '../services/api';
import { City } from '../types';

interface Props {
  onSelect: (city: City) => void;
  currentCity?: City;
}

export const LocationSelector: React.FC<Props> = ({ onSelect, currentCity }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length >= 3) {
        setLoading(true);
        try {
          const cities = await prayerService.searchCity(query);
          setResults(cities);
          setShowDropdown(true);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          // Reverse geocoding using Nominatim (OpenStreetMap)
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          
          // Extract city name (prioritize city, then town, then county)
          const address = data.address;
          const cityName = address.city || address.town || address.county || address.state_district || '';
          
          // Clean up city name (remove "Kota" or "Kabupaten" if present for better search)
          const cleanCityName = cityName.replace(/^(Kota|Kabupaten)\s+/i, '');

          if (cleanCityName) {
            setQuery(cleanCityName); // Set query to show what we found
            const cities = await prayerService.searchCity(cleanCityName);
            
            if (cities && cities.length > 0) {
              // Automatically select the first result
              onSelect(cities[0]);
              setResults([]);
              setShowDropdown(false);
            } else {
              alert(`Lokasi ditemukan (${cleanCityName}), namun tidak ada jadwal sholat yang cocok.`);
            }
          } else {
            alert('Tidak dapat mendeteksi nama kota dari lokasi Anda.');
          }
        } catch (error) {
          console.error('Error detecting location:', error);
          alert('Gagal mendeteksi lokasi. Pastikan koneksi internet lancar.');
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        setLoading(false);
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert('Izin lokasi ditolak. Mohon izinkan akses lokasi untuk fitur ini.');
            break;
          case error.POSITION_UNAVAILABLE:
            alert('Informasi lokasi tidak tersedia.');
            break;
          case error.TIMEOUT:
            alert('Waktu permintaan lokasi habis.');
            break;
          default:
            alert('Terjadi kesalahan saat mendeteksi lokasi.');
        }
      }
    );
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-stone-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-10 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500"
            placeholder="Cari Kota (Contoh: Jakarta, Bandung...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length >= 3 && setShowDropdown(true)}
          />
          {loading && (
            <div className="absolute inset-y-0 right-3 flex items-center">
              <Loader2 className="h-5 w-5 text-emerald-500 animate-spin" />
            </div>
          )}
        </div>
        
        <button
          onClick={handleUseLocation}
          disabled={loading}
          className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-2xl hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors border border-emerald-100 dark:border-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Gunakan Lokasi Saya"
        >
          <MapPin className="h-5 w-5" />
        </button>
      </div>

      {showDropdown && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl shadow-xl max-h-60 overflow-y-auto">
          {results.map((city) => (
            <button
              key={city.id}
              className="w-full text-left px-4 py-3 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors border-b border-stone-50 dark:border-stone-800 last:border-0"
              onClick={() => {
                onSelect(city);
                setQuery(city.lokasi);
                setShowDropdown(false);
              }}
            >
              <span className="font-medium text-stone-800 dark:text-stone-200">{city.lokasi}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
