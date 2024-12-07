import { useContext } from "react";
import { ThemeContext } from "../layouts/MainLayout";
import Socials from "../components/Socials";

const HomePage = () => {
    const theme = useContext(ThemeContext);
    return (
        <section
            className={`absolute h-full w-full flex items-center justify-center animate-fadeInFromTop ${
                theme === "light" ? "text-black" : "text-white"
            }`}
        >
            <div className="flex flex-col gap-8 text-center items-center w-2/3 mt-[-6rem]">
                <p className="text-2xl">Hello! My name is</p>
                <h1 className="text-5xl font-bold">Owen Wang</h1>
                <p className="text-xl">
                    I'm a second year computer science student at the University
                    of Waterloo.
                </p>
                <img src="lofi knight.png" width={350} />
                <Socials />
            </div>
        </section>
    );
};

export default HomePage;
