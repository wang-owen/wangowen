import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgDark from "../assets/img/bg-dark.png";
import bgLight from "../assets/img/bg-light.png";

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
            } font-openSans bg-contain duration-700`}
            style={{
                backgroundImage: `url(${theme === "light" ? bgLight : bgDark})`,
            }}
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
