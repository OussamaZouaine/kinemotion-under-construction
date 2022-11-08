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

            <body className="min-h-screen dark:bg-primary bg-secondary dark:text-secondary text-primary container md:bg-pattern-light md:dark:bg-pattern-dark bg-center bg-cover overflow-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
