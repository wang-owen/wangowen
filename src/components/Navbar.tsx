import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../layouts/MainLayout";

const Navbar = ({ toggleTheme }: { toggleTheme: () => void }) => {
    const linkClass = "mx-2 hover:opacity-50 duration-300";

    return (
        <div className="w-full p-5 text-end animate-fadeInFromTop z-50">
            <label className="swap swap-rotate float-left">
                <input
                    type="checkbox"
                    className="theme-controller"
                    onChange={toggleTheme}
                    checked={useContext(ThemeContext) === "dark"}
                />
                <MdOutlineLightMode className="swap-off" size={25} />
                <MdOutlineDarkMode className="swap-on" size={25} />
            </label>
            <Link to="/" className={linkClass}>
                home
            </Link>
            <a
                className={linkClass}
                href="Owen Wang Resume.pdf"
                target="_blank"
            >
                resume
            </a>
        </div>
    );
};

export default Navbar;
