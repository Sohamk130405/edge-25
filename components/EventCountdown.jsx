"use client";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

const EventCountdown = () => {
  const eventDate = new Date(2025, 2, 4, 10, 0, 0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
      {timeLeft ? (
        <>
          ✨Event in ⏳ {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </>
      ) : (
        <>
          ✨ Fostering Changes And Impacting Lives
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />{" "}
        </>
      )}
    </span>
  );
};

export default EventCountdown;
