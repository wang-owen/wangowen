import { useContext } from "react";
import { ThemeContext } from "../layouts/MainLayout";
import { FaGithub } from "react-icons/fa6";
import { TiPin } from "react-icons/ti";

const ProjectCardLg = ({
    title,
    description,
    link,
    img,
    skills,
}: {
    title: string;
    description: string;
    link: string;
    img: string;
    skills: Array<string>;
}) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            className={`card lg:card-side bg-base-300 w-full hover:shadow-2xl ${
                theme === "dark" && "hover:shadow-white"
            } duration-300`}
        >
            <figure>
                <img className="lg:w-96 self-stretch" src={img} />
            </figure>
            <div className="card-body lg:w-min gap-4">
                <h2 className="card-title">{title}</h2>
                <span className="absolute right-4 top-4">
                    <TiPin size={20} />
                </span>
                <p>{description}</p>
                <div className="flex justify-between items-end">
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => {
                            return (
                                <div className="badge badge-outline">
                                    {skill}
                                </div>
                            );
                        })}
                    </div>
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
        </div>
    );
};

export default ProjectCardLg;
