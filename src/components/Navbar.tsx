import { Link } from "react-router-dom";

const Navbar = () => {
    const linkClass = "mx-2 hover:opacity-50 duration-300";

    return (
        <div className="fixed w-full p-5 text-end animate-fadeInFromTop">
            <Link to="/" className={linkClass}>
                home
            </Link>
            <Link to="/resume" className={linkClass}>
                resume
            </Link>
            <Link to="/projects" className={linkClass}>
                projects
            </Link>
        </div>
    );
};

export default Navbar;
