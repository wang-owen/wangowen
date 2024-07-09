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
            className={`p-1 ${
                theme === "light" ? "bg-gray-300" : "bg-gray-700"
            } bg-opacity-40 border border-gray-500 border-opacity-40 rounded-lg flex h-min shadow`}
        >
            <a
                className="tooltip"
                href="mailto:contact@wangowen.com"
                target="_blank"
                data-tip="contact@wangowen.com"
            >
                <img src={mailIcon} className={iconClass}></img>
            </a>
            <a
                className="tooltip"
                href="https://www.linkedin.com/in/o-wang/"
                target="_blank"
                data-tip="o-wang"
            >
                <img src={linkedinIcon} className={iconClass}></img>
            </a>
            <a
                className="tooltip"
                href="https://github.com/wang-owen/"
                target="_blank"
                data-tip="wang-owen"
            >
                <img src={githubIcon} className={iconClass}></img>
            </a>
        </div>
    );
};

export default Socials;
