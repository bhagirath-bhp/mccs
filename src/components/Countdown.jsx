import React, { useState, useEffect } from "react";

const Countdown = ({ days, hours, minutes, seconds }) => {
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

    const daysLeft = Math.floor(remainingTime / (24 * 60 * 60));
    const hoursLeft = Math.floor((remainingTime % (24 * 60 * 60)) / 3600);
    const minutesLeft = Math.floor((remainingTime % 3600) / 60);
    const secondsLeft = remainingTime % 60;

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
                <div className="font-mono text-5xl">{formatTime(daysLeft)}</div>
                days
            </div>
            <div className="flex flex-col">
                <div className="font-mono text-5xl">{formatTime(hoursLeft)}</div>
                hours
            </div>
            <div className="flex flex-col">
                <div className="font-mono text-5xl">{formatTime(minutesLeft)}</div>
                min
            </div>
            <div className="flex flex-col">
                <div className="font-mono text-5xl">{formatTime(secondsLeft)}</div>
                sec
            </div>
        </div>
    );
};

export default Countdown;
