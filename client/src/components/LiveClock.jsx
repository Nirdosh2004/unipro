import { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';

const LiveClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata', // Automatically handles UTC+05:30
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="flex items-center gap-1">
      <FiClock className="text-gray-400" />
      {time}
    </span>
  );
};

export default LiveClock;
