import React, { useState, useEffect } from 'react';

const Calendar: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [time, setTime] = useState(new Date());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get the number of days in the current month
  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the first day of the current month
  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Handle navigation to the previous month
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Handle navigation to the next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Generate an array representing the days of the current month
  const generateCalendarDays = () => {
    const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    const startDay = firstDayOfMonth(currentMonth, currentYear);

    const days: (number | null)[] = Array(startDay).fill(null); // Fill empty slots before the first day
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const days = generateCalendarDays();

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time (HH:MM:SS AM/PM)
  const formatTime = (date: Date) => {
    const hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  // Placeholder for weather data (replace with API later)
  const weatherInfo = "25°C, Clear Sky";

  return (
    <div className="cursor-default z-20 text-sm fixed right-20 bottom-8 max-w-md mx-auto border rounded-lg shadow-lg p-5 bg-white dark:bg-black text-black dark:text-white">
      {/* Time and Weather Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">{time.toLocaleDateString()}</div>
          <div className="text-lg">{formatTime(time)}</div>
        </div>
        <div className="mt-2 text-sm">Weather: {weatherInfo}</div>
      </div>

      {/* Calendar Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="bg-gray-100 dark:bg-gray-900 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Prev
          </button>
          <h2 className="text-lg font-semibold">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button
            onClick={handleNextMonth}
            className="bg-gray-100 dark:bg-gray-900 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Next
          </button>
        </div>

        {/* Day names (Sun, Mon, Tue, ...) */}
        <div className="grid grid-cols-7 gap-2 text-center font-bold">
          {dayNames.map((day) => (
            <div key={day} className="py-2">{day}</div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {days.map((day, index) => (
            <div
              key={index}
              className={`py-2 rounded-lg ${
                day === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {day || ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
