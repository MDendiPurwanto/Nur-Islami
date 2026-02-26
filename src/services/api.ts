import { City, PrayerTime, SurahDetail, QuranSurah } from "../types";

const BASE_URL_PRAYER = "https://api.myquran.com/v2/sholat";
const BASE_URL_QURAN = "https://equran.id/api/v2";

export const prayerService = {
  async searchCity(query: string): Promise<City[]> {
    const res = await fetch(`${BASE_URL_PRAYER}/kota/cari/${query}`);
    const data = await res.json();
    return data.data || [];
  },

  async getPrayerTimes(cityId: string, year: number, month: number, day: number): Promise<PrayerTime> {
    const res = await fetch(`${BASE_URL_PRAYER}/jadwal/${cityId}/${year}/${month}/${day}`);
    const data = await res.json();
    return data.data.jadwal;
  },

  async getMonthlySchedule(cityId: string, year: number, month: number): Promise<PrayerTime[]> {
    const res = await fetch(`${BASE_URL_PRAYER}/jadwal/${cityId}/${year}/${month}`);
    const data = await res.json();
    return data.data.jadwal;
  }
};

export const quranService = {
  async getSurahList(): Promise<QuranSurah[]> {
    const res = await fetch(`${BASE_URL_QURAN}/surat`);
    const data = await res.json();
    return data.data;
  },

  async getSurahDetail(nomor: number): Promise<SurahDetail> {
    const res = await fetch(`${BASE_URL_QURAN}/surat/${nomor}`);
    const data = await res.json();
    return data.data;
  }
};
