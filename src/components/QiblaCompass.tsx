import React, { useState, useEffect } from 'react';
import { Compass, Navigation, MapPin, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const QiblaCompass: React.FC = () => {
  const [heading, setHeading] = useState<number | null>(null);
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if iOS for permission handling
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    // Get location for Qibla calculation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          calculateQibla(latitude, longitude);
        },
        (err) => {
          setError("Izin lokasi diperlukan untuk menghitung arah Kiblat.");
          console.error(err);
        }
      );
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      // Use webkitCompassHeading for iOS, alpha for others
      const compassHeading = (event as any).webkitCompassHeading || (360 - (event.alpha || 0));
      setHeading(compassHeading);
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  const calculateQibla = (lat: number, lng: number) => {
    // Kaaba coordinates
    const kaabaLat = 21.4225;
    const kaabaLng = 39.8262;

    const φ1 = lat * (Math.PI / 180);
    const φ2 = kaabaLat * (Math.PI / 180);
    const Δλ = (kaabaLng - lng) * (Math.PI / 180);

    const y = Math.sin(Δλ);
    const x = Math.cos(φ1) * Math.tan(φ2) - Math.sin(φ1) * Math.cos(Δλ);
    let qibla = Math.atan2(y, x) * (180 / Math.PI);
    qibla = (qibla + 360) % 360;
    setQiblaDirection(qibla);
  };

  const requestPermission = async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const response = await (DeviceOrientationEvent as any).requestPermission();
        if (response === 'granted') {
          window.addEventListener('deviceorientation', (e) => {
            const compassHeading = (e as any).webkitCompassHeading || (360 - (e.alpha || 0));
            setHeading(compassHeading);
          });
        }
      } catch (err) {
        setError("Gagal mendapatkan izin sensor.");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 flex items-center justify-center gap-3">
          <Navigation className="text-emerald-600" /> Kompas Kiblat
        </h2>
        <p className="text-stone-500 dark:text-stone-400">Arahkan perangkat Anda untuk menemukan arah Kiblat.</p>
      </div>

      <div className="relative flex items-center justify-center py-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Compass Ring */}
          <div className="absolute inset-0 border-4 border-stone-200 dark:border-stone-800 rounded-full shadow-inner" />
          
          {/* Compass Markings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              {['U', 'T', 'S', 'B'].map((dir, i) => (
                <div
                  key={dir}
                  className="absolute font-bold text-stone-400 dark:text-stone-600"
                  style={{
                    top: i === 0 ? '5%' : i === 2 ? '85%' : '45%',
                    left: i === 3 ? '5%' : i === 1 ? '85%' : '45%',
                  }}
                >
                  {dir}
                </div>
              ))}
            </div>
          </div>

          {/* Compass Needle Container */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: heading !== null ? -heading : 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            {/* Qibla Indicator */}
            {qiblaDirection !== null && (
              <div
                className="absolute w-full h-full"
                style={{ transform: `rotate(${qiblaDirection}deg)` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                   <div className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">KIBLAT</div>
                   <div className="w-1 h-8 bg-emerald-600 rounded-full" />
                </div>
              </div>
            )}
            
            {/* Main Needle */}
            <div className="relative w-2 h-full flex flex-col items-center">
              <div className="w-4 h-4 bg-stone-800 dark:bg-stone-200 rounded-full z-10" />
              <div className="w-1 h-1/2 bg-red-500 rounded-t-full" />
              <div className="w-1 h-1/2 bg-stone-300 dark:bg-stone-700 rounded-b-full" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm space-y-4">
        {error ? (
          <div className="flex items-center gap-3 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 p-4 rounded-2xl text-sm">
            <AlertCircle className="shrink-0" />
            <p>{error}</p>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-stone-600 dark:text-stone-400">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium">Lokasi Terdeteksi</span>
            </div>
            {qiblaDirection !== null && (
              <p className="text-2xl font-bold text-stone-800 dark:text-stone-100">
                {Math.round(qiblaDirection)}° <span className="text-stone-400 dark:text-stone-500 text-lg">dari Utara</span>
              </p>
            )}
          </div>
        )}

        {isIOS && heading === null && (
          <button
            onClick={requestPermission}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors"
          >
            Aktifkan Kompas (iOS)
          </button>
        )}
      </div>

      <div className="text-xs text-stone-400 dark:text-stone-500 px-4">
        * Letakkan perangkat pada permukaan datar untuk hasil yang lebih akurat. Pastikan sensor kompas perangkat Anda berfungsi.
      </div>
    </div>
  );
};
