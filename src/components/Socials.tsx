import mailIcon from "../assets/img/iosmail.png";
import linkedinIcon from "../assets/img/linkedin-icon.svg";
import githubIcon from "../assets/img/square-github.svg";

const Socials = () => {
    const iconClass = "mx-1 size-14 hover:-translate-y-3 duration-500";

    return (
        <div className="mb-2 p-1 bg-gray-300 bg-opacity-40 border border-gray-500 border-opacity-40 rounded-lg flex shadow-xl">
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
