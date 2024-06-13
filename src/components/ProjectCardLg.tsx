import { useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import { ThemeContext } from "../layouts/MainLayout";

const ProjectCardLg = ({
    title,
    description,
    link,
    img,
}: {
    title: string;
    description: string;
    link: string;
    img: string;
}) => {
    const theme = useContext(ThemeContext);
    return (
        <div
            className={`card lg:card-side bg-base-100 shadow-2xl w-full border hover:-translate-y-2 duration-300 ${
                theme === "light" ? "border-black" : "border-white shadow-white"
            }`}
        >
            <figure>
                <img className="w-96" src={img} />
            </figure>
            <div className="card-body w-min">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <a
                        role="button"
                        href={link}
                        target="_blank"
                        className={`btn btn-square ${
                            theme === "dark" ? "bg-gray-600" : ""
                        }`}
                    >
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardLg;
