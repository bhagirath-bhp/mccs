import React, { useState, useEffect } from "react";
import { Countdown } from "react-daisyui";
import { calculateTimeRemaining } from "../utils";


const CustomCountdown = () => {

    const targetTime = new Date('2024-02-08T00:00:00');
    const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining(targetTime));

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(calculateTimeRemaining(targetTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetTime]);
    

    return (
        <div className="flex flex-col justify-center text-center font-metropolis">
            <div className="flex flex-col text-left relative">
                {/* <Countdown className="font-mono text-[10rem]" value={daysLeft} /> */}
                <span className="cd-days text-[7rem] font-[100] text-white">{remainingTime.days}</span>
                {/* <span className="bg-blue-700 w-fit px-4 py-1 absolute right-[-0.6rem] bottom-[30%]">days</span> */}
            </div>
            <div className="hms flex gap-10">
                <div className="flex flex-col">
                    {/* <Countdown className="font-mono text-5xl" value={hoursLeft} /> */}
                    <span className="font-mono text-xl text-white">{remainingTime.hours}</span>
                    <span className="text-white">hours</span>
                </div>
                <div className="flex flex-col">
                    {/* <Countdown className="font-mono text-5xl" value={minutesLeft} /> */}
                    <span className="font-mono text-xl text-white">{remainingTime.minutes}</span>
                    <span className="text-white">min</span>
                </div>
                <div className="flex flex-col">
                    {/* <Countdown className="font-mono text-5xl" value={secondsLeft} /> */}
                    <span className="font-mono text-xl text-white">{remainingTime.seconds}</span>
                    <span className="text-white">sec</span>
                </div>
            </div>
        </div>
    );
};

export default CustomCountdown;
