import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="shortcut icon"
                    href="/images/favicon.png"
                    type="image/x-icon"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <body className="min-h-screen dark:bg-primary bg-secondary dark:text-secondary text-primary container md:dark:bg-pattern-light md:bg-pattern-dark bg-center bg-cover overflow-x-hidden lg:overflow-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
