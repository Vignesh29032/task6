import React, { useState, useRef } from 'react';
import './style.css';

const Timer = () => {
  const [time, setTime] = useState(0); // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const milliseconds = String(ms % 1000).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const startTimer = () => {
    if (!isRunning) {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); // update every 10ms
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h1>React Timer </h1>
      <div className="timer-display">{formatTime(time)}</div>
      <div className="button-group">
        <button className="btn start" onClick={startTimer}>Start</button>
        <button className="btn stop" onClick={stopTimer}>Stop</button>
        <button className="btn reset" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
