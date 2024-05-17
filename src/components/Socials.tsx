import mailIcon from "../assets/img/icons/iosmail.png";
import linkedinIcon from "../assets/img/icons/linkedin-icon.svg";
import githubIcon from "../assets/img/icons/square-github.svg";

const Socials = () => {
    const iconClass = "mx-1 size-14 hover:-translate-y-3 duration-500";

    return (
        <div className="mb-2 p-1 bg-gray-300 bg-opacity-40 border border-gray-500 border-opacity-40 rounded-lg flex shadow-xl">
            <a href="mailto:contact@wangowen.com" target="_blank">
                <img src={mailIcon} className={iconClass}></img>
            </a>
            <a href="https://www.linkedin.com/in/o-wang/" target="_blank">
                <img src={linkedinIcon} className={iconClass}></img>
            </a>
            <a href="https://github.com/wang-owen/" target="_blank">
                <img src={githubIcon} className={iconClass}></img>
            </a>
        </div>
    );
};

export default Socials;
