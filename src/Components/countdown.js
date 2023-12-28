import React, { useState, useEffect } from 'react';
import './countdown.css'
const CountdownTimer = () => {
  const countdownDate = new Date('January 7, 2024 00:00:00').getTime(); // Set your countdown date here

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
  
      }} className="countdown-heading">Application will endOn : <strong> 7th January 2024</strong></h3>
      <div className="countdown-timer">
        <div className="countdown-item">
          <span style={{
            color: 'white'
          }}>{timeRemaining.days}</span>
          <span>Days</span>
        </div>
        <div className="countdown-item">
          <span style={{
            color: 'white'
          }}>{timeRemaining.hours}</span>
          <span>Hours</span>
        </div>
        <div className="countdown-item">
          <span style={{
            color: 'white'
          }}>{timeRemaining.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="countdown-item">
          <span  style={{
            color: 'white'
          }}>{timeRemaining.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
