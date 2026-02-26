import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { format, parse } from 'date-fns';
import { id } from 'date-fns/locale';

interface ScheduleItem {
  tanggal: string;
  imsak: string;
  subuh: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
}

interface ImsakiyahChartProps {
  schedule: ScheduleItem[];
}

// Helper to convert "HH:mm" to decimal hours (e.g., "04:30" -> 4.5)
const timeToDecimal = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours + minutes / 60;
};

// Helper to format decimal hours back to "HH:mm" for tooltip
const decimalToTime = (decimal: number) => {
  const hours = Math.floor(decimal);
  const minutes = Math.round((decimal - hours) * 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export const ImsakiyahChart: React.FC<ImsakiyahChartProps> = ({ schedule }) => {
  // Transform data for the chart
  const data = schedule.map((item) => ({
    date: item.tanggal.split(',')[0].trim(), // Extract date part (e.g., "1 Ramadan")
    imsak: timeToDecimal(item.imsak),
    subuh: timeToDecimal(item.subuh),
    maghrib: timeToDecimal(item.maghrib),
    isya: timeToDecimal(item.isya),
    // Keep original strings for tooltip display if needed, but formatter handles it
    original: item
  }));

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-stone-800 p-4 border border-stone-200 dark:border-stone-700 rounded-xl shadow-lg text-sm">
          <p className="font-bold text-stone-800 dark:text-stone-100 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 mb-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-stone-600 dark:text-stone-300 capitalize w-16">
                {entry.name}:
              </span>
              <span className="font-mono font-medium text-stone-800 dark:text-stone-100">
                {decimalToTime(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[400px] bg-white dark:bg-stone-900 p-4 md:p-6 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm">
      <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-6 text-center">
        Tren Waktu Sholat Bulan Ini
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 10, fill: '#78716c' }}
            tickMargin={10}
            interval="preserveStartEnd"
          />
          <YAxis 
            domain={['dataMin - 0.5', 'dataMax + 0.5']}
            tickFormatter={decimalToTime}
            tick={{ fontSize: 10, fill: '#78716c' }}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          
          {/* Morning Times */}
          <Line
            type="monotone"
            dataKey="imsak"
            name="Imsak"
            stroke="#059669" // emerald-600
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="subuh"
            name="Subuh"
            stroke="#10b981" // emerald-500
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />

          {/* Evening Times */}
          <Line
            type="monotone"
            dataKey="maghrib"
            name="Maghrib"
            stroke="#f59e0b" // amber-500
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="isya"
            name="Isya"
            stroke="#3b82f6" // blue-500
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
