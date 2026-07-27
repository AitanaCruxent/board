import { useEffect, useState } from "react";
import './Clock.css'

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate1 = currentTime.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
  });

  const formattedDate2 = currentTime.toLocaleDateString("en-GB", {
    month: "long",
  });

  const formattedDate = formattedDate1 + ', ' + formattedDate2

  return (
    <div className="clock">
      <span className="clock__time">{formattedTime}</span>
      <span className="clock__date">{formattedDate}</span>
    </div>
  );
}

export default Clock;