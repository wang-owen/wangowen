import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

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
                    theme === "light" ? "bg-[#fffffa]" : "bg-slate-100"
                } text-black duration-300 overflow-hidden`}
            >
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
