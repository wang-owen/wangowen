import { useContext } from "react";
import mailIcon from "../assets/img/iosmail.png";
import linkedinIcon from "../assets/img/linkedin-icon.png";
import githubIcon from "../assets/img/github-icon.svg";
import { ThemeContext } from "../layouts/MainLayout";

const Socials = () => {
    const iconClass = "mx-1 size-14 hover:-translate-y-3 duration-500";

    const theme = useContext(ThemeContext);

    return (
        <div
            className={`mb-2 p-1 ${
                theme === "light" ? "bg-gray-300" : "bg-gray-700"
            } bg-opacity-40 border border-gray-500 border-opacity-40 rounded-lg flex shadow-2xl`}
        >
            <a
                href="mailto:contact@wangowen.com"
                target="_blank"
                className="tooltip"
                data-tip="Email"
            >
                <img src={mailIcon} className={iconClass}></img>
            </a>
            <a
                href="https://www.linkedin.com/in/o-wang/"
                target="_blank"
                className="tooltip"
                data-tip="LinkedIn"
            >
                <img src={linkedinIcon} className={iconClass}></img>
            </a>
            <a
                href="https://github.com/wang-owen/"
                target="_blank"
                className="tooltip"
                data-tip="GitHub"
            >
                <img src={githubIcon} className={iconClass}></img>
            </a>
        </div>
    );
};

export default Socials;
