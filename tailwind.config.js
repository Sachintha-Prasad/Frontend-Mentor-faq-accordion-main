/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                white: "hsl(0, 0%, 100%)",
                "light-pink": "hsl(275, 100%, 97%)",
                "grayish-purple": "hsl(292, 16%, 49%)",
                "dark-purple": "hsl(292, 42%, 14%)"
            },

            container: {
                center: true,
                padding: "2rem"
            },

            backgroundImage: {
                desktop:
                    "url('../src/assets/images/background-pattern-desktop.svg')",
                mobile: "url('../src/assets/images/background-pattern-mobile.svg')"
            }
        }
    },
    plugins: []
}
