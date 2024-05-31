import { Link } from "react-router-dom";

const Navbar = () => {
    const linkClass = "mx-2 hover:opacity-50 duration-300";

    return (
        <div className="absolute w-full p-5 text-end animate-fadeInFromTop">
            <Link to="/" className={linkClass}>
                home
            </Link>
            <Link to="/resume" className={linkClass}>
                resume
            </Link>
            <Link to="/projects" className={linkClass}>
                projects
            </Link>
            {/* <Link to="/blog" className={linkClass}>
                blog
            </Link> */}
        </div>
    );
};

export default Navbar;
