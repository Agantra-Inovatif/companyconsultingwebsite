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
        },
    },
    plugins: [],
};
