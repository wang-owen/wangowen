import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";
import ssj3 from "../assets/img/ssj3.gif";
import Carousel from "../components/Carousel";

const HomePage = () => {
    const theme = useContext(ThemeContext);

    const [isHovered, setIsHovered] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPos({ x: event.clientX, y: event.clientY });
        };

        if (isHovered) {
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [isHovered]);

    return (
        <section className="flex flex-col self-center justify-center lg:gap-8">
            <div className="flex justify-center px-8 lg:px-16">
                <div className="flex flex-col lg:flex-row justify-between lg:w-2/3 gap-8">
                    <div
                        className={`relative animate-fadeInFromLeft flex flex-col gap-8 h-full lg:w-1/2 ${
                            theme === "light" ? "text-black" : "text-white"
                        }`}
                    >
                        <h1 className="text-5xl font-bold">Owen Wang</h1>
                        <div>
                            <p className="text-2xl">
                                I'm a second year computer science student at
                                the University of Waterloo.
                            </p>
                            <br />
                            <div className="text-lg leading-relaxed">
                                <p>
                                    I'm constantly looking for opportunities to
                                    learn new languages and technologies, and
                                    aim to push my skills{" "}
                                    <span className="group">
                                        <span
                                            onMouseEnter={() =>
                                                setIsHovered(true)
                                            }
                                            onMouseLeave={() =>
                                                setIsHovered(false)
                                            }
                                        >
                                            <a
                                                className="italic font-bold underline hover:opacity-50 duration-300 hover:cursor-ne-resize"
                                                href="https://www.youtube.com/watch?v=8TGalu36BHA"
                                                target="_blank"
                                            >
                                                even further beyond
                                            </a>
                                        </span>
                                        {isHovered && (
                                            <img
                                                src={ssj3}
                                                alt="SSJ3"
                                                className={`fixed z-10 w-96 max-w-[50%] h-auto rounded-box shadow-2xl ${
                                                    theme === "dark" &&
                                                    "shadow-white"
                                                }`}
                                                style={{
                                                    top: pos.y + 10 + "px",
                                                    left: pos.x + 10 + "px",
                                                }}
                                            />
                                        )}
                                    </span>
                                    .
                                </p>
                                <p>
                                    Interested in robotics 🦾, networking 🌐,
                                    computer vision 👁️, and web dev 🚀.
                                </p>
                                <br />
                                <p>
                                    Feel free to reach out about anything! Also
                                    check out my{" "}
                                    <Link
                                        to="/projects"
                                        className="underline hover:opacity-50 duration-300"
                                    >
                                        projects
                                    </Link>{" "}
                                    or take a look at my{" "}
                                    <a
                                        href="Owen Wang Resume.pdf"
                                        target="_blank"
                                        className="underline hover:opacity-50 duration-300 cursor-ne-resize"
                                    >
                                        resume
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center gap-8 animate-fadeIn">
                        <img src="lofi knight.png" width={350} />
                        <Socials />
                    </div>
                </div>
            </div>
            <div className="animate-fadeIn flex justify-center">
                <Carousel />
            </div>
        </section>
    );
};

export default HomePage;
