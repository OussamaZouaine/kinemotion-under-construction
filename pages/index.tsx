import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Countdown from '../components/Countdown';

export default function Home() {
    // const [dark, setDark] = useState<boolean>(false);

    // useEffect(() => {
    //     setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    // }, [dark]);

    return (
        <>
            <Head>
                <title>kinemotion | under construction</title>
            </Head>
            <header className="mt-6 flex justify-center">
                <Image
                    src={'/images/kinemotion-logo.png'}
                    alt={''}
                    width={300}
                    height={0}
                    className="w-60 sm:w-80"
                />
            </header>

            <main className="flex flex-col justify-around items-center h-[70vh] text-center">
                <div className="my-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-4xl uppercase mb-4">
                        this website is under
                        <span className="text-brandColorDark">
                            {' '}
                            construction
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl leading-[1.5]">
                        we are preparing to serve you better{' '}
                        <span className="block">stay Tuned.</span>
                    </p>
                </div>

                <Countdown />

                <div className="socials mt-6 flex justify-center space-x-8">
                    <a
                        href="#"
                        target="_blank"
                        className="flex justify-center items-center"
                    >
                        <Image
                            src={'/icons/dark/linkedin.svg'}
                            alt={''}
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="flex justify-center items-center"
                    >
                        <Image
                            src={'/icons/dark/gmail.svg'}
                            alt={''}
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <Image
                            src={'/icons/dark/whatsapp.svg'}
                            alt={''}
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <Image
                            src={'/icons/dark/facebook.svg'}
                            alt={''}
                            width={20}
                            height={20}
                            className="cursor-pointer w-4"
                        />
                    </a>
                </div>
            </main>
        </>
    );
}
