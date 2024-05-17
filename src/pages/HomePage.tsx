import HomePageCard from "../components/HomePageCard";
import Socials from "../components/Socials";

const HomePage = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col justify-between items-center">
                    <h1 className="mt-10 text-4xl">Hello, my name is</h1>
                    <HomePageCard />
                    <Socials />
                </div>
            </div>
        </>
    );
};

export default HomePage;
