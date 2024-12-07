/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                openSans: ["Open Sans"],
            },
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

                zoomInFromLeft: {
                    "0%": { transform: "translateX(-2000px)" },
                    "100%": { transform: "translateX(0)" },
                },
                zoomInFromRight: {
                    "0%": { transform: "translateX(2000px)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.8s ease-in-out",
                fadeInFromLeft: "fadeInFromLeft 0.8s ease-in-out",
                fadeInFromRight: "fadeInFromRight 0.8s ease-in-out",
                fadeInFromTop: "fadeInFromTop 0.8s ease-in-out",
                fadeInFromBottom: "fadeInFromBottom 0.8s ease-in-out",

                zoomInFromLeft: "zoomInFromLeft 0.8s ease-out",
                zoomInFromRight: "zoomInFromRight 0.8s ease-out",
            },
        },
    },
    plugins: [daisyui],
};
