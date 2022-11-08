/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: '#060a1c',
                secondary: '#fefefe',
                accent: '#0f1cba',
            },
            fontFamily: {
                'space-grotesk': ['Space Grotesk', 'sans-serif'],
            },
            backgroundImage: {
                'pattern-light': "url('/images/bg-light.svg')",
                'pattern-dark': "url('/images/bg-dark.svg')",
                earth: "url('/images/bg.jpg')",
            },
        },
    },
    plugins: [],
};
