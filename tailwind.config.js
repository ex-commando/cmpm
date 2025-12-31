/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#be123c', // Deep Crimson Base
                    700: '#9f1239',
                    800: '#881337', // Deep Crimson Dark
                    900: '#4c0519',
                    950: '#4c0519',
                },
                secondary: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24', // Gold
                    500: '#f59e0b', // Base Gold
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                    950: '#451a03',
                },
                accent: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    500: '#64748b', // Slate for neutrality
                    900: '#0f172a',
                }
            },
            fontFamily: {
                heading: ['Cinzel', 'serif'], // Majestic, classic
                body: ['Lato', 'sans-serif'], // Clean, legible
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
