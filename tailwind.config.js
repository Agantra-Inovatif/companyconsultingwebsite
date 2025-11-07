/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#b91c1c',
                secondary: '#991b1b',
                tertiary: '#7f1d1d',
                light: '#fecaca',
                lightest: '#fee2e2',
            },
            keyframes: {
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in-down': 'fadeInDown 0.3s ease-out forwards',
            },
        },
    },
    plugins: [],
};
