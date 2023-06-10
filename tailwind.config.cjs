/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // Light Theme
                ui: '#FCFCFC',
                surface: '#FFFFFF',
                error: '#B00020',
                text: '#000000',
                line: '#F0F0F0',

                // Dark Theme
                'ui-dark': '#141414',
                'surface-dark': '#181818',
                'error-dark': '#CF6679',
                'text-dark': '#FFFFFF',
                'line-dark': '#242424',

                // Common
                primary: '#00AB55',
                'primary-varient': '#008743',
                secondary: '#03DAC6',
                'secondary-varient': '#018786',
                link: '#2000CC',
                'link-varient': '#0044CC',
                danger: '#ff0000',
                'danger-varient': '#ff2626',
                hint: '#797A7B',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'face-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'fade-out': {
                    '0%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },

                spin: {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 250ms ease-in-out',
                'fade-in-down': 'fade-in-down 250ms ease-in-out',
                'fade-in': 'fade-in 250ms ease-in-out',
                'fade-out': 'fade-out 250ms ease-in-out',
                spin: 'spin 1000ms linear infinite',
            },
            fontFamily: {
                custom: ['IBM Plex Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
