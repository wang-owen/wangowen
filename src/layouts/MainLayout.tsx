import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const ThemeContext = createContext("light");

const MainLayout = () => {
    const page = document.querySelector("html");
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    const toggleTheme = () => {
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
        setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
        if (page) {
            page.setAttribute(
                "data-theme",
                localStorage.getItem("theme") || theme
            );
        }
    }, [theme]);

    return (
        <>
            <div
                className={`${
                    theme === "light"
                        ? "bg-[#fffffa] text-black"
                        : "bg-slate-900 text-white"
                } duration-300 overflow-hidden`}
            >
                <ThemeContext.Provider value={theme}>
                    <Navbar toggleTheme={toggleTheme} />
                    <Outlet />
                </ThemeContext.Provider>
            </div>
        </>
    );
};

export default MainLayout;
