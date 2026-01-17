/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-yellow': '#FC7F2C',
            },
            fontFamily: {
                'primary': ['Oswald', 'sans-serif'],
                'secondary': ['Times New Roman', 'serif'],
                'hand': ['Permanent Marker', 'cursive'],
                'inter': ['Inter', 'sans-serif'],
                'rounded': ['"Varela Round"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
