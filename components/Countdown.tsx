import React, { useEffect, useState } from 'react';

export default function Countdown() {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const christmas = new Date('dec 03, 2022 00:00:00').getTime();
        let countdown = setInterval(function () {
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

            // console.log(`${days}day, ${hours}h, ${minutes}min, ${seconds}s`);

            // if (distance < 0) {
            //     clearInterval(countdown);
            //     // document.getElementById("demo").innerHTML = "EXPIRED";
            //     container.innerHTML = `<img src='https://i.pinimg.com/originals/af/40/b8/af40b84a852a8f81ad065c0d530fa7b9.gif' />`;
            // }
        }, 1000);
    }, [days, hours, minutes, seconds]);

    return (
        <div className="grid grid-cols-2 gap-y-10 sm:flex sm:flex-row sm:justify-center gap-x-20 sm:gap-x-24 md:gap-x-32">
            <p className="flex flex-col items-center text-xl md:text-2xl capitalize gap-y-4 w-12">
                <span className="dark:text-white text-accent font-medium text-6xl md:text-8xl">
                    {days.toString().padStart(2, '0')}
                </span>{' '}
                days
            </p>
            <p className="flex flex-col items-center text-xl md:text-2xl capitalize gap-y-4 w-12">
                <span className="dark:text-white text-accent  font-medium text-6xl md:text-8xl">
                    {hours.toString().padStart(2, '0')}
                </span>{' '}
                Hours
            </p>
            <p className="flex flex-col items-center text-xl md:text-2xl capitalize gap-y-4 w-12">
                <span className="dark:text-white text-accent  font-medium text-6xl md:text-8xl">
                    {minutes.toString().padStart(2, '0')}
                </span>{' '}
                minutes
            </p>
            <p className="flex flex-col items-center text-xl md:text-2xl capitalize gap-y-4 w-12">
                <span className="dark:text-white text-accent  font-medium text-6xl md:text-8xl">
                    {seconds.toString().padStart(2, '0')}
                </span>{' '}
                seconds
            </p>
        </div>
    );
}
