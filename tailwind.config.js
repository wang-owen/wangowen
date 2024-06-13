/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInFromLeft: {
                    "0%": { opacity: "0", transform: "translateX(-25px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                fadeInFromRight: {
                    "0%": { opacity: "0", transform: "translateX(25px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                fadeInFromTop: {
                    "0%": { opacity: "0", transform: "translateY(-25px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeInFromBottom: {
                    "0%": { opacity: "0", transform: "translateY(25px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.8s ease-in-out",
                fadeInFromLeft: "fadeInFromLeft 0.8s ease-in-out",
                fadeInFromRight: "fadeInFromRight 0.8s ease-in-out",
                fadeInFromTop: "fadeInFromTop 0.8s ease-in-out",
                fadeInFromBottom: "fadeInFromBottom 0.8s ease-in-out",
            },
        },
    },
    plugins: [require("daisyui")],
};
