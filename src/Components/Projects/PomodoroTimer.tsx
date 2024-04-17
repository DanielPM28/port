// PomodoroTimer.tsx
import React, { useState, useEffect } from "react";

interface PomodoroTimerProps {
  workDuration: number; // Duración del trabajo en segundos
  breakDuration: number; // Duración del descanso en segundos
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  workDuration,
  breakDuration,
}) => {
  const [seconds, setSeconds] = useState(workDuration);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0) {
      setIsActive(false);
      setIsBreak((prevIsBreak) => !prevIsBreak);
      setSeconds(isBreak ? breakDuration : workDuration);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, isBreak, workDuration, breakDuration]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setSeconds(workDuration);
  };
  
  const pododoroStyle ={
    margin: "50px auto",
    padding: "20px",
    width: "300px",
    background: "#f0f0f0",
  };


  const buttonStyle = {
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    background: "#007bff",
    color: "#fff",
    border: "nonde",
  }

  const h1Style = {
    color: "#333",
    size: "24px",
  }

  const pStyle = {
    size: "24px",
    margin: "20px 0",
  }

  return (
    <div style={pododoroStyle}>
      <h1 style={h1Style} >{isBreak ? "Descanso" : "Trabajo"}</h1>
      <p style={pStyle} >{`${Math.floor(seconds / 60)}:${(seconds % 60)
        .toString()
        .padStart(2, "0")}`}</p>
      <button style={buttonStyle} onClick={toggleTimer}
      >
        {isActive ? "Pausar" : "Iniciar"}
      </button>
      <button style={buttonStyle} onClick={resetTimer}>Reiniciar</button>
    </div>
  );
};

export default PomodoroTimer;
