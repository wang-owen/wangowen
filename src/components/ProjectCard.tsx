const ProjectCard = ({
    title,
    link,
    description,
}: {
    title: string;
    link: string;
    description: String[];
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
                <div className="text-base leading-6">
                    <ul>
                        {description.map((point) => (
                            <li className="list-disc" key={point.toString()}>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
