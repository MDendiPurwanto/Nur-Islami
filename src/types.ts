export interface City {
  id: string;
  lokasi: string;
}

export interface PrayerTime {
  imsak: string;
  subuh: string;
  terbit: string;
  dhuha: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
  date: string;
  tanggal: string;
}

export interface QuranSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
}

export interface QuranAyat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
}

export interface SurahDetail extends QuranSurah {
  ayat: QuranAyat[];
  audioFull: {
    [key: string]: string;
  };
}
