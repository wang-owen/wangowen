const ProjectCard = ({
    title,
    link,
    description,
}: {
    title: string;
    link: string;
    description: string;
}) => {
    return (
        <div className="p-5 font-serif">
            <a
                href={link}
                target="_blank"
                className="text-xl mb-3 hover:underline"
            >
                {title}
            </a>
            <div>
                <div className="text-base leading-6">{description}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
