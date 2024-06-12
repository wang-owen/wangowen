import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const linkClass = "mx-2 hover:opacity-50 duration-300";

    return (
        <div className="fixed w-full p-5 text-end animate-fadeInFromTop">
            <HashLink to="#" className={linkClass} smooth>
                home
            </HashLink>
            <HashLink to="#resume" className={linkClass} smooth>
                resume
            </HashLink>
            <HashLink to="#projects" className={linkClass} smooth>
                projects
            </HashLink>
        </div>
    );
};

export default Navbar;
