import ProjectCardLg from "../components/ProjectCardLg";
import ProjectCardSm from "../components/ProjectCardSm";

const ProjectsPage = () => {
    return (
        <section>
            <div className="flex justify-center animate-fadeIn p-8 lg:p-0">
                <div className="flex flex-col justify-center items-center gap-6 lg:w-1/2 my-8">
                    <div className="w-full">
                        <ProjectCardLg
                            title="Brook"
                            description="Music streaming service replacement | Download music from YouTube/Spotify and track changes to existing playlists"
                            link="https://github.com/wang-owen/Brook"
                            img="https://github.com/wang-owen/Brook/blob/main/client/public/screenshots/homepage.png?raw=true"
                            skills={[
                                "Python",
                                "Django",
                                "Django REST framework",
                                "React",
                                "TypeScript",
                                "Tailwind CSS",
                                "PostgreSQL",
                                "RabbitMQ",
                                "Amazon S3",
                            ]}
                        />
                    </div>
                    <div className="w-full">
                        <ProjectCardLg
                            title="Internsheet"
                            description="Spreadsheet but for internship applications | Track application information, rejections, interviews, and offers"
                            link="https://github.com/wang-owen/Internsheet"
                            img="https://github.com/wang-owen/Internsheet/assets/69203168/98f1a7a1-c289-4d77-a33b-2f5b58d9f93c"
                            skills={[
                                "React",
                                "TypeScript",
                                "Tailwind CSS",
                                "Supabase",
                            ]}
                        />
                    </div>
                    <div className="w-full">
                        <ProjectCardLg
                            title="JBKR Mobile"
                            description="JBKR Mobile (Java Brokers Mobile) is a stock trading simulator with real-time stock market data sourced from the NYSE and Nasdaq."
                            link="https://github.com/wang-owen/JBKR-Mobile"
                            img="https://github.com/wang-owen/JBKR-Mobile/assets/69203168/9bc91515-cfc4-459c-a814-54f108e8fa7a"
                            skills={["Java"]}
                        />
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-9 w-full place-items-center">
                        <ProjectCardSm
                            title="Local Superchat"
                            description="Multithreaded public chat over local network"
                            link="https://github.com/wang-owen/local-superchat"
                            img="https://github.com/wang-owen/local-superchat/assets/69203168/dd957db0-08eb-4535-aab2-ce86a2eefec3"
                        />
                        <ProjectCardSm
                            title="Checkers"
                            description="Terminal-based checkers program"
                            link="https://github.com/wang-owen/Checkers"
                            img="https://github.com/wang-owen/Checkers/assets/69203168/7a812183-bb4a-47c9-b1ec-18eb686d379c"
                        />
                        <ProjectCardSm
                            title="Sorting Visualizer"
                            description="Visualizer for popular sorting algorithms"
                            link="https://github.com/wang-owen/SortingVisualizer"
                            img="https://github.com/wang-owen/SortingVisualizer/assets/69203168/ba920749-eba3-4999-9d65-b7eed7b411db"
                        />
                        <ProjectCardSm
                            title="Snakedy Dakedy"
                            description="Simple snake game in Pygame"
                            link="https://github.com/wang-owen/SnakedyDakedy"
                            img="https://github.com/wang-owen/SnakedyDakedy/assets/69203168/7ea0dd52-66cb-4629-8426-99987372a238"
                        />
                        <ProjectCardSm
                            title="The Wildfire Network"
                            description="Wildfire prediction and info website for Ignition Hacks 2023"
                            link="https://github.com/wang-owen/TheWildfireNetwork"
                            img="https://github.com/wang-owen/TheWildfireNetwork/assets/69203168/22a007d6-d469-4b7c-bbc2-75e4c484e0f6"
                        />
                        <ProjectCardSm
                            title="Stuckdoku"
                            description="Sudoku with solving algorithm for Hack the 6ix 2023"
                            link="https://github.com/wang-owen/Stuckdoku"
                            img="https://github.com/wang-owen/Stuckdoku/assets/69203168/6cd67d09-1064-40c2-9cb3-9931708de7a5"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
