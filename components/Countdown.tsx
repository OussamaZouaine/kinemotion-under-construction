import React, { useEffect, useState } from 'react';

export default function Countdown() {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const christmas = new Date('feb 10, 2023 00:00:00').getTime();
        setInterval(function () {
            const now = new Date().getTime();

            let distance = christmas - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);
    }, [days, hours, minutes, seconds]);

    return (
        <div className="grid grid-cols-2 gap-y-10 sm:flex sm:flex-row sm:justify-center gap-x-20 sm:gap-x-24 md:gap-x-32">
            <p className="flex flex-col items-center text-xl md:text-2xl capitalize gap-y-4 w-12">
                <span className="text-brandColorDark font-bold text-4xl md:text-7xl">
                    {days.toString().padStart(2, '0')}
                </span>{' '}
                days
            </p>
            <p className="flex flex-col items-center text-xl md:text-2xl capitalize gap-y-4 w-12">
                <span className="text-brandColorDark font-bold text-4xl md:text-7xl">
                    {hours.toString().padStart(2, '0')}
                </span>{' '}
                Hours
            </p>
            <p className="flex flex-col items-center text-xl md:text-2xl capitalize gap-y-4 w-12">
                <span className="text-brandColorDark  font-bold text-4xl md:text-7xl">
                    {minutes.toString().padStart(2, '0')}
                </span>{' '}
                minutes
            </p>
            <p className="flex flex-col items-center text-xl md:text-2xl capitalize gap-y-4 w-12">
                <span className="text-brandColorDark  font-bold text-4xl md:text-7xl">
                    {seconds.toString().padStart(2, '0')}
                </span>{' '}
                seconds
            </p>
        </div>
    );
}
