import { useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import { ThemeContext } from "../layouts/MainLayout";

const ProjectCardSm = ({
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
            className={`card w-64 h-64 bg-base-100 image-full border hover:-translate-y-2 duration-300 ${
                theme === "light"
                    ? "border-black hover:shadow-2xl"
                    : "border-white hover:shadow-2xl hover:shadow-white"
            }`}
        >
            <figure>
                <img src={img} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p className="text-white">{description}</p>
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

export default ProjectCardSm;
