import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface FlashSaleCountdownProps {
  endTime: string; // You can use string if you pass a date string
}

const CountTimer: React.FC<FlashSaleCountdownProps> = ({ endTime }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(endTime).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval as keyof TimeLeft] !== undefined) {
      timerComponents.push(
        <span key={interval}>
          {timeLeft[interval as keyof TimeLeft]} {interval}{' '}
        </span>
      );
    }
  });

  return (
    <div>
     
     <div className="mt-8">
      
      <div className="flex justify-center gap-4">
        {timeLeft.days !== undefined && (
          <div className="flex flex-col items-center">
            <span className="text-sm font-poppins font-medium">Days</span>
            <span className=" text-[18px] md:text-[32px] font-inter font-bold text-right">{timeLeft.days}  <span className='ml-4'>:</span> </span>
          </div>
        )}
        {timeLeft.hours !== undefined && (
          <div className="flex flex-col items-center">
            <span className="text-sm font-poppins font-medium">Hours</span>
            <span className="text-[18px] md:text-[32px]  font-inter font-bold text-right">{timeLeft.hours} <span className='ml-2'>:</span> </span>
          </div>
        )}
        {timeLeft.minutes !== undefined && (
          <div className="flex flex-col items-center">
            <span className="text-sm font-poppins font-medium">Minutes</span>
            <span className="text-[18px] md:text-[32px]  font-inter font-bold text-right">{timeLeft.minutes} <span className='ml-2'>:</span></span>
          </div>
        )}
        {timeLeft.seconds !== undefined && (
          <div className="flex flex-col items-center">
            <span className="text-sm font-poppins font-medium">Seconds</span>
            <span className="text-[18px] md:text-[32px]  font-inter font-bold text-right">{timeLeft.seconds}</span>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default CountTimer;
