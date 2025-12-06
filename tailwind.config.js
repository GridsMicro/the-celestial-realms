// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // สามารถเพิ่มสีหรือฟอนต์ของ Celestial Realms ได้ที่นี่
        },
    },
    plugins: [],
};