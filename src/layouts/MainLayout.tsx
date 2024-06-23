import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const ThemeContext = createContext("dark");

const MainLayout = () => {
    const page = document.querySelector("html");
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
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
            <main
                className={`${
                    theme === "light" ? "bg-zinc-100" : "bg-zinc-900"
                } duration-300 min-h-screen h-max font-openSans`}
            >
                <ThemeContext.Provider value={theme}>
                    <Navbar toggleTheme={toggleTheme} />
                    <Outlet />
                </ThemeContext.Provider>
            </main>
        </>
    );
};

export default MainLayout;
