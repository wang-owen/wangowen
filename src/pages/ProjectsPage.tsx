import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
    return (
        <section className="flex justify-center items-center">
            <div className="mt-20 w-5/6 lg:w-1/3">
                <ProjectCard
                    title="Brook"
                    link="https://github.com/wang-owen/Brook"
                    description={[
                        "full-stack web app allowing music downloads and playlist management for YouTube and Spotify",
                        "interactive and dynamic UI using CSR within a SPA architecture with React and Tailwind CSS",
                        "back-end to handle session-based user authentication with Django, and a RESTful API to communicate with the front-end and allow CRUD operations to be performed using the Django REST framework",
                        "normalized relational database with PostgreSQL and the Django ORM",
                        "used YouTube Data and Spotify Web APIs to obtain music info and to detect changes in a user's playlist",
                    ]}
                />
                <ProjectCard
                    title="JBKR Mobile"
                    link="https://github.com/wang-owen/JBKR-Mobile"
                    description={[
                        "Java desktop application that simulates a stock trading application, allowing users to create and manage stock profiles with access to real-time data from the NYSE and Nasdaq",
                        "utilized the YahooFinance API to obtain real-time stock market data",
                    ]}
                />
                <ProjectCard
                    title="The Wildfire Network"
                    link="https://github.com/wang-owen/TheWildfireNetwork"
                    description={[
                        "full-stack web app providing latest news and data on Canadian wildfires with a custom made wildfire prediction algorithm during Ignition Hacks 2023",
                        "designed a prediction algorithm using data obtained from WeatherAPI to measure risk of wildfire in a given area",
                    ]}
                />
                <ProjectCard
                    title="Stuckdoku"
                    link="https://github.com/wang-owen/Stuckdoku"
                    description={[
                        "sudoku with automatic solver",
                        "first exposure to web development",
                    ]}
                />
                <ProjectCard
                    title="Sorting Visualizer"
                    link="https://github.com/wang-owen/SortingVisualizer"
                    description={[
                        "app to visualize some common sorting algorithms.",
                        "implemented sorting algorithms in Python",
                        "window rendered using Pygame",
                    ]}
                />
                <ProjectCard
                    title="Snakedy Dakedy"
                    link="https://github.com/wang-owen/SnakedyDakedy"
                    description={["scuffed snake", "used Pygame"]}
                />
                <ProjectCard
                    title="Checkers"
                    link="https://github.com/wang-owen/Checkers"
                    description={[
                        "terminal-based checkers program in Java",
                        "player has option to play against computer",
                    ]}
                />
            </div>
        </section>
    );
};

export default ProjectsPage;
