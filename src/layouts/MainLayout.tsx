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
        <main
            className={`${
                theme === "light" ? "bg-zinc-100" : "bg-zinc-900"
            } duration-300 font-openSans`}
        >
            <ThemeContext.Provider value={theme}>
                <div className="grid grid-rows-[auto_1fr] min-h-screen">
                    <Navbar toggleTheme={toggleTheme} />
                    <Outlet />
                </div>
            </ThemeContext.Provider>
        </main>
    );
};

export default MainLayout;
