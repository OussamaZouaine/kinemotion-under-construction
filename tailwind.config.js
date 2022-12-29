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
                brandColorDark: '#974667',
                brandColorLight: '#F8ADA4',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
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
