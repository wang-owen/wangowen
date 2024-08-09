import { useContext } from "react";
import { ThemeContext } from "../layouts/MainLayout";
import { FaGithub } from "react-icons/fa6";

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
            className={`card w-64 h-64 image-full hover:shadow-2xl ${
                theme === "dark" && "hover:shadow-white"
            } duration-300`}
        >
            <figure>
                <img src={img} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <a
                        role="button"
                        href={link}
                        target="_blank"
                        className="btn btn-square"
                    >
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardSm;
