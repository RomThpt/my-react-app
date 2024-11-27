import React, { useState, useEffect } from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridian = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(
            seconds
        )} ${meridian}`;
    };

    const padZero = (number) => {
        return number < 10 ? "0" + number : number;
    };

    return (
        <div className="clock-countainer">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
};

export default DigitalClock;
