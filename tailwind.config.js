/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-yellow': '#FFF200',
            },
            fontFamily: {
                'primary': ['Oswald', 'sans-serif'],
                'secondary': ['Times New Roman', 'serif'],
                'hand': ['Permanent Marker', 'cursive'],
            }
        },
    },
    plugins: [],
}
