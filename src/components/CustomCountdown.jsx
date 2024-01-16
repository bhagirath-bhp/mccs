import React, { useState, useEffect } from "react";
import { Countdown } from "react-daisyui";


const CustomCountdown = ({ days, hours, minutes, seconds }) => {
    const calculateRemainingTime = () => {
        const totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
        return totalSeconds;
    };

    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRemainingTime((prevTime) => (prevTime <= 0 ? 0 : prevTime - 1));
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [remainingTime]);

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    const daysLeft = formatTime(Math.floor(remainingTime / (24 * 60 * 60)));
    const hoursLeft = formatTime(Math.floor((remainingTime % (24 * 60 * 60)) / 3600));
    const minutesLeft = formatTime(Math.floor((remainingTime % 3600) / 60));
    const secondsLeft = formatTime(remainingTime % 60);
    

    return (
        <div className="flex flex-col justify-center text-center font-metropolis">
            <div className="flex flex-col text-left relative">
                {/* <Countdown className="font-mono text-[10rem]" value={daysLeft} /> */}
                <span className="text-[7rem] font-[100]">{daysLeft}</span>
                <span className="bg-blue-700 w-fit px-4 py-1 absolute right-[-0.6rem] bottom-[30%]">days</span>
            </div>
            <div className="hms flex gap-10">
                <div className="flex flex-col">
                    {/* <Countdown className="font-mono text-5xl" value={hoursLeft} /> */}
                    <span className="font-mono text-xl">{hoursLeft}</span>
                    hours
                </div>
                <div className="flex flex-col">
                    {/* <Countdown className="font-mono text-5xl" value={minutesLeft} /> */}
                    <span className="font-mono text-xl">{minutesLeft}</span>
                    min
                </div>
                <div className="flex flex-col">
                    {/* <Countdown className="font-mono text-5xl" value={secondsLeft} /> */}
                    <span className="font-mono text-xl">{secondsLeft}</span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default CustomCountdown;
