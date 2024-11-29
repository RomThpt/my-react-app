import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
    const [isRunning, setisRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef();

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalIdRef.current);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    const start = () => {
        setisRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    };

    const stop = () => {
        setisRunning(false);
    };

    const reset = () => {
        setisRunning(false);
        setElapsedTime(0);
    };

    const formatTime = () => {
        let hours = Math.floor(elapsedTime / 3600000);
        let minutes = Math.floor((elapsedTime % 3600000) / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);
        return (
            String(hours).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0") +
            "." +
            String(milliseconds).padStart(2, "0")
        );
    };

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">
                    Start
                </button>
                <button onClick={stop} className="stop-button">
                    Stop
                </button>
                <button onClick={reset} className="reset-button">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default StopWatch;
