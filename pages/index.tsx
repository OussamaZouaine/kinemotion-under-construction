import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Countdown from '../components/Countdown';

export default function Home() {
    const [dark, setDark] = useState<boolean>(false);

    useEffect(() => {
        setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, [dark]);

    return (
        <>
            <Head>
                <title>MediaCaris | under construction</title>
            </Head>
            <header className="mt-20 flex justify-center">
                {dark ? (
                    <Image
                        src={'/images/logo-light.svg'}
                        alt={''}
                        width={0}
                        height={0}
                        className="w-72 sm:w-96 md:w-[30rem]"
                    />
                ) : (
                    <Image
                        src={'/images/logo-dark.svg'}
                        alt={''}
                        width={0}
                        height={0}
                        className="w-60 sm:w-96 md:w-[30rem]"
                    />
                )}
            </header>

            <main className="flex flex-col justify-around items-center h-[70vh] text-center mt-12">
                <div className="my-8">
                    <h1 className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-bold max-w-5xl uppercase mb-4">
                        this website is under
                        <span className="text-accent"> construction</span>
                    </h1>
                    <p className="text-xl md:text-2xl leading-[1.5]">
                        we are preparing to serve you better{' '}
                        <span className="block">stay Tuned.</span>
                    </p>
                </div>

                <Countdown />

                {dark ? (
                    <div className="socials mt-16 flex justify-center space-x-8">
                        <a
                            href="https://www.linkedin.com/company/mediacaris/"
                            target="_blank"
                            className="flex justify-center items-center"
                        >
                            <Image
                                src={'/icons/light/linkedin.svg'}
                                alt={''}
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </a>
                        <a
                            href="mailto:contact@mediacaris.com"
                            target="_blank"
                            className="flex justify-center items-center"
                        >
                            <Image
                                src={'/icons/light/gmail.svg'}
                                alt={''}
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </a>
                        <a
                            href="#"
                            className="flex justify-center items-center"
                        >
                            <Image
                                src={'/icons/light/whatsapp.svg'}
                                alt={''}
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </a>
                        <a
                            href="#"
                            className="flex justify-center items-center"
                        >
                            <Image
                                src={'/icons/light/facebook.svg'}
                                alt={''}
                                width={20}
                                height={20}
                                className="cursor-pointer w-4"
                            />
                        </a>
                    </div>
                ) : (
                    <div className="socials mt-16 flex justify-center space-x-8">
                        <a
                            href="https://www.linkedin.com/company/mediacaris/"
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
                            href="mailto:contact@mediacaris.com"
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
                        <a
                            href="#"
                            className="flex justify-center items-center"
                        >
                            <Image
                                src={'/icons/dark/whatsapp.svg'}
                                alt={''}
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </a>
                        <a
                            href="#"
                            className="flex justify-center items-center"
                        >
                            <Image
                                src={'/icons/dark/facebook.svg'}
                                alt={''}
                                width={20}
                                height={20}
                                className="cursor-pointer w-4"
                            />
                        </a>
                    </div>
                )}
            </main>
        </>
    );
}
