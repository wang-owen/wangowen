import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
    // Fetch public projects from personal GitHub
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch(
                "https://api.github.com/users/wang-owen/repos"
            );
            const data = await response.json();
            setRepos(data);
        };

        fetchRepos();
    }, []);

    interface Repository {
        id: string;
        name: string;
        html_url: string;
        description: string;
    }

    return (
        <section
            id="projects"
            className="flex justify-center items-center h-screen"
        >
            <div className="mt-20 w-5/6 grid grid-cols-3 gap-3">
                {repos.map((repo: Repository) => (
                    <ProjectCard
                        key={repo.id}
                        title={repo.name}
                        link={repo.html_url}
                        description={repo.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
