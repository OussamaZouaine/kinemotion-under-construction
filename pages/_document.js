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
                    href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body className="min-h-screen bg-secondary font-montserrat  text-primary container  overflow-x-hidden lg:overflow-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
