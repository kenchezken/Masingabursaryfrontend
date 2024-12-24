import React, { useState, useEffect } from 'react';
import './countdown.css'
const CountdownTimer = () => {
  const countdownDate = new Date('December 27, 2025 00:00:00').getTime(); // Set your countdown date here

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      });

      if (distance < 0) {
        clearInterval(countdown);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [countdownDate]);

  return (
    <div className="countdown-container">
      <h3 style={{
        fontSize: '15px',
  
      }} className="countdown-heading">Application will endOn : <strong> 10th January 2025</strong></h3>
<div
  className="countdown-timer flex flex-wrap justify-center items-center gap-6 p-6 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 shadow-lg"
  style={{
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '600px',
  }}
>
  <div className="countdown-item flex flex-col items-center">
    <span
      className="text-4xl font-bold text-white"
    >
      {timeRemaining.days}
    </span>
    <span className="text-sm font-medium text-gray-200">Days</span>
  </div>
  <div className="countdown-item flex flex-col items-center">
    <span
      className="text-4xl font-bold text-white"
    >
      {timeRemaining.hours}
    </span>
    <span className="text-sm font-medium text-gray-200">Hours</span>
  </div>
  <div className="countdown-item flex flex-col items-center">
    <span
      className="text-4xl font-bold text-white"
    >
      {timeRemaining.minutes}
    </span>
    <span className="text-sm font-medium text-gray-200">Minutes</span>
  </div>
  <div className="countdown-item flex flex-col items-center">
    <span
      className="text-4xl font-bold text-white"
    >
      {timeRemaining.seconds}
    </span>
    <span className="text-sm font-medium text-gray-200">Seconds</span>
  </div>
</div>

    </div>
  );
};

export default CountdownTimer;
