import React, { useEffect, useState } from "react";

// declaration interfacenya isinya jenisnya apa (numbers)
interface State 
{
    totalSeconds: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface ClockBaseProps 
{
    initialTime: number;
    redirectUrl?: string;
}

export const ClockBase: React.FC<ClockBaseProps> = ({
    initialTime,
    redirectUrl = "https://example.com" // insert Urls
}) => {
    const [state, setState] = useState<State>({
        totalSeconds: initialTime,
        // logic convertnya
        days: Math.floor(initialTime / 86400),
        hours: Math.floor((initialTime % 86400) / 3600),
        minutes: Math.floor((initialTime % 3600) / 60),
        seconds: initialTime % 60
    });

    useEffect(() => 
        {
        const timer = setInterval(() => {
            setState(prev => {
                if (prev.totalSeconds <= 0) {
                    clearInterval(timer);
                    window.location.href = redirectUrl;
                    return prev;
                }
                
                // logic countdownnya
                const newTotalSeconds = prev.totalSeconds - 1;
                return {
                    // logic convert seconds ke setiap bentuk waktunya
                    totalSeconds: newTotalSeconds,
                    days: Math.floor(newTotalSeconds / 86400),
                    hours: Math.floor((newTotalSeconds % 86400) / 3600),
                    minutes: Math.floor((newTotalSeconds % 3600) / 60),
                    seconds: newTotalSeconds % 60
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [redirectUrl]);

    // HTMLnya, jadi kayak format dasarnya
    const format = (value: number) => value.toString().padStart(2, "0");

    return (
        <div className="horizontal-timer">
            <div className="time-unit">
                <div className="time-value">
                    {format(state.days)}
                </div>
                <div className="time-label">
                    Days
                </div>
            </div>

            <div className="time-separator">
                :
            </div>

            <div className="time-unit">
                <div className="time-value">
                    {format(state.hours)}
                </div>
                <div className="time-label">
                    Hours
                </div>
            </div>

            <div className="time-separator">
                :
            </div>

            <div className="time-unit">
                <div className="time-value">
                    {format(state.minutes)}
                </div>
                <div className="time-label">
                    Minutes
                </div>
            </div>

            <div className="time-separator">
                :
            </div>

            <div className="time-unit">
                <div className="time-value">
                    {format(state.seconds)}
                </div>
                <div className="time-label">
                    Seconds
                </div>
            </div>
        </div>
    );
};

export default ClockBase;


    